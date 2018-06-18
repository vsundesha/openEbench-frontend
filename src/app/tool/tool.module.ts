import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ToolRoutingModule, routingComponents } from './tool-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { ToolComponent } from './tool.component';
import { ToolService } from './shared/tool.service';
import { KeyValuePipe } from './shared/pipes/key-value.pipe';


import { ToolTableComponent } from './tool-list/tool-table/tool-table.component';
import { ChartIdPipe } from './shared/pipes/chart-id.pipe';






@NgModule({
  declarations: [
    ToolComponent,
    ToolTableComponent,
    routingComponents,
    KeyValuePipe,
    ChartIdPipe,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ToolRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ToolService],
  bootstrap: [ToolComponent]
})
export class ToolModule { }