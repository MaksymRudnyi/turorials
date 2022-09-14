# ![](media/image1.png){width="1.6444444444444444in" height="0.7708333333333334in"}![](media/image2.png){width="2.8958333333333335in" height="0.7083333333333334in"}  {#section .3.1}

**REACT / Python / Apis / Qlik / Google app Scripts / CS50**

**André Baltazar Pinto**

> **2022**

Introduction

Motivation

Learning and become better at programming.

Objectives

From today to one year (2023) become fully professional on REACT.

Pass the 42 school C \| C++

Structure of the thesis

Theoretical Framework

JavaScript

Objects

Getter methods & Setter Methods

From time to time is a desire to acces a property that will return a
dynamically computed value, or you may want to reflect the status of an
internal variable without requiring the use of explicit method calls. In
JavaScript, this can be accomplished with the use of a getter.

SRC = " [getter - JavaScript \| MDN
(mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)"

Code academy

# javascript {#javascript .Title}

### Team Stats 

To complete this project, you'll need to be familiar with :

-   Creating an object

-   Adding properties to that object

-   Gettter methods

-   Appending values to an array with the push() method

Link to the exercise: [Learn JavaScript \|
Codecademy](https://www.codecademy.com/courses/introduction-to-javascript/projects/team-stats)

5\. Create getter methods for your \_players and\_ games keys. You do
not need to create setter methods, because we don't want anyone to
change the values saved to these keys.

![](media/image4.png){width="6.229861111111111in"
height="4.28125in"}This is a getter for the object players J , keep this
in mind !!

Get players () {

Return this.\_players;

}

![](media/image6.png){width="5.93832895888014in"
height="1.9690244969378827in"}

1^s\ t^ à create a method with three parameters:

![](media/image7.png){width="3.7921959755030623in"
height="0.9167946194225722in"}

# 2^nd^ à create a variable inside the method {#nd-à-create-a-variable-inside-the-method .list-paragraph .Title}

![](media/image8.png){width="3.510906605424322in"
height="1.802334864391951in"}

3^rd^ à Push to add elements to an array .

this.player.push(player);

![](media/image9.png){width="3.43798009623797in"
height="2.156550743657043in"}

![](media/image10.png){width="6.298611111111111in" height="1.0625in"}

1^st^ à invoke the method

![](media/image11.png){width="4.552718722659668in"
height="1.4689545056867892in"}

Result

![](media/image12.png){width="5.552858705161855in"
height="1.7502438757655292in"}

![](media/image13.png){width="5.6674573490813644in"
height="2.708711723534558in"}

![](media/image14.png){width="3.6255063429571304in"
height="2.1878051181102363in"}

Redo this point really I have difficulties on this one !!!

![](media/image15.png){width="5.948746719160105in"
height="0.8855402449693788in"}

![](media/image16.png){width="3.7401049868766405in"
height="1.906515748031496in"}

# REACT {#react .Title}

### How to delete an item from an array in react

Props vs State

One thing to keep in mind is that props and state are not the same
thing, and is very important to know th difference between them.

The props object is used to give data to a component. State on the other
hand can be thought as private data. It is local and only accessible in
that specific component. This means other components can not directly
access the state of a given component. So as we can see in \<Items/\>,
we set some attributes on the \<Item7\>.

![](media/image17.png){width="6.298611111111111in"
height="5.182638888888889in"}

Now, in the \</Item component, we can accept the data carried by the
props object and use it to initialize the state of the \<Item/\>
component!

![](media/image18.png){width="6.298611111111111in"
height="2.4722222222222223in"}

So we can see that each component has its own state which is local and
private to itself, but we can also share data to another component by
using props. In fact, some components might not even have any state at
all, but still, accept data via props.

**Props are read only**

Another key point reagarding props is that it is read only. If you try
to break this rule by doing something like this.

![](media/image19.png){width="6.298611111111111in"
height="2.198611111111111in"}

So props are input to a component. You can not modify values stored in
props, only read them. This is why the pattern you will se is reading
data from props and assignin to the state. Then you can modify the value
stored in state as needed.

Raising and handling events

Now explains how to delete a component from the page by raising and
handling event.

1^st^ à add button in the markup

**Passing an event handler using props**

This is a pretty cool concept. We are going to create the event handler
in \<Items/\> and then pass a reference to it via props to \<Item/\>.
First, we can define a simple handleDelete() function.

Conclusion

To erase an item from the React page, it is mandatory to follow some
steps. The above example starts by deal the challenge with raising and
handling events within the child and parent components. Thereafter when
handling the event in the aprent component, it was used a filter
function in order to create a new array of items that did not include
the one clicked. Finally, using setState() function to override the
existing state with new state which no longer had the item which was
clicked.

Src= <https://vegibit.com/how-to-delete-an-item-from-an-array-in-react/>

### Componentes Controlados

A ideia de componentes controlados é de que os componentes que têm
formulários e elementos de formulário controlam todo o estado dos
mesmos. Embora simples, passa a ser necessário controlar todas as
alterações deos campos, para alternar internamente o estado do
componente, através de setState ou useState, o que por vezes se pode
tornar aborrecido ou extenso.

Vamos aplicar os conceitos deste módulo numa nova aplicação que simula o
preenchimento dos dados para um novo evento festivo.

![](media/image20.png){width="4.6786198600174975in"
height="5.763935914260718in"}

Neste estilo de interacção com os formularios precisamos de criar uma
referência ao elemento HTML através da função createRef:

-   This.inputNome = React.createRef();

Esta duncionalidade teve que ser adocionalmente mencionada na
importação:

-   Import React, { Component } from 'react';

> O nome da importação vem for das chavetas pois é a exportação por
> defeito, ao passo que Component é uma exportação normal.

No elemento HTML indicamos a referência e escrevemos .current.value:

-   Alert(\`Evento \${this.inputNome.current.value} criado\`};

3.1. Múltiplos campos

Para este de tipo de componentes não controlados, o facto de usarmos um
ou múltiplos campos tem pouca diferença no código final, uma vez que só
existe um método para tratar a submissão do formulário.

Em formulários controlados temos um método adicional para tratar a
alçteração dos campos e construir o estado. Ou potencialmente um método
para a alteração de valor de cada campo.

![](media/image21.png){width="3.66001312335958in"
height="4.502606080489938in"}

Para este segundo campo apenas aplicamos o mesmo padrão que se rege
pelos seguintes passos:

-   Criar a referência com createRef

-   Associar ao campo através do atributo ref

-   Obter o valor com this.nomeDaReferencia.current.value

### ROuter

O JSX inclluído faz uso de vários componentes do pacote instalado:

**Componente Router à** Elemento principal responsável por conter todos
os sub componentes para o rounting

**Componente Link à** Respresenta uma ligação para um determinado
endereço, que depois será transformado num componente

**Componente Routes à** Componente base para uma lista de endereços
associados a componentes

**Componente Route à** Configura um caminho para o componente ou bloco
JSX

O **IsActive** é um valor **boleano** que nos indica se o Link está
activo, se for o caso, atribuímos os estilos criados anteriormente
através da variável estiloAtivo, caso contrário, deixamos a
**undefined.**

**Parametros de caminho**

### Input do tipo file

Um \<input\> do tipo file permite ao utilizador escolher um ficheiro do
seu computador ao enviar para o servidor. Este tipo de elementoo é
sempre apenas de leitura. O utilizador muda o seu valor com base na
escolha que faz de ficheiro, mas programaticamente não conseguimos
alterar o seu valor.

-   Por este motivo um **input** do tipo **file** é sempre considerado
    um componente não controlado. Apesar disto, este tipo de componentes
    são necessários a várias aplicações.

Para um elemento deste género apenas o acesso ao nome do ficheiro
difere. Vejamos como o podemos fazer.

![](media/image22.png){width="3.34867125984252in"
height="4.751492782152231in"}

Para o ficheiro a referência criada e associação ao campo foi igual ao
que tinha sido feito nos restantes campos. A diferença deu-se no acesso
ao nome do ficheiro escolhido:

-   this.inputFicheiro.current.files\[0\].name ;

Este acesso é feito com base na API de ficheiros disponibilizada pelo
JavaScript, que nos permite acede ao conteúdo de cada ficheiro. No
exemplo estamos a obter o primeiro ficheiro selecionado através de \[0\]
e nesse acedemos ao nome pela propriedade name.

\- Existem outras propriedades que podem ser úteis tal como size para o
tamanho ou o type para o tipo.

**Conclusão**

Apesar de ser recomendada a utilização de componentes controlados, vão
haver cenários em que precisamos de fazer usos de componentes não
controlados como por exemplo um elemento para escolha de ficheiros.

**How to remove and add elments dinamically**

[**https://www.youtube.com/watch?v=Jrths-x6KAA&ab_channel=HarithaComputers%26Technology**](https://www.youtube.com/watch?v=Jrths-x6KAA&ab_channel=HarithaComputers%26Technology)

### Scrimba

**Why React ?**

-   Its Composable.

-   Its declarative

Declarative means I can tell the computer WHAT to do and xpect it to
handle the details. Imperative means I need to tell it HOW to do each
step.

Function syntaxe

Don't forget :

Challenge() {}

And the return statement if you want to render something
!"!!!!![](media/image23.png){width="6.298611111111111in"
height="4.126388888888889in"}

All functions have to be pascal Case or in other words all thefucntions
need to start I capital case

IN REACT FOR IMPORT STYLES WE NEE TO USE className=""\>

1.  className

2.  nav-items à list-style: none;

3.  create a unique style for each list items to be display "inline"
    otherwise will not work

By default, the HTML \<ul\> list will be rendered vertically with one
list item on top of another.

When you need to create a list that expands horizontally, you need to
add the display:inline style to the \<li\> elements of the list.

![](media/image24.png){width="3.698432852143482in"
height="1.3439370078740158in"}

### Styles

![](media/image25.png){width="6.298611111111111in" height="3.11875in"}

You can import the styles / images in this way by importing at the top
of the file and then call them between brackets in the code itself !!

Help :

Public folder !!

<https://create-react-app.dev/docs/using-the-public-folder/>

**Scrimba - Quick mental outline of project**

Elements:

-   Background Color

-   **Nav bar**

    -   Flex box, auto margin,

-   **Main content**

    -   Ul li

    -   H1

Figma:

![](media/image26.png){width="6.298611111111111in"
height="0.7965277777777777in"}

**How to select the marker on the li:**

Use the marker pseudo-selector

![](media/image27.png){width="3.515277777777778in"
height="2.323611111111111in"}

Ex

Example:

![](media/image28.png){width="4.948606736657918in"
height="0.8542858705161854in"}

**Add background in spheres**:

![](media/image29.png){width="6.298611111111111in"
height="1.6104166666666666in"}

Be aware that when add a background image in css you have to add an url
instead of src ....

**Aula -**
<https://scrimba.com/learn/learnreact/add-background-logo-coa6145f3a9c7e1cbc40f5f6a>

Inserir o logo no background:

![](media/image30.png){width="5.646621828521435in"
height="1.885680227471566in"}

**Solo project:**

[**https://scrimba.com/learn/learnreact/react-section-1-solo-project-coce646e88eea46f91af43ca4**](https://scrimba.com/learn/learnreact/react-section-1-solo-project-coce646e88eea46f91af43ca4)

**Requirements :**

-   Build from scratch!

-   Fill in in your own information

-   Separate components for:

    -   Info (photo, name, buttons, etc.

    -   About

    -   Interests

    -   Footer ( social icons )

#### Icons do facebook

![](media/image31.png){width="6.298611111111111in"
height="3.3833333333333333in"}

![](media/image32.png){width="6.298611111111111in"
height="0.8347222222222223in"}

Importar e dpois chama-los como classNames

![](media/image33.png){width="4.346319991251094in"
height="2.4740955818022745in"}

Depois de importar para chamar o materials icon:

![](media/image34.png){width="5.902840113735783in"
height="2.7197320647419074in"}

Terei de rever os cursos com NPKG etc..

Exemplo de um unpkg !!

<https://unpkg.com/browse/react@18.1.0/>

**styles vertical**

![](media/image35.png){width="6.298611111111111in"
height="2.332638888888889in"}

**Site: https://www.thesitewizard.com/css/set-height-of-element.shtml**

#### Alinhar um titulo ao centro

![](media/image36.png){width="4.542300962379702in"
height="5.782057086614174in"}

**.image {}**

![](media/image37.png){width="3.969304461942257in"
height="2.8233103674540683in"}

**PROPS**

[**https://scrimba.com/learn/learnreact/props-part-4-receiving-props-in-a-component-co88c4bfa84d99b466b78e914**](https://scrimba.com/learn/learnreact/props-part-4-receiving-props-in-a-component-co88c4bfa84d99b466b78e914)

**My answers :**

![](media/image38.png){width="6.298611111111111in"
height="3.877083333333333in"}

**Answer of the teacher :**

![](media/image39.png){width="6.298611111111111in"
height="4.800694444444445in"}

**Destructuring props**

![](media/image40.png){width="6.298611111111111in"
height="2.941666666666667in"}

This props means that

Props.setup && \<h3\> Setup : {props.setup} à if the props.setup is true
render the message after h3 otherwise don't render.

**Otherwise**

![](media/image41.png){width="6.298611111111111in"
height="2.022222222222222in"}

**Passing in non-string props**

![](media/image42.png){width="6.298611111111111in"
height="3.598611111111111in"}

Exemplo de como passar valores que não sejam strings como props.

**Array prototype.map**

**SEE MDN docs**

**Const array1 = \[1, ,3, 5, 6\];**

**//** pass a function to map

Const map1 = array1.map(x =\> x\* 2);

Console.log(map1)

// expected output : Array: \[1,3,5,6\].

**Capitalize only the first letter of several strings within an array**

<https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/>

to.UpperCase() + subs.string(1)

substring = The substring() method returns the part of the string
between the start and end indexes, or to the end of the string.

Challenge

![](media/image43.png){width="6.298611111111111in" height="4.64375in"}

![](media/image44.png){width="6.298611111111111in"
height="2.904166666666667in"}

**Resolucao prof:**

![](media/image45.png){width="5.719548337707787in"
height="5.719548337707787in"}

**Challenge Mapping Components:**

Neste desafio é pedido que através de um objecto se construa uma map
funciton, de seguida passar props de forma a que se faca o return do
componente com o seu devido props.

Como pensei :

-   Fazer o setup do props como: \<joke setup=""\... punchline="".. /\>
    4x.

**Solution**

![](media/image46.png){width="4.490209973753281in"
height="5.146551837270342in"}

![](media/image47.png){width="6.298611111111111in" height="4.35625in"}

Ver a app jokes react par melhor entendimento !!

**QUIZ**

-   **What does the '.map()0 array method do?**

The map () methiod creates a new array populated with the results of
calling a provided function on every element in the calling array.

**Professor**:

Returns a new array. Whatever gets returned from the callback function
provided is placed at the same index in the new array.

Usually we take the items from the original array and modify them in
some way.

-   **What do we usually use \`.map()\`for in React?**

Reformat objects in the array

**Professor**:

Convert an array of raw data into an array of JSX elements that can be
displayed on the page.

-   **Why is using \`.map()\`better than just creating the components
    manually by typing them out?**

**Faster !!**

**Professor**:

It makes our code more \"self-sustaining\" - not requiring

additional changes whenever the data changes.

**Loading imgs from map.**

They recommend to put the images on the public folder !!

### Project Map experiences data into components

Challenge:

\- import the array of data from data.js

\- map over the array to create \<Card /\> components

\- display the array of card components under the navbar

(in place of the current \<Card /\> component)

Note: We haven\'t styled the group of components yet, so they\'ll

still be block elements, stacked vertically. We\'ll add styling later

Done:

Criar uma constante que tem como input uma map , nesta caso vai mapear
todo o data.js data.map , para cada mapeamento vai criar um props crtao
com todas as props inerentes.

Depois faz o return de cada parte do objeto.

![](media/image48.png){width="6.298611111111111in"
height="2.951388888888889in"}

Dentro do componente Card -- que por sua vez revebe os props :

![](media/image49.png){width="6.298611111111111in"
height="3.9520833333333334in"}

![](media/image50.png){width="6.298611111111111in"
height="3.1180555555555554in"}

#### Key prop

How to display logic with javascript and react :

![](media/image51.png){width="6.298611111111111in"
height="1.6701388888888888in"}

Result

![](media/image52.png){width="6.298611111111111in" height="4.20625in"}

/\*

Challenge:

1\. Display the correct text in the badge based on the logic above

2\. Only display the badge if badgeText has a value

\*/

Not solved

To know the thruthiness about a variable we do oinly thisn

![](media/image53.png){width="6.298611111111111in"
height="0.9048611111111111in"}

#### Pass objects as props

#### <https://scrimba.com/learn/learnreact/project-pass-object-as-props-cod6f4e56bca6a67caca77684>

Nao consegui

Refazer este exercicio

![](media/image54.png){width="6.298611111111111in"
height="2.9618055555555554in"}

No entanto, para nao ter que apssar props quando se chama o componente,
basta mudar o componente para props.item(onde se fezo map).coverImg por
exemplo.

#### Spread object as props

//
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

APP.jS

![](media/image55.png){width="6.298611111111111in" height="3.50625in"}

Com os pread operator somos capazes de ir buscar todos os dados no
objeto inerente. Sendo que depois é necessário passar props no resto dos
componentes !!

![](media/image56.png){width="6.298611111111111in"
height="3.5145833333333334in"}

#### SOLO PROJECT

Travel

**Figma :
<https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal>**

# MEME GENERATOR (React) {#meme-generator-react .Title}

### Interactive web apps in React

**Static web pages**

-   Blogs

-   News sites

-   ...

**Dinamic web Apps**

-   Read-write: abilitty to change data

-   Highly interactive

-   Displays your data

    -   Examples:

**What we'll learn**

-   Event listeners

-   State

-   Conditional rendering

-   Forms

-   Side effects

> **SUPER IMPORTANT TO:**

-   understand grid-column

> And display grid.

**JS**

addEventListener("click", function(){})

**React**

\<button onClick\>Click me\</button\>

Mouse events à **REACT**

<https://reactjs.org/docs/events.html#mouse-events>

Challenge:

Project: Get random meme

**Link:**
<https://scrimba.com/learn/learnreact/project-get-random-meme-co0d240b0b92838697b8749a1>

From an array of data, select one random and show as a n image.

**One way:**

<https://thewebdev.info/2021/11/14/how-to-fetch-image-from-api-with-react/>

To fetch image from API with React , we can use the fetch function.

For instance, we write:

import React, { useEffect, useState } from \"react\";

const imageUrl = \"https://i.imgur.com/fHyEMsl.jpg\";

export default function App() {

const \[img, setImg\] = useState();

const fetchImage = async () =\> {

const res = await fetch(imageUrl);

const imageBlob = await res.blob();

const imageObjectURL = URL.createObjectURL(imageBlob);

setImg(imageObjectURL);

};

useEffect(() =\> {

fetchImage();

}, \[\]);

return (

\<\>

\<img src={img} alt=\"icons\" /\>

\</\>

);

}

Wrong exercise

Resolution:

1^st^

![](media/image57.png){width="4.156829615048119in"
height="0.9480489938757656in"}

Create a function

![](media/image58.png){width="3.8338681102362204in"
height="1.2397561242344708in"}

MemesData is an object

With data property an memes property !

Simplifying by :

![](media/image59.png){width="5.625785214348206in"
height="1.3960279965004374in"}

Generate a random number :

![](media/image60.png){width="4.721317804024497in"
height="0.8604560367454068in"}

Math random and math floor explained:

<https://www.codecademy.com/forum_questions/50c386a4a122749bc1006ca6>

Math. Random generates an number between 0 and 1, that isn't a whole
number, and also isn't 1. To get a number, for example between 0 and 10,
multiply your answer by 10: Math.random()\* 10 To get it to be a whole
number, i.e. an integer, apply Math.floor(math.random()\* 10) To get a
whole number between 1 and 10, add 1 to the answer:
Math.floo(Math.random()\*10 + 1 ) Hope that helps! I just learned this
and thought it might help me if I try to explain it !

**Our current conundrum**

**Hook state**

![](media/image61.png){width="6.298611111111111in" height="2.75in"}

**Props State**

**State**

"State" refers to value that are managed by the component, similar to
variables declared inside afunction. Any time you have changing values
that should be saved/displayed, you'll likely be using state.

**Props**

"Props" refers to the properties being passed into a component in order
for it to work correctly, similar to how a function receives parameters:
"from above". A component revceiving props is not allowed to modify
those props. (I.e. they are "immutable".)

![](media/image62.png){width="6.298611111111111in"
height="3.7006944444444443in"}

How to declare state:

Or react.useState()

Or import the use state.

![](media/image63.png){width="6.298611111111111in"
height="2.5444444444444443in"}

![](media/image64.png){width="6.298611111111111in"
height="3.0548611111111112in"}

My challenge :

![](media/image65.png){width="4.541101268591426in"
height="3.6298764216972876in"}

Profesor answer:

Lol

The ste should be set like THIS:

![](media/image66.png){width="3.781778215223097in"
height="1.062648731408574in"}

**useState -- Counter practice**

**my answer**

![](media/image67.png){width="6.298611111111111in"
height="2.816666666666667in"}

![](media/image68.png){width="6.298611111111111in"
height="3.6152777777777776in"}

In the useState never use the abv ++ in the state. Not working.

![](media/image69.png){width="4.1672484689413825in"
height="1.9481889763779527in"}

Also we can provide a callback function instead.

![](media/image70.png){width="6.298611111111111in"
height="2.3631944444444444in"}

It is best practice to pass a callback function in the change of state,
then we are able to access the first value of state.

![](media/image71.png){width="6.298611111111111in"
height="5.301388888888889in"}

**Challen** - When the getMemeImage function is called, update

\* the \`memeImage\` state to be the random chosen

**ge**

![](media/image72.png){width="6.298611111111111in" height="3.34375in"}

Professor answers:

![](media/image73.png){width="6.298611111111111in"
height="3.517361111111111in"}

**Challenge**

-   Project: Add images to the meme generator

Link:
<https://scrimba.com/learn/learnreact/project-add-images-to-the-meme-generator-co2e04f5499f85d20fecbdf22>

-   /\*\*

-   \* Challenge: Save the random meme URL in state

-   \* - Create new state called \`memeImage\` with an

-   \* empty string as default

-   \* - When the getMemeImage function is called, update

-   \* the \`memeImage\` state to be the random chosen

-   \* image URL

-   \* - Below the div.form, add an \<img /\> and set the

-   \* src to the new \`memeImage\` state you created

-   \*/

\[- When the getMemeImage function is called, update

\* the \`memeImage\` state to be the random chosen

For this part the solution is to call the setState inside the inherent
function !

![](media/image74.png){width="6.298611111111111in"
height="4.905555555555556in"}

![](media/image75.png){width="2.1044608486439196in"
height="0.3854702537182852in"}

**Challenge: ternary practice**

**Link:
<https://scrimba.com/learn/learnreact/challenge-ternary-practice-co36143f0ba77648bc362c31d>**

**Theory:**

[**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

The conditional (ternaru) operator is the only JavaScript operator that
takes three operands: a condition followed by a **question mark(?),**
then an expression to excute if the condition is truthy. Followed by a
colon(, and finally the expression to execute if the condition is flasy.
This operator is frequently used as alternative to an if...else
statement.

![](media/image76.png){width="6.157109580052493in"
height="2.8337292213473315in"}

![](media/image77.png){width="6.160681321084865in"
height="2.0268438320209974in"}![](media/image78.png){width="6.16584208223972in"
height="1.5714709098862643in"}

Good:

![](media/image79.png){width="5.95916447944007in"
height="0.5625787401574803in"}

Challebge not passed:

![](media/image80.png){width="6.298611111111111in"
height="2.709722222222222in"}

![](media/image81.png){width="6.298611111111111in" height="4.9625in"}

Another answer

If you want to take into account the previous state you do have to call
a callback function inside of your function:

![](media/image82.png){width="6.298611111111111in"
height="4.086805555555555in"}

setIsGoingOut(prevState =\> !prevState à gives you the opposite of what
it is !!

push array:

The push() method adds one or more elements to the end of an array and
returns the new length of the array.

Push is a destructive act5ion it will me mdodyfing the initial array !

![](media/image83.png){width="3.3754713473315836in"
height="1.5939720034995626in"}

That being said, one thiong to keep in mind while programming react is
that we never dshould modify the state, we should modify the set
funxction instead...

![](media/image84.png){width="6.298611111111111in"
height="2.654861111111111in"}

**My solution:**

-   **prevState** à **Function** à we concat the things array with the
    newthingText !

5 ways to append item to array in JS

<https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/>

-   Push

-   Splice

-   Length

-   Concat

-   Spread

> **Mutative**
>
> This will change the original array
>
> **Non Mutative**
>
> This will create a new array and the original array remains unchanged
>
> **Splice**
>
> ![](media/image85.png){width="6.298611111111111in"
> height="1.6993055555555556in"}**St**

### Section3

#### Complex State: Objets

#### Complex state: updating state objects

<https://scrimba.com/learn/learnreact/complex-state-updating-state-objects-cJLgWJSN>

For a case where you want to set a new state for a boolenan value either
true either false !!!

-   You need to use the spred operator of your state to avoid to lose
    info

Example:

![](media/image86.png){width="6.298611111111111in"
height="3.0284722222222222in"}

#### Project: Refactor state

/\*\*

\* Challenge: Update our state to save the meme-related

\* data as an object called \`meme\`. It should have the

\* following 3 properties:

\* topText, bottomText, randomImage.

\*

\* The 2 text states can default to empty strings for now,

\* amd randomImage should default to \"http://i.imgflip.com/1bij.jpg\"

\*

\* Next, create a new state variable called \`allMemeImages\`

\* which will default to \`memesData\`, which we imported above

\*

\* Lastly, update the \`getMemeImage\` function and the markup

\* to reflect our newly reformed state object and array in the

\* correct way.

\*/

Challenge: Update our state to save the meme-related

\* data as an object called \`meme\`. It should have the

\* following 3 properties:

Objet resolution given :

-   const \[meme, setMeme\] = React.useState({

    -   topText: "",

    -   bottomText: "",

    -   randomImage: <http://i.imgflip.com/1bij.jpg>

})

// este obejcto é criado como primeiro state

-   const \[allMemeImages, setAllMemeImages\] =
    React.useState(memesData)

 

 

 

 

**Wrong**

 

![](media/image87.png){width="6.298611111111111in"
height="2.3444444444444446in"}

 

**Rigth**

 

![](media/image88.png){width="6.298611111111111in"
height="1.8097222222222222in"}

##### Passing state as props

<https://scrimba.com/learn/learnreact/passing-state-as-props-co7444d9daf79f8f39a8ebef4>

Passing state as props

 

 

import React from \"react\"

export default function App() {

const \[count, setCount\] = React.useState(0)

function add() {

setCount(prevCount =\> prevCount + 1)

}

function subtract() {

setCount(prevCount =\> prevCount - 1)

}

/\*\*

\* Challenge:

\* - Create a new component named Count

\* - It should receive a prop called \`number\`, whose value

\* is the current value of our count

\* - Have the component render the whole div.counter\--count

\* and display the incoming prop \`number\`

\* - Replace the div.counter\--count below with an instance of

\* the new Count component

\*/

return (

\<div className=\"counter\"\>

\<button className=\"counter\--minus\" onClick={subtract}\>--\</button\>

\<div className=\"counter\--count\"\>

\<h1\>{count}\</h1\>

\</div\>

\<button className=\"counter\--plus\" onClick={add}\>+\</button\>

\</div\>

)

}

 

 

Answer

![](media/image89.png){width="6.298611111111111in"
height="2.5708333333333333in"}

 

![](media/image90.png){width="6.298611111111111in"
height="4.378472222222222in"}

 

##### Setting state from child components

![](media/image91.png){width="6.298611111111111in"
height="3.6194444444444445in"}

Passing data to the child -- parent is possible !!!

Passing data to a sister not possible -- but we can pass to the up
component then we passed to the other child

![](media/image92.png){width="6.298611111111111in" height="3.56875in"}

![](media/image93.png){width="6.298611111111111in"
height="3.5104166666666665in"}

![](media/image94.png){width="6.298611111111111in"
height="3.4409722222222223in"}

![](media/image95.png){width="6.298611111111111in"
height="3.3847222222222224in"}

**Insert dynamic style on myDIV**

**\<div style = {{}}**

**Or**

**Const styles ={**

**basckgroundColor:"black"**

**}**

**\<div style ={}**

[**https://scrimba.com/learn/learnreact/dynamic-styles-co57845e4a49eb86d4414b0fd**](https://scrimba.com/learn/learnreact/dynamic-styles-co57845e4a49eb86d4414b0fd)

![](media/image96.png){width="6.298611111111111in"
height="0.8972222222222223in"}

**Playing with props**

![](media/image97.png){width="6.298611111111111in"
height="2.9270833333333335in"}

Clicking changing ste and colour

<https://scrimba.com/learn/learnreact/boxes-challenge-part-31-local-state-co0264ad6929a556e38a6a10f>

![](media/image98.png){width="6.298611111111111in"
height="2.452777777777778in"}

By setting the next state as different from the previous state we got
automaticlly by clicking the previous state.

<https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html>

![](media/image99.png){width="6.298611111111111in"
height="3.3229166666666665in"}

My solution

![](media/image100.png){width="6.298611111111111in"
height="5.191666666666666in"}

Correct way

![](media/image101.png){width="6.298611111111111in"
height="4.480555555555555in"}

Conditional rendering practice

![](media/image102.png){width="6.298611111111111in"
height="3.4256944444444444in"}

![](media/image103.png){width="6.298611111111111in"
height="2.772222222222222in"}

REACT FORMS

<https://reactjs.org/docs/forms.html>

![](media/image104.png){width="4.666666666666667in" height="5.0in"}

I found this solution however to handle the change you need 2 functions

USEparameters will help to have a better code !!

Optimize solution

![](media/image105.png){width="4.21875in" height="5.0in"}

Forms

![](media/image106.png){width="5.0in" height="2.3854166666666665in"}

**Controlled components (adding value to the input then the input will
be controlled by the array,)**

![](media/image107.png){width="6.298611111111111in" height="3.03125in"}

5.  **Sign up form practice**

> <https://scrimba.com/learn/learnreact/sign-up-form-practice-co30d477b8025a70873e8cb6a>
>
> este exercicio contempla o uso de formularios e de inscricao em
> newsletters. Será importante para landing pages !
>
> ![](media/image108.png){width="3.6255063429571304in"
> height="4.177666229221347in"}

### Use effect

<https://reactjs.org/docs/hooks-effect.html>

effect hook -Z use effect

<https://overreacted.io/a-complete-guide-to-useeffect/>

explaining why we can not think use effect as lifecyle method

<https://www.robinwieruch.de/react-hooks-fetch-data/>

![](media/image109.png){width="6.298611111111111in" height="2.46875in"}

tip: when using use effect don't forget to use a dependency array to not
loop para semrpe.

Dependency array, last item of the use effect hook.

![](media/image110.png){width="4.427701224846894in"
height="1.5939720034995626in"}

# notes app {#notes-app .Title}

![](media/image111.png){width="6.298611111111111in"
height="3.5743055555555556in"}

**Challenge**, everytime the array of state changes you should change
the local storage.

**FAZER O USO DE FUNCOES NO USEEFFECT NAO ALIMENTA IMPLICITS RETURNS
INDESEJADOS.**

Local Storage:

<https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>

# Python {#python .Title}

[**https://www.freecodecamp.org/learn/scientific-computing-with-python/**](https://www.freecodecamp.org/learn/scientific-computing-with-python/)

**Python for everibody**

**More conditional statements**

If

Elif

Else

Print

Try and except conpcept

**Functions**

Def : creates abit of code and you need to name !!

![](media/image112.png){width="2.9900010936132984in"
height="2.239896106736658in"}

In python a dunction is some reusable code that takes arguments(s) as an
input, does some computation, and then returns a result or results

We dedefine a dintction using the def reserved word

We call/ invole the function by using the function name, parentheses,
and arguments in an expression.

\--

A parameter is a variable which we use in the function definition. It is
a "handle" that allows the code in the function to access the arguments
for a aprticular function invocation.

**Definite Loops**

**Loop idioms**

![](media/image113.png){width="6.298611111111111in"
height="2.564583333333333in"}

# API {#api .Title}

Aplication Programming Interface

Getpostman.com .\--\>

API to send messages

Compliments to family !!

Interface:

**REST**

Representational State Transfer.

RESTfulà what is it?

**CRUD**

Creating, Reading, Updating, and Deleting.

![](media/image114.png){width="5.229896106736658in"
height="5.240314960629921in"}

# Asynchronous JavaScript Course (Async/Await, Promises, Callbacks) {#asynchronous-javascript-course-asyncawait-promises-callbacks .Title}

Youtube:

<https://www.youtube.com/watch?v=ZYb_ZU8LNxs&ab_channel=freeCodeCamp.org>

What's Asynchronous JavaScipt?

Allows to break down bigger projects into smaller tasks.

-   Then using any of these three methods over here, either callbacks,
    promises or async await.

Synchronous tasks, if you do have 10 tasks you will have to do it one by
one !!

Project in codepen.io

<https://codepen.io/andrepinto77/pen/PoQKyJo?editors=0011>

What is a callback ?

# UP\*LOAD DOCUMENT NODE JS AND REACT

<https://www.youtube.com/watch?v=iD5qRL7dI-E&ab_channel=TravelsCode>

# Rules to know well {#rules-to-know-well .Title}

-   Props is used to give data to a component.

-   State is pivate data, it is local an only accessible in that
    specific component.

# Data Visualization with D3, JavaScript, react {#data-visualization-with-d3-javascript-react .Title}

Datavis 2020

hhtps://datavis.tech/datavis-2020

-   Datavis is a free online course about how to conceptualize, design,
    and build interactive data visualizations with Web technologies.

**Bibliography:** Visualization Analysis & Design

**Notes:**

**Defining visualization (vis)**

Computer-based visualization systems provide visual representation of
datasets designed to help people carry out tasks more effectively

Visualization is suitable when there is a need to augment human
capabilities rather than replace people with computacional
decision-making methods.

-   Don't need vis when fully automatic solution exists and is trusted

-   Many analysis problems ill-specified

    -   Don't know exactly what questions to ask in advance

-   Possibilities

    -   Long-term use for end users ( e.g. exploratory analysis of
        scientific data)

    -   Presentation of known results

    -   Stepping stone to better understanding of requirements before
        developping models

    -   Help developers of automatic solution refine/debug, determine
        parameters

    -   Help end users of automatic solutions verify, build trust

**8.3. Smiley Part III**

**Well discuss**

-   Getting started with the D3 library

-   Using arc from the d3-shape package

-   SVG Path elements

-   SVG Group elements and the transform attribute

-   Using ES6 Template Literals

-   Adding the mouth to our face

-   **Assignment:** Tweak the Face!

    **8.4. Smilley Part IV**

-   React Components

-   React Props

-   JSX transpilation

-   ES6 (ECMAScript version 6) Background

-   ES5 Functions vs ES6 Arrow Functions

-   Variables: ES5 var vs. ES6 let and const

-   ES6 Destructuring

    Fiquei na Lets make a face part V.

**Week 1 à done.**

![](media/image115.png){width="6.298611111111111in"
height="0.9951388888888889in"}

**Pre requisites:**

Have available 2-10 hours per week

12weeks

**Advantages of React**

-   Component model

-   State management

**ERRORS:**

A CROSS ORIGIN ,

VERIFYNG IF ALL THE functions HAS () AFTER THE RETURN STATEMENT.

**Week 2 ( 30/05/2022 )**

**Finding Visualizations acrross the internet**

-   Reuters Graphics

-   The Upshot

-   The pudding

-   FiveThirtyEight Data Visualization

-   FlowingData

-   Reddit : Data is beautiful

-   Kantar Information is beautiful awards

-   Quartz Data Visualization

-   Graphic Detail -- The Economist

-   #dataviz on twitter

-   **Blockbuilder search (AMAZING)**

-   Observable

**Introduction to Web Technologies**

Summary :

-   Why use Web Technologies?

-   What are Web Technologies (HTML, JS, CSS, SVG)?

-   What is a JavaScript Library?

-   What can you do with D3 and React?

**Why use web technologies?**

Accescivle by anyone with a web developer

No need to install anything locally

Advanced "front end enginering approaches

Custom, bespoke design wirk is possible

Unlimited potential for adding intereactivity

**What are Web Technologies (HTML, JS, CSS, SVG)?**

**Backbone** à Html

**CSS sites:**

-   CSS ZEN GARDEN (the beauty of design)

**SVG**

Check wikipedia:

-   Raster à .jpeg .gif . png

-   Vector.svg

    -   Vector images scalabele vector graphics.

    -   Examples : Tiger.svg

**JavaScript**

Sine Wave Circles -- blockbuilder.org

**D3**

Data driven visualizations (cumbersome when you have deeply data)

**React**

Amzing component system, buil-tin concept frameworks.

**What is a JavaScript Library?**

**What can you do with D3 and React?**

**Lets make a face:**

-   **HTML**

-   **SVG**

-   **CSS**

-   **To star making this face à**

![](media/image116.png){width="2.4835236220472443in"
height="2.365260279965004in"}

57 mins of the course:

Let's make a face part II with React:

We'll discuss :

-   Getting started with React.

-   What is UNPKG, NPM, CDN . : Review -\> UNPKG

-   Why use a module bundler? What is Rollup?

-   Importing libraries using ES6 module syntax.

-   Using JSX (JavaScript XML) for SVG graphics.

-   Deriving graphics coordinates programmatically

**Use unpkg** to find the libraries.

What is unpackage:

-   **NPM** à seacrh for libraries

    -   Npm.com

-   For working in brwoser we use a cdn : content delivery network à see
    wikipedia.

-   Rollup.js (transpiles JSX to JS)

Next class :

![](media/image117.png){width="6.298611111111111in"
height="3.042361111111111in"}

<https://www.youtube.com/watch?v=2LhoCfjm8R4&ab_channel=freeCodeCamp.org>

# C \| C++ {#c-c .Title}

Link:
<https://www.youtube.com/watch?v=KJgsSFOSQv0&list=PLWKjhJtqVAbmUE5IqyfGYEYjrZBYzaT4m&ab_channel=freeCodeCamp.org>

First à create an environment !!

IDE : code blocks

C compiler : needed

**CS 50**

[**https://cs50.harvard.edu/x/2022/weeks/2/**](https://cs50.harvard.edu/x/2022/weeks/2/)

**Week 2 Arrays**

"Read talk and see your code "

-   Debbugging

    -   Step over

    -   Step in : With other functiions is possible to step in in other
        functions

-   #include \<stdio.h\>

-   

-   int main(void)

-   

-   {

-       for ( int i= 0; i \<=2 ; i++ )

-       {

-           printf(\"i is %i\\n\", i);

-           printf( \"#\\n\" ) ;

-       }

-   }

#include \<stdio.h\>

int main(void)

{

    int score1 = 72;

    int score2 = 73;

    int score3 = 33;

    printf(\"Average: %f\\n\", (score1 + score2 + score3) /3.0);

}

If some of the expression is a float number "3.0" everything will be
treated as float !

Int scores\[3\]; à array

Scores\[0\] = 72;

Scores\[1\] = 73;

Scores\[2\] = 33;

![](media/image118.png){width="6.298611111111111in"
height="2.8208333333333333in"}

![](media/image119.png){width="6.298611111111111in"
height="5.592361111111111in"}

![](media/image120.png){width="6.298611111111111in"
height="5.614583333333333in"}

![](media/image121.png){width="6.298611111111111in" height="3.3375in"}

**Readibility Week 2**

**Readability problem:**

Parameters and Considerations:

-   My program should count the number of letters, words, and sentences
    in the text.

-   **Letters:** A letter is any lowercase character from a to z or any
    uppercase character from A to Z

-   **Words:** Any sequence of characters separated by spaces should
    count as a word

-   **Sentences:** Any occurrence of a period, exclamation point or
    question mark indicates the end of a sentence.

**What will the structure of our code?**

1.  Prompt user for input and print out the text

2.  Print the number of letters in the text

    -   Can be any uppercase or lowercase alphabetic characters

    -   Shouldn't include any punctuation, digits or other symbols.

3.  Print the number of words the text

    a.  Sequence of letters separated by space

4.  Print the number of sentences in the text

    a.  Sequence of characters that end with a '.' '!' or'?'

5.  Apply the formula for Coleman-Liau index to determine the grade
    level.

![](media/image122.png){width="6.298611111111111in"
height="2.0493055555555557in"}

**Solution:**

[**https://www.youtube.com/watch?v=rOLYDNjey34**](https://www.youtube.com/watch?v=rOLYDNjey34)

Lab week 3 :

Algorithms

Bubble sort -\> Bubble sort, sometimes referred to as sinking sort, is a
simple sorting algorithm that repeatdly steps through the list, compares
adjacent elements and swaps them if they are in the wrong order.

**Class:** comparison sort

Selection sort

In computer science, selection sort is an in-place comparison sorting
algorithm. It has an O(n²) time complexity, which makes it inefficient
on large lists, and generally performs worse than the similar insertion
sort. [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)

Merge sort

In computer science, merge sort is an efficient, general-purpose, and
comparison-based sorting algorithm. Most implementations produce a
stable sort, which means that the order of equal elements is the same in
the input and output.
[Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)

![](media/image123.png){width="6.298611111111111in"
height="3.428472222222222in"}

### 9.1. Plurality Solution

**Update Vote totals Given a new vote**

-   For every vote made, we must compare it with the names of the
    candidates keyed in

-   If the name matches that of a candidate, the candidate's total vote
    count increases by 1

-   We will use strcmp which compares two strings, character by
    character

Strcmp() -- this function is used to compare the string arguments. It
compares strings lexicographically which means it compares both the
strigns character by character. It starts comparing the very first
character of strings untill the characters of both strings are equal or
NULL character is found.

### C tutorial for beginners

<https://www.youtube.com/watch?v=KJgsSFOSQv0&t=598s&ab_channel=freeCodeCamp.org>

#### first program

![](media/image124.png){width="6.298611111111111in"
height="2.410416666666667in"}

Type of Data

![](media/image125.png){width="6.298611111111111in"
height="2.9743055555555555in"}

![](media/image126.png){width="6.298611111111111in"
height="3.470138888888889in"}

#### C Math functions

https://www.w3schools.com/c/c_math.php

# Google app Scripts {#google-app-scripts .Title}

**Linkedin learning:** [Traversing a Google Doc
(linkedin.com)](https://www.linkedin.com/learning/google-apps-script-for-javascript-developers/traversing-a-google-doc?autoplay=true&resume=false&u=39592538)

# Qlik {#qlik .Title}

**RangeSUM -- script and chart functions**

**Link:
<https://help.qlik.com/en-US/sense/February2022/Subsystems/Hub/Content/Sense_Hub/ChartFunctions/RangeFunctions/rangesum.htm#:~:text=RangeSum()%20returns%20the%20sum,values%20are%20treated%20as%200>.**

**RangeSum()** returns the sum of a range of values. All non-numeric
values are treated as 0.

-   RangeSum(first_expr\[,Expression\])

**Return data type:** numeric

**Arguments:**

The arguments of this function may contain inter-record functions which
in themselves return a list of values.

![](media/image127.png){width="6.298611111111111in"
height="1.4597222222222221in"}

**RowNO -- script function**

This function returns an integer for the position of the current row in
the resulting Qlik Sense internal table. The first row is number 1.

**Syntax:**

RowNo( \[TOTAL\])

In contrast to **RecNo(),** which counts the records in the raw data
table, the **RowNo()** function does not count records that are excluded
by where clauses and is not reset when a raw data table is concatenated
to another.

**Outer Join**

[**https://help.qlik.com/en-US/sense/August2021/Subsystems/Hub/Content/Sense_Hub/Scripting/ScriptPrefixes/Outer.htm**](https://help.qlik.com/en-US/sense/August2021/Subsystems/Hub/Content/Sense_Hub/Scripting/ScriptPrefixes/Outer.htm)

The explicit Join prefix can be preceded by the prefix **Outer** in
order to specify an outer join. In an outer join all combinations
between the two tables are generated. The resulting table will thus
contain combinations of field values from the raw data tables where the
linking field values are represented in one or both tables. The explicit
**Join** prefix can be preceded by the prefix **Outer** in order to
specify an outer join. In an outer join, the resulting table will cntain
all values from both raw data tables where the linking fields values are
represented in either one or both tables. The **Outer** keyword is
optional and is the default join type used when a join prefix is not
specified.

**Inner**

The join and keep prefixes can be preceded by the prefix inner. If used
before join it specifies that an inner join should be used. The
resulting table will thus only contain combinations of field values from
the raw data tables where the linking field values are represented in
both tables. If used before keep, it specifies that both raw data tables
should be reduced to their common intersection before being stored in
Qlik Sense.

# PRojects {#projects .Title}

# JavaScript {#javascript-1 .Title}

# Stand Virtual 

-   # GitHub Link: 

    -   # <https://github.com/andrepinto77/Stand-Virtual->

# 

# word to md  {#word-to-md .Title}

CGI is a standard method used to generate dynamic content on web pages.

<https://github.com/jgm/pandoc/blob/master/doc/pandoc-server.md>

**Pandoc server**

What is CI \| CD ?

**Overview**

CI \| CD is a method to frequently deliver apps to customers by
introducing automation into the stages of app development. The main
concepts attributed to CI \| CD are continuous integration, continuous
delivery, and continuous deployment. CI\| CD is a solution to the
problems integrating new code can cause for development and operations
teams (AKA "integration hell").

References

Appendices
