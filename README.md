# React Native

## Fundamentos

### O que é React Native?

- Framework de criação de aplicações nativas mobile
- Projeto Open Source mantido pelo Facebook, desde 2015
- Multiplataforma
- Podemos manipular cada plataforma de forma diferente

### Características React Native

- Fast Refresh que dá feedback quase que instantâneo das alterações
- Uma base de código para as plataformas iOS e Android
- Javascript, uma linguagem muito popular.
- Comunidade ativida com inúmeras bibliotecas e UI frameworks

### Abordagem Tradicional

Essa abordagem é um modelo utilizado para o desenvolvimento de apps que exige conhecimento tanto em `Swift` quanto `Java/Kotlin`, havendo a necessidade de fazer o mesmo sistema com ambas as linguagens para haver portabilidade.

![Abordagem Tradicional](assets/image.png)

Já no modelo multiplataforma do React Native, a mesma base de código lhe permite compilar o projeto tanto em `Android` quando em `iOS`.

O processo de compilação do código segue o seguinte fluxo:
![React Native](assets/image-2.png)

Escrevemos o código em JavaScript e para compilar o projeto ele passa pelo `Metro Bundler` e ele gera um pacote.js e apartir daí o `JS Core` compila com a arquitetura necessária.

### Sintaxe JSX

A elaboração de componentes em javascript utiliza a sintaxe JSX similar ao HTML que é utilizada pra criar componentes visuais.

```javascript
<Text>Olá, Lucas</Text>
```
![sintaxe](assets/image-3.png)

### Modelo Visual

A interpretação é feita baseado nos componentes nativos de cada Sistema Operacional assim, simplificando o desenvolvimento dos aplicativos.

![modelo](assets/image-4.png)