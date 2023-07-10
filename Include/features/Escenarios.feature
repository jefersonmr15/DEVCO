#Author: Jefferson Miguel Rodriguez

@tag
Feature: Crear una nota de texto enriquecido con letra en negrita

  @tag1
  Scenario: El usuario crea nota de tipo Nota de texto enriquecido y pone el texto en negrita
    Given El usuario ingresa a la pagina web
    And El usuario selecciona la opción Nota de texto enriquecido
    When El usuario ingresa un texto y lo sombrea
    And El usuario hace clic en el botón de negrita
    Then El sistema presenta el texto en negrita
  
  Scenario: Eliminar un artículo de una lista de 5 elementos
    Given El usuario ingresa a la pagina web
    And El usuario selecciona la opción Lista de tareas
    And El usuario agrega 5 elementos a la lista
    When El usuario elimina un elemento de la lista haciendo clic en el botón de eliminar
    Then El usuario confirma que el elemento eliminado no aparece en la lista