import {Component, OnInit} from 'angular2/core';

import { SensorService, Sensor } from '../core/sensor';
import { FilterComponent, SensorFilter } from './filter.component';
import { SensorListComponent } from './sensor-list.component';
import { SensorPipe } from './sensor.pipe';

@Component({
    selector: 'configure',
    moduleId: module.id,
    directives: [FilterComponent, SensorListComponent],
    pipes: [SensorPipe],
    templateUrl: 'sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private filter: string;
    private sensors: Sensor[] = [];

    constructor(public sensorService: SensorService) {    
    }
    
    refreshSensors(filterData: SensorFilter) {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = new SensorPipe().transform(data, [filterData]);
            });
    }

    ngOnInit() { 
        
    }
}