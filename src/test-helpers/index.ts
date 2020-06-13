import { By } from '@angular/platform-browser';

export function getElement(fixture,css){
    return fixture.debugElement.query(By.css(css))
    
}

