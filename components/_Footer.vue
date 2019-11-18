<template lang="pug">
.layout-footer
	p
		a#randomWord Loading...
	p
		| Page Editor, Page Design: Yukari-World
		br
		| Text Editor:&nbsp;
		a(href='https://atom.io/', title='Atom', target='_blank', rel='external noopener') Atom
		| ,&nbsp;
		a(href='https://notepad-plus-plus.org/', title='Notepad++ Home', target='_blank', rel='external noopener') Notepad++
		| ,&nbsp;
		a(href='https://code.visualstudio.com/', title='Visual Studio Code - Code Editing. Redefined', target='_blank', rel='external noopener') Visual Stdio Code
		br
		| Syntax Highlightor:&nbsp;
		a(href='https://prismjs.com/', title='Prism', target='_blank', rel='external noopener') Prism
		br
		| Coding Language: JavaScript,&nbsp;
		a(href='https://pugjs.org/', title='Pug: Getting Started', target='_blank', rel='external noopener') Pug(Jade)
		| ,&nbsp;
		a(href='http://sass-lang.com/', title='Sass: Syntactically Awesome Style Sheets', target='_blank', rel='external noopener') Sass(SCSS)
		br
		| Script Load Time:&nbsp;
		span#LoadTime Unknown ms
</template>
