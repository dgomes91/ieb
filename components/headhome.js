import React from 'react'
import Head from 'next/head'
import { useRouter } from "next/router";

function Headhome() {
	const router = useRouter();
	const canonicalUrl = (`https://ieb.app.br` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

	return (
		<Head>

			<title>IEB | Indicadores Economicos do Brasil</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="title" content="IEB | Indicadores Economicos do Brasil" />
			<meta name="description" content="Compilado dos principais indicadores economicos do brasil atualizados SEMPRE" />


			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://ieb.app.br/" />
			<meta property="og:title" content="IEB | Indicadores Economicos do Brasil" />
			<meta property="og:description" content="Compilado dos principais indicadores economicos do brasil atualizados SEMPRE" />
			<meta property="og:image" content="" />


			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://ieb.app.br/" />
			<meta property="twitter:title" content="IEB | Indicadores Economicos do Brasil" />
			<meta property="twitter:description" content="Compilado dos principais indicadores economicos do brasil atualizados SEMPRE" />
			<meta property="twitter:image" content="" />

			<meta name="title" content="IEB | Indicadores Economicos do Brasil" />
			<meta name="description" content="Compilado dos principais indicadores economicos do brasil atualizados SEMPRE" />
			<meta name="keywords" content="inflação, deflação, cdi, ipca, cambio, dolar, euro, bitcoin, ibovespa, cotação, pib, tr, salario mínimo, api, economia, finanças, índice" />
			<meta name="robots" content="index, follow" />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="language" content="Portuguese" />
			<meta name="revisit-after" content="5 days" />
			<meta name="author" content="Danilo Silva Gomes " />
			<link rel="canonical" href={canonicalUrl} />

			<link
				rel="preconnect"
				href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com" crossOrigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap"
				rel="stylesheet" />

			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />

		</Head>
	)
}

export default Headhome