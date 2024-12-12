# case_data_analytics_Monks
Teste da vaga de estágio da Monks
Projeto Classicatório
Processo seletivo - Tech
2024
SUMÁRIO
Situação problema: Questões
1. Recuperação dos dados originais do banco de dados
2. Criar relatório de vendas
Alinhamentos Gerais
A etapa do case será dividida em dois projetos, um com foco em JavaScript
e outro mais focado em SQL. Essa seleção de projetos e a estruturação
deles reete o nosso dia-a-dia de trabalho;
É importante que faça a prova com base nos seus conhecimentos.
Reforçamos isso pois buscamos entender e conhecer melhor as
capacidades técnicas de cada pessoa candidata;
É proibido a consulta em ferramentas como ChatGPT/Bard para a resolução
da prova. Se comprovada a consulta, isso poderá acarretar na
desclassicação da pessoa candidata.
Situação problema
Você é responsável por um software de gestão de uma concessionária
multimarcas, sua gestão solicitou um relatório de desempenho das vendas
dos veículos no último ano.
Ao vericar o banco de dados você percebeu que algumas tabelas foram
corrompidas em uma atualização. Todos os nomes de veículos e marcas
tiveram alguns caracteres modicados, houve substituição de todos os "a"
por "æ" e "o" por "ø".
É preciso reverter essas substituições para recuperar os nomes originais
antes de construir o relatório.
Você encontrou um problema com os valores de vendas também, eles devem
ser sempre do tipo number, mas alguns deles estão no tipo string. É
necessário transformar as strings novamente em number.
Exemplo:
Original:
"vendas": 11
Corrompido:
"vendas": "11"
Questões
Para esse projeto, você utilizará os arquivos broken_database_1 e
broken_database_2 (disponível aqui) e irá fazer uma série de transformações
até que eles voltem ao formato original. Para isso será necessário
desenvolver algumas funções. Você deverá utilizar a linguagem JavaScript.
1. Recuperação dos dados originais do banco de dados
Você deverá criar uma função para ler o arquivo broken_database_1.json e
broken_database_2.json, uma função para percorrer o banco de dados
corrompido e corrigir os erros descritos anteriormente, além de uma função
para exportar os arquivos json corrigidos como saída.
Critérios de avaliação:
- funcionalidade/corretude;
- tratamentos de possíveis erros;
- documentação;
- legibilidade (formatação; uso adequado de nomes de funções e variáveis);
- considerações sobre performance, caso necessário;
- criatividade;
- instruções de execução do código.
2. Criar relatório de venda
Seu relatório deverá ser um arquivo no formato PDF, nele será necessário
responder algumas questões por meio de tabelas e grácos.
Utilize a linguagem SQL para criar uma tabela única que contenha todos os
dados necessários para o seu relatório, você deverá importar seus 2 arquivos
JSON corrigidos para a plataforma SQL Online, no nal você deverá exportar
sua tabela resultante como um arquivo .CSV para utilizar no seu relatório.
Seu relatório deverá responder às seguintes perguntas:
1. Qual marca teve o maior volume de vendas?
2. Qual veículo gerou a maior e menor receita?
3. Considere faixas de preço de venda dos carros a cada 10 mil reais.
Qual faixa mais vendeu carros? Quantos?
4. Qual a receita das 3 marcas que têm os menores tickets médios?
5. Existe alguma relação entre os veículos mais vendidos?
Nesta etapa você ‘pode’ utilizar recursos que sustentem as respostas
acima, como grácos, textos, entre outros.
Documentação do trabalho realizado
Você deverá criar um documento no google drive (https://docs.google.com/ )
contendo:
1. Os códigos JS e SQL com suas explicações/documentações.
2. Link dos arquivos broken_database_1.json e broken_database_2.json
corrigidos.
3. Outros pontos que queira compartilhar.
Após tudo pronto, coloque seu documento compartilhado com qualquer
pessoa com o link, com permissão de edição (Compartilhar -> Mudar de
restrito para qualquer pessoa com o link -> Editor) e nos envie o link
compartilhável para podermos avaliar o seu projeto.
Observação¹: A documentação é muito importante. Atente-se a isto.
Observação²: NÃO desenvolver qualquer página .html.