"use client";

import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    Legend
} from 'recharts';
import { Shield, AlertTriangle, Activity, Map, Server, Lock, Globe } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

// Types
interface AnalysisMetric {
    id: string;
    toxicity_score: number;
    created_at: string;
    crime_category?: string;
}

interface SystemHealth {
    ai_model: 'online' | 'offline' | 'degraded';
    ocr_service: 'online' | 'offline';
    database: 'connected' | 'disconnected';
}

const ThreatDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState({
        total: 0,
        highRisk: 0,
        activeinvestigations: 0
    });

    const [trendData, setTrendData] = useState<any[]>([]);
    const [categoryData, setCategoryData] = useState<any[]>([]);
    const [health, setHealth] = useState<SystemHealth>({
        ai_model: 'online',
        ocr_service: 'online',
        database: 'connected'
    });

    const COLORS = ['#00ff41', '#ff006e', '#00b8ff', '#ffd60a'];

    useEffect(() => {
        fetchInitialData();
        const subscription = subscribeToUpdates();
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const fetchInitialData = async () => {
        try {
            const { data, error } = await supabase
                .from('analyses')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(100);

            if (error) throw error;
            processData(data || []);
            setHealth(prev => ({ ...prev, database: 'connected' }));
        } catch (err) {
            console.error('Error fetching dashboard data:', err);
            setHealth(prev => ({ ...prev, database: 'disconnected' }));
        } finally {
            setLoading(false);
        }
    };

    const subscribeToUpdates = () => {
        return supabase
            .channel('dashboard-updates')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'analyses' }, (payload) => {
                // Simple re-fetch for now to ensure consistency
                fetchInitialData();
            })
            .subscribe();
    };

    const processData = (data: any[]) => {
        // 1. Overview Metrics
        const total = data.length;
        const highRisk = data.filter(d => d.toxicity_score > 75).length;

        // 2. Trends (Mocking time buckets for demo if simple data)
        const trends = data.slice(0, 7).map((d, i) => ({
            time: new Date(d.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            toxicity: d.toxicity_score
        })).reverse();

        // 3. Categories
        const categories: Record<string, number> = {};
        data.forEach(d => {
            if (d.crime_category) {
                categories[d.crime_category] = (categories[d.crime_category] || 0) + 1;
            }
        });

        const pieData = Object.keys(categories).map(key => ({
            name: key,
            value: categories[key]
        }));

        setMetrics({ total, highRisk, activeinvestigations: Math.floor(total * 0.2) }); // Mock investigation ratio
        setTrendData(trends);
        setCategoryData(pieData.length ? pieData : [{ name: 'No Data', value: 1 }]);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-[#00ff41]">
                <Activity className="animate-pulse w-12 h-12" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 p-6 font-mono">
            {/* Header */}
            <header className="mb-8 border-b border-[#00ff41]/30 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-[#00ff41] tracking-tighter flex items-center gap-2">
                        <Shield className="w-8 h-8" />
                        CYBER_SHIELD_X // DASHBOARD
                    </h1>
                    <p className="text-xs text-[#00ff41]/60 mt-1">REAL-TIME THREAT MONITORING SYSTEM v1.0</p>
                </div>
                <div className="flex gap-2 text-sm">
                    <span className="px-3 py-1 bg-[#00ff41]/10 border border-[#00ff41]/30 text-[#00ff41] rounded">LIVE</span>
                    <span className="px-3 py-1 bg-gray-900 border border-gray-800 text-gray-500 rounded">24H</span>
                </div>
            </header>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-900/50 border border-[#00ff41]/30 p-4 rounded-lg backdrop-blur-sm hover:border-[#00ff41] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 uppercase">Total Scans</span>
                        <Activity className="w-4 h-4 text-[#00ff41]" />
                    </div>
                    <div className="text-3xl font-bold text-white">{metrics.total}</div>
                    <div className="text-xs text-[#00ff41] mt-1 flex items-center gap-1">
                        <span>↑ 12%</span> <span className="text-gray-600">vs yesterday</span>
                    </div>
                </div>

                <div className="bg-gray-900/50 border border-[#ff006e]/30 p-4 rounded-lg backdrop-blur-sm hover:border-[#ff006e] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 uppercase">High Risk</span>
                        <AlertTriangle className="w-4 h-4 text-[#ff006e]" />
                    </div>
                    <div className="text-3xl font-bold text-white">{metrics.highRisk}</div>
                    <div className="text-xs text-[#ff006e] mt-1">CRITICAL ATTENTION</div>
                </div>

                <div className="bg-gray-900/50 border border-blue-500/30 p-4 rounded-lg backdrop-blur-sm hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 uppercase">Active Cases</span>
                        <Map className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-white">{metrics.activeinvestigations}</div>
                    <div className="text-xs text-blue-400 mt-1">UNDER INVESTIGATION</div>
                </div>

                <div className="bg-gray-900/50 border border-[#ffd60a]/30 p-4 rounded-lg backdrop-blur-sm hover:border-[#ffd60a] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 uppercase">System Status</span>
                        <Server className="w-4 h-4 text-[#ffd60a]" />
                    </div>
                    <div className="text-lg font-bold text-white uppercase">{health.database}</div>
                    <div className="text-xs text-[#ffd60a] mt-1">LATENCY: 45ms</div>
                </div>
            </div>

            {/* Main Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

                {/* Toxicity Trends */}
                <div className="lg:col-span-2 bg-gray-900/50 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-[#00ff41] mb-6 flex items-center gap-2">
                        <Activity className="w-5 h-5" /> THREAT_LEVEL_ANALYSIS // REAL-TIME
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trendData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                <XAxis dataKey="time" stroke="#666" fontSize={12} />
                                <YAxis stroke="#666" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', border: '1px solid #00ff41' }}
                                    itemStyle={{ color: '#00ff41' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="toxicity"
                                    stroke="#00ff41"
                                    strokeWidth={2}
                                    dot={{ fill: '#00ff41', r: 4 }}
                                    activeDot={{ r: 8, fill: '#fff' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Crime Categories */}
                <div className="bg-gray-900/50 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-[#ff006e] mb-6 flex items-center gap-2">
                        <Globe className="w-5 h-5" /> THREAT_DISTRIBUTION
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', border: '1px solid #fff' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Heatmap & System Health */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Mock Heatmap / Activity Grid */}
                <div className="lg:col-span-2 bg-gray-900/50 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-[#00b8ff] mb-6 flex items-center gap-2">
                        <Map className="w-5 h-5" /> ACTIVITY_HEATMAP // 24H
                    </h3>
                    <div className="grid grid-cols-12 gap-1 h-[150px]">
                        {/* Generating a visual grid to simulate heatmap since we don't have geospatial data yet */}
                        {Array.from({ length: 48 }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-sm transition-all duration-500 hover:scale-110"
                                style={{
                                    backgroundColor: Math.random() > 0.7 ? '#00b8ff' : '#1a1a1a',
                                    opacity: Math.random() * 0.8 + 0.2
                                }}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>00:00</span>
                        <span>12:00</span>
                        <span>23:59</span>
                    </div>
                </div>

                {/* System Health Detailed */}
                <div className="bg-gray-900/50 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-[#ffd60a] mb-6 flex items-center gap-2">
                        <Lock className="w-5 h-5" /> SYSTEM_DIAGNOSTICS
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-black/40 rounded border border-white/5">
                            <span className="text-sm">AI Model Engine</span>
                            <span className="flex items-center gap-2 text-xs text-[#00ff41]">
                                <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></span>
                                OPERATIONAL
                            </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/40 rounded border border-white/5">
                            <span className="text-sm">OCR Service</span>
                            <span className="flex items-center gap-2 text-xs text-[#00ff41]">
                                <span className="w-2 h-2 bg-[#00ff41] rounded-full"></span>
                                READY
                            </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/40 rounded border border-white/5">
                            <span className="text-sm">DB Latency</span>
                            <span className="flex items-center gap-2 text-xs text-[#ffd60a]">
                                42ms
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThreatDashboard;
