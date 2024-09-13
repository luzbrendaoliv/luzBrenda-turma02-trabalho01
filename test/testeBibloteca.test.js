const Biblioteca = require("../src/bibloteca");

describe('bibloteca', () => {
    let bibloteca;
    
    beforeEach(() => {
        bibloteca = new Biblioteca();
    });

    test('Deve adicionar e lista os livros', () => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro);
        expect(bibloteca.listarLivros()).toContain(livro);
    });

    test('Deve listar Livros ',() => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        expect(bibloteca.listarLivros(livro)).toContain(livro);
    });

    test('Deve remover livros', () => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro);
        bibloteca.removerLivro(1);
    });

    test('Deve emprestar livros', () => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: true 
        };
        bibloteca.adicionarLivro(livro);
        expect(bibloteca.emprestarLivro(1, 1)).toBe(true);
        expect(livro.emprestado).toBe(true);

    });

    test('Deve devolver livros', () => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };

        bibloteca.adicionarLivro(livro);
        expect(bibloteca.devolverLivro(1)).toBe(true);
        expect(livro.emprestado).toBe(false);

    });


    test('Deve buscar livros pelo id', () => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro);
        expect(bibloteca.buscarLivroPorId(1)).toEqual(livro);
    });


    test('Deve listar livros emprestados', () => {
        const livro1 = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: true 
        };
        const livro2 = { 
            id: 2, 
            titulo: 'Livrinho Infantil 2: O inimigo agora  é outro', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2007, 
            emprestado: false 
        };
        const livro3 = { 
            id: 3, 
            titulo: 'Livrinho Infantil 3: O retorno (kkkkk)', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2009, 
            emprestado: true 
        };

        bibloteca.adicionarLivro(livro1);
        bibloteca.adicionarLivro(livro2);
        bibloteca.adicionarLivro(livro3);

      //  expect(bibloteca.listarLivrosEmprestados(livro1)).toContain(livro1);
        expect(bibloteca.listarLivrosEmprestados(livro2)).toContain(livro2);
      //  expect(bibloteca.listarLivrosEmprestados(livro3)).toContain(livro3);

    });


    test('Deve listar livros disponíveis', () => {
        const livro2 = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: true 
        };
        const livro3 = { 
            id: 2, 
            titulo: 'Livrinho Infantil 2: O inimigo agora  é outro', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2007, 
            emprestado: false 
        };
        const livro1 = { 
            id: 3, 
            titulo: 'Livrinho Infantil 3: O retorno (kkkkk)', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2009, 
            emprestado: false 
        };

        bibloteca.adicionarLivro(livro2);

        //expect(bibloteca.listarLivrosDisponiveis(livro1)).toContain(livro1);
        expect(bibloteca.listarLivrosDisponiveis(livro2)).toContain(livro2);
        //expect(bibloteca.listarLivrosDisponiveis(livro3)).toContain(livro3);

    });


    test('Deve buscar livros pelos titulos', () => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro);
        expect(bibloteca.buscarLivroPorTitulo(livro.titulo)).toEqual('Livrinho Infantil');
    });


    test('Deve adicionar mebro', () => {
        const membro = { 
            id: 1, 
            nome: 'pedroPedroPredo' 
        };
        bibloteca.adicionarMembro(membro);
        expect(bibloteca.listarMembros()).toContain(membro);
    });


    test('Deve Remover mebro', () => {
        const membro = { 
            id: 1, 
            nome: 'pedroPedroPredo' 
        };
        bibloteca.removerMembro(membro);
        expect(bibloteca.listarMembros(membro)).toContain(1);
    });

    test('Deve buscar mebro pelo id', () => {
        const membro = { 
            id: 1, 
            nome: 'pedroPedroPredo' 
        };
        bibloteca.adicionarMembro(membro);
        expect(bibloteca.buscarMembroPorId(1)).toEqual(membro);
    });
    

    test('Deve Listar os mebros',() => {
        const membro = { 
            id: 1, 
            nome: 'pedroPedroPredo'
        };
        const membro2 = { 
            id: 2, 
            nome: 'pedroPedroPredo2'
        };
        expect(bibloteca.listarMembros()).toContain(1);

    });


    test('Deve atualizar informações do livro', () => {
        const livro = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro);
        bibloteca.atualizarInformacaoLivro(1, { 
            titulo: 'AAAAAAAAAAAAAAAAAAAAAAA' 
        });
        expect(bibloteca.buscarLivroPorId(1).titulo).toBe('AAAAAAAAAAAAAAAAAAAAAAA');
    });

    test('Deve Listar livros por autor', () => {
        const livro1 = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        const livro2 = { 
            id: 2, 
            titulo: 'Livrinho que não é da Luz',
            autor: 'Não é a Luz', 
            genero: 'Não é infantil', 
            ano: 2010, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro1);
        bibloteca.adicionarLivro(livro2);
        expect(bibloteca.listarLivrosPorAutor(livro2.autor)).not.toContainEqual('Não é a Luz');
    });


    test('Deve Listar livros por gênero', () => {
        const livro1 = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        const livro2 = { 
            id: 2, 
            titulo: 'Livrinho que não é da Luz',
            autor: 'Não é a Luz', 
            genero: 'Não é infantil', 
            ano: 2010, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro1);
        bibloteca.adicionarLivro(livro2);
        expect(bibloteca.listarLivrosPorGenero(livro2.genero)).not.toContainEqual('Não é infantil');
    });

    test('Lista livros por ano', () => {
        const livro1 = { 
            id: 1, 
            titulo: 'Livrinho Infantil', 
            autor: 'LuzBrendinha', 
            genero: 'Infantil', 
            ano: 2005, 
            emprestado: false 
        };
        const livro2 = { 
            id: 2, 
            titulo: 'Livrinho que não é da Luz',
            autor: 'Não é a Luz', 
            genero: 'Não é infantil', 
            ano: 2010, 
            emprestado: false 
        };
        bibloteca.adicionarLivro(livro1);
        bibloteca.adicionarLivro(livro2);
        expect(bibloteca.listarLivrosPorAno(livro2.ano)).not.toContainEqual(2010);
    });




});
