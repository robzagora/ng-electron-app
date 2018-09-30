import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  test() {
    this.electronService.ipcRenderer.send('aaa', 'eeeeee');

    const json = JSON.stringify({
        test: 'test'
    });

    this.electronService.remote.dialog.showSaveDialog({}, (fileName, bookmark) => {
      console.log(fileName);

      this.electronService.fs.writeFile(fileName, json, err => {
          console.log(err);
      });
    });

  }

}
