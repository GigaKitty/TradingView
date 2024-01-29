// For now this script is meant to be used in the browser console
// It will automate the process of creating alerts for earnings events in TradingView
// It will click on each earnings event, create an alert, and then go back to the previous page
// The alerts will be created with the following settings:
// - RSI Strategy (14, 30, 70) as the condition
// - A custom message with the JSON data of the alert
// - The alert name will be 'RSI'

// To run this script, open the browser console and paste the code
// Then call the `automateWorkflow` function

// This function will select an option strategy from a dropdown
function selectDropdownOption(dropdownSelector, optionText) {
    // Click the dropdown to open it
    const dropdown = document.querySelector(dropdownSelector);
    dropdown.click();

    setTimeout(() => {
        const options = document.querySelectorAll('[role="option"]');
        for (const option of options) {
            if (option.textContent.includes(optionText)) {
                option.click();
                break;
            }
        }
    }, 500);
}

// This function will type a message into the message textarea
function updateTextareaWithJson(jsonData, alertTitle) {
    const alertmessage = document.querySelector('[id="alert-message"]');
    const alertname = document.querySelector('[id="alert-name"]');
      // Create a new 'change' event

   if (alertmessage) {
        alertmessage.value = JSON.stringify(jsonData);
        alertname.innerHTML = alertTitle;
    }

}


// This function will automate the workflow of creating alerts for earnings events
async function automateWorkflow(strategy, alertTitle, signature) {
    let elements = document.querySelectorAll("[class^='item-brCSL33P']");
    let values = Array.from(elements).map(el => el.textContent.trim());
    let timeout = 5000;
    let jsonData = {
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
    "volume": "{{volume}}",
    "syminfo_currency": "{{syminfo.currency}}",
    "syminfo_basecurrency": "{{syminfo.basecurrency}}",
    "market_position": "{{strategy.market_position}}",
    "position_size": "{{strategy.position_size}}",
    "market_position_size": "{{strategy.market_position_size}}",
    "prev_market_position": "{{strategy.prev_market_position}}",
    "prev_market_position_size": "{{strategy.prev_market_position_size}}",
    "price": "{{strategy.order.price}}",
    "ticker": "{{ticker}}",
    "time": "{{time}}",
    "signature": signature
    };
    for (let i = 0; i < elements.length; i++) {
        // Click each item
        elements[i].click();

        document.querySelector('[id="header-toolbar-alerts"').click()
        
        await new Promise(resolve => setTimeout(resolve, timeout));

        selectDropdownOption('[data-name="main-series-select"]', strategy);
        
        await new Promise(resolve => setTimeout(resolve, timeout));

        updateTextareaWithJson(jsonData, alertTitle);

        await new Promise(resolve => setTimeout(resolve, timeout));

        document.querySelector('.submitBtn-RHTYtJvz').click();
        
        elements[i].remove();
        
        await new Promise(resolve => setTimeout(resolve, timeout));
    }

    console.log(values);
}

// strategy: RSI Strategy (14, 30, 70) |
// alertTitle: RSI | MacD 
// signature: 
automateWorkflow('MACD Strategy (12, 26, 9)', 'MacD', 'signature' );
