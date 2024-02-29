import { LightningElement } from 'lwc';
import noneLabel from '@salesforce/label/c.None';
import privateLabel from '@salesforce/label/c.Private';
import publicLabel from '@salesforce/label/c.Public';

export default class SurveyComponent extends LightningElement {
    value = noneLabel;
    showPopup = false;

    get options() {
        return [
                 { label: noneLabel, value: noneLabel },
                 { label: privateLabel, value: privateLabel },
                 { label: publicLabel, value: publicLabel },
               ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        if(this.value == 'Private'){
            this.showPopup = true;
        }
    }
    
    closeModal(){
        this.showPopup = false;
    }
}