export default function dados(request, response ) {
    const dynamicDate = new Date();

    response.status(200).json({
        date: dynamicDate.toGMTString(),
        Dolar: "R$$ "+moedas,
        CDI: "13,15% a.a",
        IPCA: "0,67% ultimo mês",
        IPCA: "11,89% acumulado 12 meses",
        INPC: "0,62% ultimo mês",
        IGPM: "1,4%",
        PIB: "R$ 8,7 tri ano",
        PIB: "R$ 2,2 tri Trimestre",
        PIB: "R$ 35.161,70 per Capita 2019",
        TR: "0,2409",
        IBOVESPA: "106.471.92",
        Bitcoin: "119.464.38",
        SalarioMinimo: "R$ 1.212",
    });
}