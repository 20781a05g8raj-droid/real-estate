import { NextRequest, NextResponse } from 'next/server';
import { saveLead, getLeads, exportCSV } from '@/lib/leads';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message, source, propertyId } = body;

        if (!email || !source) {
            return NextResponse.json({ error: 'email and source are required' }, { status: 400 });
        }

        const lead = saveLead({
            name: name || 'Anonymous',
            email,
            phone: phone || '',
            message: message || '',
            source,
            propertyId: propertyId || undefined,
        });

        return NextResponse.json({ success: true, lead }, { status: 201 });
    } catch (err) {
        console.error('Lead POST error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const format = searchParams.get('format');
    const leads = getLeads();

    if (format === 'csv') {
        const csv = exportCSV(leads);
        return new NextResponse(csv, {
            status: 200,
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="housen-leads-${Date.now()}.csv"`,
            },
        });
    }

    return NextResponse.json({ leads, total: leads.length });
}
