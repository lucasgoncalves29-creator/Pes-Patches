# PES2 Patches

Catálogo e central de direcionamento para patches de **PES** e **Winning Eleven** no **PlayStation 2**.

O site não hospeda nenhum arquivo comercial protegido por direitos autorais. Todos os botões de
download da seção **"Arquivos e links"** apontam para URLs cadastradas manualmente (ver `src/data/patches.js`,
campo `links`), que ficam vazias por padrão — cabe ao administrador preencher apenas com fontes que
tenha autorização para disponibilizar.

## Stack

- React 18 + Vite
- React Router (navegação entre páginas)
- CSS Modules (um arquivo de estilo por componente)
- Dados 100% mockados em `src/data/patches.js` (16 patches fictícios de demonstração)
- Favoritos persistidos em `localStorage`

## Estrutura de pastas

```
src/
  components/   # peças de UI reutilizáveis (Header, Hero, PatchCard, FilterPanel, FileLinks...)
  pages/        # páginas roteadas (Home, PES, Winning Eleven, Patches, Categorias, Detalhe, Favoritos)
  data/         # catálogo mockado e constantes (jogos base, categorias, regiões)
  hooks/        # favoritos (localStorage) via Context
  utils/        # busca e filtros
  styles/       # tokens de design globais (cores, tipografia, espaçamento)
```

## Como executar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior instalado.

```bash
# 1. Entrar na pasta do projeto
cd pes2-patches

# 2. Instalar as dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
```

O terminal vai mostrar um endereço, normalmente `http://localhost:5173` — abra no navegador.

Para gerar uma versão de produção (arquivos estáticos otimizados):

```bash
npm run build
npm run preview   # opcional: serve a build de produção localmente
```

## Cadastrando links de um patch

Cada patch em `src/data/patches.js` tem um array `links`, por exemplo:

```js
links: [
  { label: 'Patch (arquivo principal)', type: 'patch', url: '' },
  { label: 'Option File', type: 'option-file', url: '' },
  { label: 'Atualização', type: 'update', url: '' },
  { label: 'Tutorial de instalação', type: 'tutorial', url: '' }
]
```

Basta preencher o campo `url` de cada item com o endereço externo autorizado. Se `url` ficar vazio,
o site mostra "Link ainda não cadastrado" em vez de um botão quebrado. Nenhuma URL fica fixa em
componentes — tudo vem dos dados, para permitir evoluir para um painel administrativo depois sem
reescrever telas.

## Próximos passos sugeridos (crescimento futuro)

- Trocar `src/data/patches.js` por uma API/backend (o formato dos objetos já foi pensado para isso)
- Adicionar autenticação e um painel admin para cadastrar patches e links sem editar código
- Adicionar imagens reais de capas (respeitando direitos autorais) no lugar do placeholder estilizado
- Paginação/infinite scroll quando o catálogo crescer além de algumas dezenas de itens

## Checklist de verificação manual

Ao rodar localmente, vale conferir:

- [ ] Navegação entre Início, PES, Winning Eleven, Patches, Categorias e Favoritos
- [ ] Busca no header e na página de resultados
- [ ] Filtros por jogo base, categoria, região e ano (painel expansível)
- [ ] Favoritar/desfavoritar um patch e ver refletido na página de Favoritos
- [ ] Abrir a página de detalhes de um patch e ver a seção "Arquivos e links"
- [ ] Redimensionar a janela / testar no celular: menu hambúrguer, cards em 1–2 colunas, filtros em painel
