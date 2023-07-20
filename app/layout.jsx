export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <title>Bicicletas</title>
            </head>
            <body>
                <header>
                    <h3>Estadisticas del uso de la bicicleta en Medellin</h3>
                    <ul>
                        <li>Acerca de</li>
                        <li>Grafico por edades</li>
                    </ul>
                </header>
                {children}
            </body>
        </html>
    )
}