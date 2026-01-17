export interface PhishingResult {
    isSuspicious: boolean;
    score: number; // 0-100
    reasons: string[];
    safeDomain?: boolean;
}

export class PhishingDetector {
    private suspiciousPatterns = [
        // Authentication & Account
        /login/i, /signin/i, /signup/i, /register/i, /auth/i,
        /verify/i, /validate/i, /confirm/i, /activate/i,
        /account/i, /profile/i, /user/i, /password/i, /reset/i,

        // Financial
        /bank/i, /banking/i, /payment/i, /billing/i, /invoice/i,
        /paypal/i, /wallet/i, /card/i, /credit/i, /debit/i,
        /transaction/i, /transfer/i, /checkout/i, /pay/i,

        // Security & Updates
        /security/i, /secure/i, /update/i, /upgrade/i, /renew/i,
        /suspend/i, /locked/i, /blocked/i, /alert/i, /warning/i,

        // Cryptocurrency
        /crypto/i, /bitcoin/i, /ethereum/i, /blockchain/i, /nft/i,
        /metamask/i, /binance/i, /coinbase/i, /connect/i, /claim/i
    ];

    private legitimateDomains = [
        // Tech Giants
        'google.com', 'microsoft.com', 'apple.com', 'amazon.com',
        'meta.com', 'facebook.com', 'instagram.com', 'whatsapp.com',

        // Social Media
        'twitter.com', 'x.com', 'linkedin.com', 'reddit.com',
        'tiktok.com', 'snapchat.com', 'pinterest.com', 'tumblr.com',

        // Tech Services
        'github.com', 'gitlab.com', 'stackoverflow.com', 'medium.com',
        'dropbox.com', 'box.com', 'slack.com', 'zoom.us', 'discord.com',

        // Streaming & Entertainment
        'netflix.com', 'youtube.com', 'spotify.com', 'twitch.tv',
        'hulu.com', 'disneyplus.com', 'primevideo.com', 'hbomax.com',

        // E-commerce
        'ebay.com', 'walmart.com', 'target.com', 'bestbuy.com',
        'etsy.com', 'shopify.com', 'aliexpress.com', 'alibaba.com',

        // Financial
        'paypal.com', 'stripe.com', 'square.com', 'venmo.com',
        'chase.com', 'bankofamerica.com', 'wellsfargo.com', 'citibank.com',
        'capitalone.com', 'usbank.com', 'americanexpress.com', 'discover.com',

        // Cryptocurrency
        'coinbase.com', 'binance.com', 'kraken.com', 'gemini.com',

        // Cloud & Hosting
        'aws.amazon.com', 'azure.microsoft.com', 'cloud.google.com',
        'cloudflare.com', 'digitalocean.com', 'heroku.com', 'vercel.com'
    ];

    // Popular brands for typosquatting detection (60+ brands)
    private popularBrands = [
        // Tech Giants
        'google', 'microsoft', 'apple', 'amazon', 'meta', 'facebook',
        'instagram', 'whatsapp', 'twitter', 'linkedin', 'tiktok',

        // Tech Services
        'github', 'gitlab', 'stackoverflow', 'medium', 'dropbox',
        'slack', 'zoom', 'discord', 'notion', 'trello', 'asana',

        // Streaming
        'netflix', 'youtube', 'spotify', 'twitch', 'hulu', 'disney',
        'hbo', 'primevideo', 'soundcloud', 'pandora',

        // E-commerce
        'ebay', 'walmart', 'target', 'bestbuy', 'etsy', 'shopify',
        'aliexpress', 'alibaba', 'wayfair', 'overstock',

        // Financial Services
        'paypal', 'stripe', 'square', 'venmo', 'cashapp', 'zelle',
        'chase', 'wellsfargo', 'bankofamerica', 'citibank', 'capitalone',
        'usbank', 'americanexpress', 'discover', 'hsbc', 'barclays',

        // Cryptocurrency
        'coinbase', 'binance', 'kraken', 'gemini', 'metamask', 'opensea',
        'uniswap', 'pancakeswap', 'crypto', 'blockchain',

        // Other Popular
        'reddit', 'pinterest', 'snapchat', 'telegram', 'signal',
        'adobe', 'salesforce', 'oracle', 'ibm', 'intel', 'nvidia'
    ];

    // Suspicious TLDs commonly used in phishing (30+ TLDs)
    private suspiciousTLDs = [
        // Free domains (highest risk)
        '.tk', '.ml', '.ga', '.cf', '.gq',

        // Generic suspicious
        '.xyz', '.top', '.club', '.work', '.click', '.link',
        '.online', '.site', '.website', '.space', '.tech',

        // Download/File related (risky)
        '.download', '.stream', '.zip', '.mov', '.rar',

        // Crypto/Finance related
        '.loan', '.finance', '.trading', '.accountant', '.credit',

        // Other suspicious
        '.win', '.bid', '.review', '.party', '.trade', '.date',
        '.racing', '.men', '.science', '.gdn'
    ];

    // URL shortener services (25+ services)
    private urlShorteners = [
        // Popular shorteners
        'bit.ly', 'tinyurl.com', 'goo.gl', 't.co', 'ow.ly',
        'is.gd', 'buff.ly', 'adf.ly', 'bl.ink', 'lnkd.in',

        // Other common shorteners
        'short.link', 'tiny.cc', 'rb.gy', 'cutt.ly', 'shorturl.at',
        'clck.ru', 'v.gd', 'trib.al', 'u.to', 'x.co',

        // Social media shorteners
        'fb.me', 'youtu.be', 'amzn.to', 'geni.us', 'spoti.fi'
    ];

    analyze(url: string): PhishingResult {
        const reasons: string[] = [];
        let score = 0;

        // Normalize URL
        let normalizedUrl = url.toLowerCase();
        if (!normalizedUrl.startsWith('http')) {
            normalizedUrl = 'https://' + normalizedUrl;
        }

        try {
            const urlObj = new URL(normalizedUrl);
            const domain = urlObj.hostname;

            // Check if legitimate (allow-list)
            const isLegit = this.legitimateDomains.some(d => domain.endsWith(d));
            if (isLegit) {
                return { isSuspicious: false, score: 0, reasons: ['Trusted Domain'], safeDomain: true };
            }

            // Check for insecure HTTP protocol
            if (urlObj.protocol === 'http:') {
                score += 40;
                reasons.push('Uses insecure HTTP protocol (no encryption)');

                // Extra penalty if HTTP is used on sensitive pages
                const sensitivePaths = /login|verify|account|bank|payment|checkout|signin|secure/i;
                if (sensitivePaths.test(normalizedUrl)) {
                    score += 30;
                    reasons.push('HTTP used on sensitive page (major security risk)');
                }
            }

            // Check for IP address usage
            if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(domain)) {
                score += 80;
                reasons.push('Uses IP address instead of domain name');
            }

            // Check for excessive length
            if (domain.length > 50) {
                score += 20;
                reasons.push('Domain name is suspiciously long');
            }

            // Check for multiple subdomains
            if ((domain.match(/\./g) || []).length > 3) {
                score += 30;
                reasons.push('Excessive number of subdomains');
            }

            // Check for suspicious keywords in domain/path
            this.suspiciousPatterns.forEach(pattern => {
                if (pattern.test(normalizedUrl)) {
                    score += 25;
                    reasons.push(`Contains suspicious keyword: ${pattern.source}`);
                }
            });

            // Homograph / Typosquatting checks (simplified)
            if (domain.includes('rn') && (domain.includes('m') || domain.includes('microsoft'))) { // e.g. 'microsornft.com'
                score += 40;
                reasons.push('Potential homograph attack detected');
            }

            // Special char checks
            if (url.includes('@')) {
                score += 60;
                reasons.push('Contains identity masking (@ symbol)');
            }

            // Check for URL shorteners
            if (this.urlShorteners.some(shortener => domain.includes(shortener))) {
                score += 25;
                reasons.push('Uses URL shortener (hides real destination)');
            }

            // Check for suspicious TLDs
            const hasSuspiciousTLD = this.suspiciousTLDs.some(tld => domain.endsWith(tld));
            if (hasSuspiciousTLD) {
                score += 30;
                reasons.push('Uses suspicious top-level domain (TLD)');
            }

            // Typosquatting detection
            const typosquattingMatch = this.detectTyposquatting(domain);
            if (typosquattingMatch) {
                score += 80;
                reasons.push(`Possible typosquatting of '${typosquattingMatch}'`);
            }

            return {
                isSuspicious: score > 50,
                score: Math.min(score, 100),
                reasons: reasons.length > 0 ? reasons : ['No specific threats detected, but proceed with caution'],
                safeDomain: false
            };

        } catch (e) {
            return {
                isSuspicious: true,
                score: 100,
                reasons: ['Invalid URL format'],
                safeDomain: false
            };
        }
    }

    // Detect typosquatting by comparing domain to popular brands
    private detectTyposquatting(domain: string): string | null {
        // Remove TLD for comparison
        const domainWithoutTLD = domain.split('.')[0];

        for (const brand of this.popularBrands) {
            // Skip if exact match (already handled by legitimate domains)
            if (domainWithoutTLD === brand) continue;

            // Check if domain contains the brand name with modifications
            if (domainWithoutTLD.includes(brand) && domainWithoutTLD !== brand) {
                // e.g., 'paypal-secure', 'paypal123'
                return brand;
            }

            // Calculate similarity using Levenshtein distance
            const similarity = this.calculateSimilarity(domainWithoutTLD, brand);

            // If very similar (1-2 character difference), likely typosquatting
            if (similarity >= 0.75 && domainWithoutTLD.length >= 4) {
                return brand;
            }
        }

        return null;
    }

    // Calculate string similarity using Levenshtein distance
    private calculateSimilarity(str1: string, str2: string): number {
        const len1 = str1.length;
        const len2 = str2.length;
        const matrix: number[][] = [];

        // Initialize matrix
        for (let i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }

        // Fill matrix
        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,      // deletion
                    matrix[i][j - 1] + 1,      // insertion
                    matrix[i - 1][j - 1] + cost // substitution
                );
            }
        }

        const distance = matrix[len1][len2];
        const maxLen = Math.max(len1, len2);
        return 1 - distance / maxLen;
    }
}
