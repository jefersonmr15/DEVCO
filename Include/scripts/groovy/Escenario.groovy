import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.Keys

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import internal.GlobalVariable

class Escenario {

	@Given("El usuario ingresa a la pagina web")
	def enterWeb() {
		WebUI.openBrowser(GlobalVariable.URL)
		WebUI.maximizeWindow()
		WebUI.takeScreenshot()
	}
	@And("El usuario selecciona la opción Nota de texto enriquecido")
	def selectNote() {
		WebUI.click(findTestObject('buttonRichTextNote'))
		WebUI.takeScreenshot()
	}
	@When("El usuario ingresa un texto y lo sombrea")
	def enterText() {
		WebUI.setText(findTestObject('textAreaRichRextNote'), 'Texto de Practica')
		WebUI.sendKeys(findTestObject('textAreaRichRextNote'), Keys.chord(Keys.CONTROL, 'a'))
		WebUI.takeScreenshot()
	}
	@And("El usuario hace clic en el botón de negrita")
	def clickbuttonBlack() {
		WebUI.click(findTestObject('buttonBlack'))
		WebUI.takeScreenshot()
	}
	@Then("El sistema presenta el texto en negrita")
	def verifyTextBlack() {
		WebUI.verifyElementPresent(findTestObject('textBlack'), 0)
		WebUI.takeScreenshot()
		WebUI.closeBrowser()

	}
	
	@And("El usuario selecciona la opción Lista de tareas")
	def taskList() {
		WebUI.click(findTestObject('buttonTaskList'))
		WebUI.takeScreenshot()
	}
	@And("El usuario agrega 5 elementos a la lista")
	def addElements() {
		for (i in 1..5) {
				WebUI.setText(findTestObject('inputNewTask'), 'Value'+i)
				WebUI.click(findTestObject('buttonAdd'))
			}
			WebUI.takeScreenshot()
	}
	
	@When("El usuario elimina un elemento de la lista haciendo clic en el botón de eliminar")
	def deleteElement() {
		WebUI.click(findTestObject('buttonDeleteElementList', [('index') : 1]))
		WebUI.takeScreenshot()
	}
	
	@Then("El usuario confirma que el elemento eliminado no aparece en la lista")
	def verifyElementDeleted() {
		WebUI.closeBrowser()
	}
	
}


