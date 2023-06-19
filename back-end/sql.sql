CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255),
    dataCadastro DATE,
    preco FLOAT,
    descricao VARCHAR(255),
    imagem VARCHAR(255)
);


INSERT INTO produtos (titulo, dataCadastro, preco, descricao, imagem)
VALUES
    ('top double estampado jardim clássico', '2023-06-07', 138.60, 'top double estampado jardim clássico.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3042299-708-1062/314019_40178_1-TOP-DOUBLE-ESTAMPADO-JARDIM-CLASSICO.jpg?v=638157197519400000'),
    ('corselet estampado florada', '2020-02-15', 198.00, 'corselet estampado florada.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3062355-708-1062/314406_40626_1-CORSELET-ESTAMPADO-FLORADA.jpg?v=638186581990170000'),
    ('top biquíni tricot amarração', '2022-05-27', 298.15, 'top biquini tricot.', 'https://lojafarm.vteximg.com.br/arquivos/ids/2928287-708-1062/308587_0090_1-TOP-BIQUINI-TRICOT-AMARRACAO.jpg?v=638054410035130000'),
    ('top double estampado bosque colorido', '2020-03-28', 198.00 ,'top double estampado bosque colorido.', 'https://lojafarm.vteximg.com.br/arquivos/ids/2956622-708-1062/311144_22011_1-TOP-DOUBLE-ESTAMPADO-BOSQUE-COLORIDO.jpg?v=638108514687330000'),
    ('top double estampadov doce manhã', '2021-05-31', 198.26, 'top double estampado doce manhã.', 'https://lojafarm.vteximg.com.br/arquivos/ids/2956613-708-1062/311142_22036_1-TOP-DOUBLE-ESTAMPADOV-DOCE-MANHA.jpg?v=638108514639400000'),
    ('top estampado festa de coqueiro', '2021-12-27', 249.55, 'top curto estampado decote em V.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3028443-708-1062/310307_22023_1-TOP-ESTAMPADO-FESTA-DE-COQUEIRO.jpg?v=638150923118630000'),
    ('vestido curto estampado floresta chic', '2018-07-04', 459.00, ' vestido curto estampado floresta chic.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3042097-708-1062/314466_40213_1-VESTIDO-CURTO-ESTAMPADO-FLORESTA-CHIC.jpg?v=638157080736270000'),
    ('vestido cropped estampado tropicaleza dos pássaros', '2023-01-22', 498.00, 'vestido cropped estampado tropicaleza dos pássaros.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3073479-708-1062/313092_40186_1-VESTIDO-CROPPED-ESTAMPADO-TROPICALEZA-DOS-PASSAROS.jpg?v=638210637759400000'),
    ('vestido curto estampado recanto das onças', '2023-10-10', 379.00, 'vestido curto estampado recanto das onças.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3070558-708-1062/313926_40534_1-VESTIDO-CURTO-ESTAMPADO-RECANTO-DAS-ONCAS.jpg?v=638203851964900000'),
    ('vestido longo estampado florescer', '2023-08-29', 498.00, 'vestido longo estampado florescer.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3011036-708-1062/309051_40020_1-VESTIDO-LONGO-ESTAMPADO-FLORESCER.jpg?v=638139879899530000'),
    ('vestido amarração estampado onça flor', '2023-02-13', 498.00, 'vestido longo bonito estampado de amarração.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3004527-708-1062/310823_22062_1-VESTIDO-AMARRACAO-ESTAMPADO-ONCA-FLOR.jpg?v=638138908579370000'),
    ('sandália slide anatômica monstera', '2022-09-06', 598.00, 'sandália slide anatômica monstera.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3063901-708-1062/319969_0402_1-SANDALIA-SLIDE-ANATOMICA-MONSTERA.jpg?v=638187301944670000'),
    ('havaianas estampada rua 55 21', '2020-03-23', 79.99 ,'havaianas e farm se juntaram para essa parceria brasileiríssima: o conforto do chinelo mais amado do mundo com a estampa rua 5521 é um convite pra curtir qualquer estação.', 'https://lojafarm.vteximg.com.br/arquivos/ids/2944098-708-1062/313441_22044_1-HAVAIANA-ESTAMPADA-RUA-55-21.jpg?v=638092180383500000'),
    ('sandalia lenço tropical', '2021-10-29', 498.00, ' chinelo estampado com tecido em linho e alças bufantes.', 'https://lojafarm.vteximg.com.br/arquivos/ids/2652901-708-1062/299223_2276_1-SANDALIA-LENCO-TROPICAL.jpg?v=637725465432130000'),
    ('adilette adidas handmade stripes pastel', '2021-12-27', 299.99, 'a parceria global farm e adidas leva ainda mais conforto e estampas bem brasileiras para as suas peças. adilette adidas handmade stripes pastel. esta é uma peça original da    coleção farm do brasil: orgulho de estampar o mundo.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3025690-708-1062/312864_2276_1-ADILETTE-ADIDAS-HANDMADE-STRIPES-PASTEL.jpg?v=638149987633300000'),
    ('saia midi estampada florisbela', '2018-07-15', 348.60, 'saia midi estampado florisbela.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3042054-472-708/314044_40192_1-SAIA-MIDI-ESTAMPADA-FLORISBELA.jpg?v=638157080351900000'),
    ('saia estampada louise floral', '2020-01-22', 278.00, 'saia estampada louise floral.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3037947-472-708/311924_40042_1-SAIA-ESTAMPADA-LOUISE-FLORAL.jpg?v=638155216266930000'),
    ('saia midi estampada suco de frutas', '2023-10-02', 278.00, 'saia midi estampada suco de frutas.', 'https://lojafarm.vteximg.com.br/arquivos/ids/2957730-472-708/311581_22068_1-SAIA-MIDI-ESTAMPADA-SUCO-DE-FRUTAS.jpg?v=638108561095300000'),
    ('saia curta estampada bem me quer', '2023-08-29', 181.30, 'saia curta estampada bem me quer.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3060505-472-708/314497_40531_1-SAIA-CURTA-ESTAMPADA-BEM-ME-QUER.jpg?v=638181991082800000'),
    ('saia cropped estampada entardecer', '2023-02-13', 244.30, 'saia cropped estampada entardecer.', 'https://lojafarm.vteximg.com.br/arquivos/ids/3011615-472-708/311186_22014_1-SAIA-CROPPED-ESTAMPADA-ENTARDECER.jpg?v=638139883057300000');