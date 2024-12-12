const fs = require('fs');

/**
 * Corrige os dados em arquivos JSON corrompidos.
 * Lê dois arquivos JSON corrompidos, realiza correções nos campos de texto e numéricos, e gera novos arquivos corrigidos.
 *
 * @function corrigirDados
 */
function corrigirDados() {
    const db1 = JSON.parse(fs.readFileSync('broken_database_1.json', 'utf8'));
    const db2 = JSON.parse(fs.readFileSync('broken_database_2.json', 'utf8'));

    /**
     * Corrige texto corrompido substituindo caracteres especiais e capitalizando a primeira letra.
     *
     * @param {string} texto - O texto a ser corrigido.
     * @returns {string} O texto corrigido.
     */
    const corrigirTexto = texto => {
        const textoCorrigido = texto.replace(/æ/g, 'a').replace(/ø/g, 'o');
        return textoCorrigido.charAt(0).toUpperCase() + textoCorrigido.slice(1);
    };

    const db1Corrigido = db1.map(item => ({
        ...item,
        nome: corrigirTexto(item.nome),
        vendas: typeof item.vendas === 'string' ? parseInt(item.vendas, 10) : item.vendas
    }));

    const db2Corrigido = db2.map(item => ({
        ...item,
        marca: corrigirTexto(item.marca)
    }));

    fs.writeFileSync('fixed_database_1.json', JSON.stringify(db1Corrigido, null, 2));
    fs.writeFileSync('fixed_database_2.json', JSON.stringify(db2Corrigido, null, 2));

    console.log("Arquivos corrigidos e exportados com sucesso!");
}

corrigirDados();
