# TradingView
TradingView - Alerts
// JSON data
const jsonData = {
    "action": "{{strategy.order.action}}",
    "alert_message": "{{strategy.order.alert_message}}",
    "close": "{{close}}",
    "comment": "{{strategy.order.comment}}",
    "contracts": "{{strategy.order.contracts}}",
    "exchange": "{{exchange}}",
    "high": "{{high}}",
    "id": "{{strategy.order.id}}",
    "interval": "{{interval}}",
    "low": "{{low}}",
    "open": "{{open}}",
    "position_size": "{{strategy.position_size}}",
    "prev_market_position": "{{strategy.prev_market_position}}",
    "prev_market_position_size": "{{strategy.prev_market_position_size}}",
    "price": "{{strategy.order.price}}",
    "ticker": "{{ticker}}",
    "time": "{{time}}",
    "signature": ""
};

function selectDropdownOption(dropdownSelector, optionText) {
    // Click the dropdown to open it
    const dropdown = document.querySelector(dropdownSelector);
    dropdown.click();

    // Wait for the dropdown options to appear
    setTimeout(() => {
        // This selector might need to be adjusted based on the actual structure
        const options = document.querySelectorAll('[role="option"]');
        for (const option of options) {
            if (option.textContent.includes(optionText)) {
                option.click();
                break;
            }
        }
    }, 500); // Adjust the timeout as needed
}

function updateTextareaWithJson(jsonData) {
    // Convert JSON object to a string
    const jsonString = JSON.stringify(jsonData, null, 2); // 'null, 2' for pretty-printing

    // Find the textarea (replace 'yourTextareaSelector' with the actual selector)
    const textarea = document.querySelector("[id='alert-message']");
    
    if (textarea) {
        // Update the textarea
        document.querySelector('[id="alert-message"').click()
        textarea.innerHTML = jsonString;
    


        
    }
}



async function automateWorkflow() {
    let elements = document.querySelectorAll("[class^='item-brCSL33P']");
    let values = Array.from(elements).map(el => el.textContent.trim());

    for (let i = 0; i < elements.length; i++) {
        // Click each item
        elements[i].click();

        document.querySelector('[id="header-toolbar-alerts"').click()
        await new Promise(resolve => setTimeout(resolve, 5000));
        selectDropdownOption('[data-name="main-series-select"]', 'RSI Strategy (14, 30, 70)');
        await new Promise(resolve => setTimeout(resolve, 5000));
//	      document.querySelector('[id="alert-message"]').value = 'Your Message';	
				updateTextareaWithJson(jsonData);
        //await new Promise(resolve => setTimeout(resolve, 5000));
	      //document.querySelector('#alert-name').click(); 
        //await new Promise(resolve => setTimeout(resolve, 5000));
           document.querySelector('.submitBtn-RHTYtJvz').click();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log(values);
}

automateWorkflow();

