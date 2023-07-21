export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <title>Bicicletas</title>
            </head>
            <body>
                <header>
                    <h3>Estadísticas del uso de la bicicleta en Medellín</h3>
                    <ul>
                        <li>Acerca de</li>
                        <li><a href="/edad">Grafico por edades</a></li>
                        <li><a href="/genero">Grafico por Genero</a></li>
                    </ul>
                </header>
                {children}
            </body>
        </html>
    )
}