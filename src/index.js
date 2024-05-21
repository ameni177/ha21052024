import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const para = {
  color: 'red',
  fontSize: '16px'
}
function add(a,b)
{
  return a+b;
}
function berechneQuadratwurzel(zahl) {
  // Verwende die Math.sqrt() Methode, um die Quadratwurzel zu berechnen
  return Math.sqrt(zahl);
}
function aktuellesDatum() {
  // Verwende Date.now(), um die aktuelle Zeit in Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zu erhalten
  const jetztInMillisekunden = Date.now();

  // Konvertiere die Millisekunden in ein Datum-Objekt
  const datumObjekt = new Date(jetztInMillisekunden);

  // Extrahiere den Tag, Monat und Jahr
  const tag = datumObjekt.getDate();
  const monat = datumObjekt.getMonth() + 1; // Monate beginnen bei 0, daher +1
  const jahr = datumObjekt.getFullYear();

  // Gib das aktuelle Datum im gewünschten Format zurück
  return `${jahr}-${monat < 10 ? '0' + monat : monat}-${tag < 10 ? '0' + tag : tag}`;
}

root.render(
 <>
 <h1 className='header1'> Hallo React </h1>
 <p className='paragraph'> 
 React ist eine JavaScript-Programmbibliothek zur Erstellung von webbasierten Benutzeroberflächen. Komponenten werden in React
  hierarchisch aufgebaut und können in dessen Syntax als selbst definierte JSX-Tags repräsentiert werden
 </p>
 <p style={para}> 
 React ist eine der beliebtesten JavaScript-Bibliotheken zur Entwicklung von mobilen und Web-Anwendungen. Entwickelt von Meta 
 (ehemals Facebook),ermöglicht React Entwicklern das Erstellen wiederverwendbarer Komponenten zum Aufbau von Benutzeroberflächen (UIs).
 </p>
 <h3> Die Addition : 4+2 = {add(4,2)}</h3>
 <h3> Die Quadratwurzel von 16 = {berechneQuadratwurzel(16)}</h3>
 <p style={para}> zufällige Zahl zwischen 1 und 100  : {Math.floor(Math.random() * 100) + 1}</p>
 <p> Das aktuelle datum ist : {aktuellesDatum()}</p>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
