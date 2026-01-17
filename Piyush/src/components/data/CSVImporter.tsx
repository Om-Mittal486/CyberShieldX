'use client';

import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import Papa from 'papaparse';

interface CSVImporterProps {
    onDataLoaded?: (data: any[]) => void;
    acceptedColumns?: string[];
}

export default function CSVImporter({ onDataLoaded, acceptedColumns }: CSVImporterProps) {
    const [file, setFile] = useState<File | null>(null);
    const [data, setData] = useState<any[]>([]);
    const [columns, setColumns] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError(null);
            parseCSV(selectedFile);
        }
    };

    const parseCSV = (file: File) => {
        setIsLoading(true);
        setError(null);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.errors.length > 0) {
                    setError(`CSV parsing error: ${results.errors[0].message}`);
                    setIsLoading(false);
                    return;
                }

                const parsedData = results.data as any[];
                const cols = results.meta.fields || [];

                setData(parsedData);
                setColumns(cols);
                setIsLoading(false);

                if (onDataLoaded) {
                    onDataLoaded(parsedData);
                }
            },
            error: (error) => {
                setError(`Failed to parse CSV: ${error.message}`);
                setIsLoading(false);
            }
        });
    };

    const downloadSample = () => {
        const sampleCSV = `message,category,severity,keywords
"I will hurt you",threat,high,"hurt,violence"
"You're so stupid",harassment,medium,"insult"
"Send me $1000 or else",extortion,critical,"money,threat"
"Hey how are you?",safe,low,""`;

        const blob = new Blob([sampleCSV], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sample-dataset.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            {/* Upload Section */}
            <div className="bg-[var(--bg-card)] border border-white/10 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Import Dataset</h3>
                        <p className="text-[var(--text-secondary)] text-sm">
                            Upload your CSV file to load training data or test cases
                        </p>
                    </div>
                    <button
                        onClick={downloadSample}
                        className="px-4 py-2 border border-[var(--accent)] text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)] hover:text-black transition-all"
                    >
                        [ DOWNLOAD SAMPLE ]
                    </button>
                </div>

                <label className="block">
                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileChange}
                        className="hidden"
                        id="csv-upload"
                    />
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-12 text-center cursor-pointer hover:border-[var(--accent)] transition-colors">
                        <Upload className="w-12 h-12 mx-auto mb-4 text-[var(--text-secondary)]" />
                        <p className="text-white font-medium mb-2">
                            {file ? file.name : 'Click to upload CSV file'}
                        </p>
                        <p className="text-[var(--text-tertiary)] text-sm">
                            or drag and drop your CSV file here
                        </p>
                    </div>
                </label>

                {isLoading && (
                    <div className="mt-4 text-center text-[var(--accent)]">
                        <p>Parsing CSV...</p>
                    </div>
                )}

                {error && (
                    <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div>
                            <p className="text-red-400 font-medium">Error</p>
                            <p className="text-red-300 text-sm">{error}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Data Preview */}
            {data.length > 0 && (
                <div className="bg-[var(--bg-card)] border border-white/10 rounded-lg p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-6 h-6 text-[var(--accent)]" />
                        <div>
                            <h3 className="text-xl font-bold text-white">Data Loaded Successfully</h3>
                            <p className="text-[var(--text-secondary)] text-sm">
                                {data.length} rows • {columns.length} columns
                            </p>
                        </div>
                    </div>

                    {/* Columns */}
                    <div className="mb-4">
                        <p className="text-sm text-[var(--text-secondary)] mb-2">Detected Columns:</p>
                        <div className="flex flex-wrap gap-2">
                            {columns.map((col, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 rounded text-xs font-mono"
                                >
                                    {col}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Preview Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    {columns.map((col, idx) => (
                                        <th key={idx} className="text-left py-3 px-4 text-[var(--text-secondary)] font-medium">
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.slice(0, 5).map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                                        {columns.map((col, colIdx) => (
                                            <td key={colIdx} className="py-3 px-4 text-white">
                                                {String(row[col] || '').substring(0, 50)}
                                                {String(row[col] || '').length > 50 ? '...' : ''}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {data.length > 5 && (
                            <p className="text-center text-[var(--text-tertiary)] text-xs mt-4">
                                Showing 5 of {data.length} rows
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
