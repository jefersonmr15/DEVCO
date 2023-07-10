$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Entrevista/DEVCO/DEVCO/Include/features/Escenarios.feature");
formatter.feature({
  "name": "Crear una nota de texto enriquecido con letra en negrita",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "El usuario crea nota de tipo Nota de texto enriquecido y pone el texto en negrita",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la pagina web",
  "keyword": "Given "
});
formatter.match({
  "location": "Escenario.enterWeb()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario selecciona la opción Nota de texto enriquecido",
  "keyword": "And "
});
formatter.match({
  "location": "Escenario.selectNote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario ingresa un texto y lo sombrea",
  "keyword": "When "
});
formatter.match({
  "location": "Escenario.enterText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario hace clic en el botón de negrita",
  "keyword": "And "
});
formatter.match({
  "location": "Escenario.clickbuttonBlack()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El sistema presenta el texto en negrita",
  "keyword": "Then "
});
formatter.match({
  "location": "Escenario.verifyTextBlack()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Eliminar un artículo de una lista de 5 elementos",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "El usuario ingresa a la pagina web",
  "keyword": "Given "
});
formatter.match({
  "location": "Escenario.enterWeb()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario selecciona la opción Lista de tareas",
  "keyword": "And "
});
formatter.match({
  "location": "Escenario.taskList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario agrega 5 elementos a la lista",
  "keyword": "And "
});
formatter.match({
  "location": "Escenario.addElements()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario elimina un elemento de la lista haciendo clic en el botón de eliminar",
  "keyword": "When "
});
formatter.match({
  "location": "Escenario.deleteElement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El usuario confirma que el elemento eliminado no aparece en la lista",
  "keyword": "Then "
});
formatter.match({
  "location": "Escenario.verifyElementDeleted()"
});
formatter.result({
  "status": "passed"
});
});