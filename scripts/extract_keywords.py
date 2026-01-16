#!/usr/bin/env python3
"""
Extract all keywords from the cybershieldx dataset and categorize them
"""
import csv
import json
from collections import defaultdict

# Read the dataset
dataset_path = '/Users/piyushraj/Desktop/CyberShieldX/Piyush/public/data/cybershieldx_dataset.csv'

threat_keywords = set()
harassment_keywords = set()
fraud_keywords = set()

threat_types = ['Criminal Threat', 'Blackmail', 'Extortion', 'Account Hacking']
harassment_types = ['Online Harassment', 'Harassment', 'Mild Toxicity']
fraud_types = ['Financial Fraud', 'Account Hacking', 'Scam']

print("Extracting keywords from dataset...")

with open(dataset_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        crime_type = row.get('crime_type', '')
        toxicity_label = row.get('toxicity_label', '')
        matched_keywords_raw = row.get('matched_keywords', '')
        
        # Parse matched keywords (they're comma-separated in quotes)
        if matched_keywords_raw and matched_keywords_raw != 'none':
            # Remove outer quotes and split by comma
            keywords_str = matched_keywords_raw.strip('"')
            keywords = [k.strip() for k in keywords_str.split(',') if k.strip()]
            
            # Categorize based on crime type
            if any(t in crime_type for t in threat_types) or 'Threat' in toxicity_label:
                threat_keywords.update(keywords)
            
            if any(t in crime_type for t in harassment_types) or 'Harassment' in toxicity_label or 'Mild' in toxicity_label:
                harassment_keywords.update(keywords)
            
            if any(t in crime_type for t in fraud_types) or 'Fraud' in toxicity_label:
                fraud_keywords.update(keywords)

# Sort and prepare output
threat_list = sorted(list(threat_keywords))
harassment_list = sorted(list(harassment_keywords))
fraud_list = sorted(list(fraud_keywords))

print(f"\n✅ Extraction Complete!")
print(f"   Threat keywords: {len(threat_list)}")
print(f"   Harassment keywords: {len(harassment_list)}")
print(f"   Fraud keywords: {len(fraud_list)}")

# Save to JSON for easy import
output = {
    'threats': threat_list,
    'harassment': harassment_list,
    'fraud': fraud_list
}

with open('extracted_keywords.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print("\n📝 Saved to: extracted_keywords.json")

# Print sample keywords
print("\n🔍 Sample Threat Keywords:")
print(threat_list[:20])
print("\n🔍 Sample Harassment Keywords:")
print(harassment_list[:20])
print("\n🔍 Sample Fraud Keywords:")
print(fraud_list[:20])
