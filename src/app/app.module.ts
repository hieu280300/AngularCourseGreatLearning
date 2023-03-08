import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CustomerComponent } from './customer/customer.component';
import { HighLightDirective } from './high-light.directive';
import { AppNotDirective } from './app-not.directive';
import { TempConverterPipe } from './temp-converter.pipe';
import { TestCustomPipeComponent } from './test-custom-pipe/test-custom-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    CustomerComponent,
    HighLightDirective,
    AppNotDirective,
    TempConverterPipe,
    TestCustomPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
