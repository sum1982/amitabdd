/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test.com;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.ArrayList;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 *
 * @author kohli
 */
public class AmitaTest {
    
     private static WebDriver driver;
    private String baseUrl="https://healthcare.ascension.org/";  
    
    @Given("^User is already on Home page$")
public void user_is_already_on_Home_page() throws Throwable {
      
     System.setProperty("webdriver.chrome.driver", "c:\\data\\chromedriver.exe");
         driver = new ChromeDriver();
         driver.get(baseUrl);
   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
   driver.manage().window().maximize();
}

@When("^title of the Home page is Healthcare|Acension$")
public void title_of_the_Home_page_is_Healthcare_Acension() throws Throwable {
    String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Healthcare | Ascension", title);
}

@Then("^User clicks on location button$")
public void user_clicks_on_location_button() throws Throwable {
  driver.findElement(By.xpath("//a[@title='Find a Location']")).click();
}

@Then("^user clicks on search box$")
public void user_clicks_on_search_box() throws Throwable {
  driver.findElement(By.xpath("//div[@class='icon']")).click();
driver.findElement(By.xpath("//input[@class='location-input js-search-query']")).click();
driver.findElement(By.xpath("//input[@class='location-input js-search-query']")).clear();


}

@Then("^enter location \"([^\"]*)\" and clicks on physical therapy button$")
public void enter_location_and_clicks_on_physical_therapy_button(String location) throws Throwable {
  driver.findElement(By.xpath("//input[@class='location-input js-search-query']")).sendKeys(location);
  driver.findElement(By.xpath("//input[@class='location-input js-search-query']")).submit();
  driver.findElement(By.xpath("//a[contains(text(),'Physical Therapy')]")).click();
}

@Then("^user clicks on desired location$")
public void user_clicks_on_desired_location() throws Throwable {
    JavascriptExecutor js=(JavascriptExecutor)driver;
        js.executeScript("window.scrollBy(0,1500)");
//   driver.findElement(By.xpath("//a[contains(text(),'Ascension Illinois - Rehabilitation Schaumburg')]")).click();
   WebDriverWait wait2 = new WebDriverWait(driver, 20);  //20 sec
        wait2.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(),'Ascension Illinois - Rehabilitation Schaumburg')]")));

}

@Then("^user sees details of the location$")
public void user_sees_details_of_the_location() throws Throwable {
     String title = driver.getTitle();
		System.out.println(title);
}

@Then("^user closes browser$")
public void user_closes_browser() throws Throwable {
driver.quit();
}

@When("^User clicks on Specialty Care link$")
public void user_clicks_on_Specialty_Care_link() throws Throwable {
  driver.findElement(By.xpath("//div[@class='field-heading']")).click();
}

@Then("^user clicks on Search for Specialty box and enters \"([^\"]*)\"$")
public void user_clicks_on_Search_for_Specialty_box_and_enters(String data) throws Throwable {
   driver.findElement(By.name("get-care-now-filter-location")).click();
   driver.findElement(By.name("get-care-now-filter-location")).clear();
    driver.findElement(By.name("get-care-now-filter-location")).sendKeys(data);
}

@Then("^user clicks on search button$")
public void user_clicks_on_search_button() throws Throwable {
     driver.findElement(By.linkText("Post-acute care")).click();
}

//@Then("^user clicks on Post-Acute care link$")
//public void user_clicks_on_Post_Acute_care_link() throws Throwable {
//    driver.findElement(By.xpath("//div[@id='content']/div/div[3]/div/div/div/div/div/div/div/p[5]/a")).click();
//}

@Then("^user scrolls down and clicks Find A Location$")
public void user_scrolls_down_and_clicks_Find_A_Location() throws Throwable {
    driver.findElement(By.xpath("//div[@id='content']/div/div[3]/div/div/div/div/div/div/div/p[5]/a")).click();
}

@When("^User clicks on Donation link$")
public void user_clicks_on_Donation_Scenario() throws Throwable {
    driver.findElement(By.xpath("//*[@id=\"header\"]/div/div[1]/div/div/div/div/div/div[1]/div/div/div/div[1]/div/div/div/div/ul/li[2]/div/a")).click();
}

@Then("^User clicks on Illinois box$")
public void user_clicks_on_Illinois_box() throws Throwable {
    driver.findElement(By.xpath("//*[@id=\"facets-section__state\"]/li[4]/a/div/div/h3")).click();
}

@Then("^User clicks Illinois Ascension Foundation And clicks on MAKE A GIFT$")
public void user_clicks_Illinois_Ascension_Foundation_And_clicks_on_MAKE_A_GIFT() throws Throwable {
    
//    driver.findElement(By.xpath("//*[@id=\"container\"]/div/div[2]/div[2]/div/div/div[2]/div/div/div/div[1]/div/h3/a")).click();
    WebDriverWait wait1 = new WebDriverWait(driver, 20);  //20 sec
        wait1.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"container\"]/div/div[2]/div[2]/div/div/div[2]/div/div/div/div[1]/div/h3/a"))).click();
//    driver.findElement(By.xpath("//a[contains(text(),'Ascension Illinois Foundation')]")).click();
      Set<String> allTabHandles = driver.getWindowHandles();
String currentTabHandle = driver.getWindowHandle();
        for (String tabHandle : allTabHandles) {
            if (!tabHandle.equals(currentTabHandle)) {
                driver.switchTo().window(tabHandle);
                break;
            }
        }
        //Wait until element make a gift is visible and then clicking on it
        WebDriverWait wait = new WebDriverWait(driver, 20);  //20 sec
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"comp-l8ep9eh1\"]/a/div/span[1]"))).click();
}

@Then("^User clicks on other_box and enters \"([^\"]*)\"$")
public void user_clicks_on_other_box_and_enters(String Amount) throws Throwable {
     JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,-300)");
    
 WebElement iframe = driver.findElement(By.xpath("//*[@id=\"comp-l8lu391c\"]/wix-iframe/div/iframe"));
        driver.switchTo().frame(iframe);
        
        //Scrolling down a little
//        JavascriptExecutor js = (JavascriptExecutor) driver;
//        js.executeScript("window.scrollBy(0,250)", "");
        
        // Waiting till the "other" donation box is visible and then clicking on it
        WebDriverWait wait2 = new WebDriverWait(driver, 20);  //20 sec
        wait2.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"bboxdonation_gift_rdlstGivingLevels\"]/div[6]/div/label/span")));
        driver.findElement(By.xpath("//*[@id=\"bboxdonation_gift_rdlstGivingLevels\"]/div[6]/div/label/span")).click();
//        Thread.sleep(5000);
        
        //inputing $1 for dollar amount to be donated
        driver.findElement(By.xpath("//*[@id=\"bboxdonation_gift_txtOtherAmountButtons\"]")).sendKeys(Amount);
}

@Given("^user is already on Main page$")
public void user_is_already_on_Main_page() throws Throwable {
  System.setProperty("webdriver.chrome.driver", "c:\\data\\chromedriver.exe");
         driver = new ChromeDriver();
         driver.get(baseUrl);
         driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
         driver.manage().window().maximize();
}

@When("^user clicks on Careers link$")
public void user_clicks_on_Careers_link() throws Throwable {
       driver.findElement(By.linkText("Careers")).click();
       
}

@Then("^user enters job_title and area_zip$")
public void user_enters_job_title_and_area_zip() throws Throwable {
 driver.findElement(By.id("keyword-search")).click();
        driver.findElement(By.id("keyword-search")).clear();
        driver.findElement(By.id("keyword-search")).sendKeys("edward");
        driver.findElement(By.id("location-search")).click();
        driver.findElement(By.id("location-search")).clear();
        driver.findElement(By.id("location-search")).sendKeys("60586");
        driver.findElement(By.xpath("//div[@id='all-content']/div[3]/light-search/lw-search/div/div/div/div/form/div[3]/button/span")).click();
             JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollBy(0,500) ");
}

@Then("^user clicks on Apply Now button$")
public void user_clicks_on_Apply_Now_button() throws Throwable {
    // Thread.sleep(3000);
//     JavascriptExecutor js1 = (JavascriptExecutor) driver;
//        js1.executeScript("window.scrollBy(0,500) ");
//         Alert alert = driver.switchTo().alert();
//
//        // Capturing alert message.    
//        String alertMessage = driver.switchTo().alert().getText();
//
//        // Displaying alert message		
//        System.out.println(alertMessage);
//        Thread.sleep(5000);
//
//        // Accepting alert		
//        alert.accept();

//         WebDriverWait wait2 = new WebDriverWait(driver, 20);  //20 sec
//        wait2.until(ExpectedConditions.elementToBeClickable(By.xpath("\"//a[@role='button']\"")));
//        driver.findElement(By.xpath("//a[@role='button']")).click();
//    WebElement results= driver.findElement(By.xpath("non-typeahead-results ng-star-inserted"));
//        js1.executeScript("arguments[0].scrollIntoView(true)",results);
    driver.findElement(By.xpath("//a[@aria-label='Apply to Emergency Medicine Clinical Pharmacist 248468']")).click();
}

@Then("^enters email \"([^\"]*)\"$")
public void enters_email(String arg1) throws Throwable {
   WebElement iframe = driver.findElement(By.name("icims_content_iframe"));
        driver.switchTo().frame(iframe);
          WebDriverWait wait2 = new WebDriverWait(driver, 20);  //20 sec
        wait2.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"email\"]")));
        driver.findElement(By.xpath("//*[@id=\"email\"]")).click();
        
         driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("kav@abc.com");
         driver.findElement(By.id("enterEmailSubmitButton")).click();
         Thread.sleep(2000);
}

@Given("^user is already on Homepage$")
public void user_is_already_on_Homepage() throws Throwable {
 System.setProperty("webdriver.chrome.driver", "c:\\data\\chromedriver.exe");
         driver = new ChromeDriver();
         driver.get(baseUrl);
         driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
         driver.manage().window().maximize();
}

@Then("^user clicks on pricetransparency link$")
public void user_clicks_on_pricetransparency_link() throws Throwable {
    driver.findElement(By.linkText("Price Transparency")).click();
}

@Then("^user clicks on ESTIMATE MY PRICE$")
public void user_clicks_on_ESTIMATE_MY_PRICE() throws Throwable {
   driver.findElement(By.xpath("//*[@id=\"content\"]/div/div[2]/div/div/div/div/div[2]/div/div/a")).click();
}

@Then("^user clicks on LABS and clicks on BLOOD$")
public void user_clicks_on_LABS_and_clicks_on_BLOOD() throws Throwable {
     ArrayList<String> tabList = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabList.get(1));
        driver.findElement(By.linkText("Labs")).click();
        driver.findElement(By.linkText("Blood")).click();
}

@Then("^user clicks on Routine lab testing$")
public void user_clicks_on_Routine_lab_testing() throws Throwable {
   driver.findElement(By.linkText("Routine lab testing")).click();
}

@Then("^user clicks on link and enters \"([^\"]*)\"$")
public void user_clicks_on_link_and_enters(String data) throws Throwable {
//     driver.findElement(By.xpath("//*[@id=\"root\"]/div/section/section/div/div[2]/button/div/p[1]")).click();
// WebDriverWait wait = new WebDriverWait(driver, 20);  //20 sec
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//body/div[@id='root']/div[1]/section[1]/section[1]/div[1]/div[1]/button[1]/div[1]/p[1]"))).click();
        driver.findElement(By.xpath("//body/div[@id='root']/div[1]/section[1]/section[1]/div[1]/div[1]/button[1]/div[1]/p[1]")).click();
        
        WebElement searchBar = driver.findElement(By.id("searchbar"));
        searchBar.click();
        searchBar.clear();
        searchBar.sendKeys(data);
        searchBar.sendKeys(Keys.ENTER);
         JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollBy(0,500) ");
}
@Then("^user selects insurance and plan and clicks search$")
public void user_selects_insurance_and_plan_and_clicks_search() throws Throwable {
//         JavascriptExecutor js1 = (JavascriptExecutor) driver;
//        js1.executeScript("window.scrollBy(0,500) ");
   
//Thread.sleep(5000);
      driver.findElement(By.xpath("//p[contains(text(),'AMITA Health St. Alexius Medical Center Hoffman Es')]")).click();
          WebDriverWait wait = new WebDriverWait(driver, 20);  //20 sec
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input']"))).click();
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[2]")).click();
        
        driver.findElement(By.xpath("//*[@id=\"insurance-plan-select\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[1]")).click();
        driver.findElement(By.xpath("//span[contains(text(),'Get my estimate')]")).click();
        Thread.sleep(2000);
//        driver.findElement(By.xpath("//span[contains(text(),'Continue')]")).click();
        
//        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div/div/div[3]/button/span[1]")).click();
//Thread.sleep(3000);
//        //Verify Results
//        WebElement fullserviceCost = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div[2]/div[1]/div/div/div/h3"));
}


}

   




