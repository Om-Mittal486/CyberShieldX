'use client';

import React, { useState, useEffect } from 'react';
import { Database, Upload, Download, Trash2 } from 'lucide-react';
import CSVImporter from '@/components/data/CSVImporter';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function DatasetPage() {
    const [loadedData, setLoadedData] = useState<any[]>([]);
    const [stats, setStats] = useState({
        totalRows: 0,
        columns: 0,
        categories: new Set<string>()
    });
    const [isLoading, setIsLoading] = useState(true);

    // Auto-load dataset on mount
    useEffect(() => {
        const loadDataset = async () => {
            try {
                const response = await fetch('/data/dataset.csv');
                if (!response.ok) {
                    throw new Error('Dataset not found or could not be loaded');
                }
                const csvText = await response.text();

                // Parse CSV using the same logic as CSVImporter
                const Papa = (await import('papaparse')).default;
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const data = results.data as any[];
                        handleDataLoaded(data);
                        setIsLoading(false);
                    },
                    error: () => {
                        setIsLoading(false);
                    }
                });
            } catch (error) {
                console.log('No dataset found, waiting for upload');
                setIsLoading(false);
            }
        };

        loadDataset();
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleDataLoaded = (data: any[]) => {
        setLoadedData(data);

        // Calculate stats
        const categories = new Set(data.map(row => row.category).filter(Boolean));
        setStats({
            totalRows: data.length,
            columns: Object.keys(data[0] || {}).length,
            categories
        });
    };

    const clearData = () => {
        setLoadedData([]);
        setStats({ totalRows: 0, columns: 0, categories: new Set() });
    };

    const exportToJSON = () => {
        const json = JSON.stringify(loadedData, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dataset.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="w-8 h-8 text-[var(--accent)]" />
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">DATASET MANAGER</h1>
                        </div>
                        <p className="text-xl text-[var(--text-secondary)]">
                            Import and manage your training data or test cases
                        </p>
                    </div>
                </ScrollReveal>

                {/* Stats Cards */}
                {loadedData.length > 0 && (
                    <ScrollReveal delay={200}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-[var(--bg-card)] border border-white/10 rounded-lg p-6">
                                <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Total Rows</p>
                                <p className="text-3xl font-bold text-white">{stats.totalRows}</p>
                            </div>
                            <div className="bg-[var(--bg-card)] border border-white/10 rounded-lg p-6">
                                <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Columns</p>
                                <p className="text-3xl font-bold text-white">{stats.columns}</p>
                            </div>
                            <div className="bg-[var(--bg-card)] border border-white/10 rounded-lg p-6">
                                <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mb-2">Categories</p>
                                <p className="text-3xl font-bold text-white">{stats.categories.size}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {/* CSV Importer */}
                <ScrollReveal delay={300}>
                    <CSVImporter onDataLoaded={handleDataLoaded} />
                </ScrollReveal>

                {/* Actions */}
                {loadedData.length > 0 && (
                    <ScrollReveal delay={400}>
                        <div className="mt-8 flex items-center gap-4">
                            <button
                                onClick={exportToJSON}
                                className="px-6 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                [ EXPORT TO JSON ]
                            </button>
                            <button
                                onClick={clearData}
                                className="px-6 py-3 border-2 border-red-500 text-red-500 font-bold tracking-wider hover:bg-red-500 hover:text-black transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                [ CLEAR DATA ]
                            </button>
                        </div>
                    </ScrollReveal>
                )}

                {/* Instructions */}
                <ScrollReveal delay={500}>
                    <div className="mt-12 bg-[var(--bg-card)] border border-white/10 rounded-lg p-8">
                        <h3 className="text-xl font-bold mb-4">How to Use Your Dataset</h3>
                        <div className="space-y-4 text-[var(--text-secondary)]">
                            <div>
                                <p className="font-medium text-white mb-2">1. Upload Your CSV</p>
                                <p className="text-sm">Click the upload area or drag your CSV file. The file will be parsed automatically.</p>
                            </div>
                            <div>
                                <p className="font-medium text-white mb-2">2. Review the Data</p>
                                <p className="text-sm">Check the preview table to ensure your data loaded correctly.</p>
                            </div>
                            <div>
                                <p className="font-medium text-white mb-2">3. Use the Data</p>
                                <p className="text-sm">The loaded data can be used for testing the analyzer, training improvements, or demo purposes.</p>
                            </div>
                            <div>
                                <p className="font-medium text-white mb-2">4. Export if Needed</p>
                                <p className="text-sm">Convert your CSV to JSON format for easier integration with the application.</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
