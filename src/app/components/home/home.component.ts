import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: string[] = [];
  chunksOfTen = new Array<string[]>(0);

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    this.items = Array.from({length: 100000}).map((_, j) => `Item #${j}`);

    this.chunksOfTen = new Array<string[]>(0);
    const chunk = 20;
    let i = 0;
    let chunkI = 0;
    let arr = [];

    while (i < this.items.length) {

      arr.push(this.items[i]);

      if (chunkI < chunk - 1) {
        chunkI++;
      } else {
        this.chunksOfTen.push(arr);
        arr = [];

        chunkI = 0;
      }

      i++;
    }
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
