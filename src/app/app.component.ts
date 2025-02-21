import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: String = "angular-whos-who";

  ngOnInit() {
    /*
    localStorage.getItem("theme")
    can get local storage
    */
    document.documentElement.classList.add("dark");
    //document.documentElement.classList.add("bg-slate-800");
    document.documentElement.style.background = "url('assets/backgrounds/canvas_gray.jpg') no-repeat center center fixed";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.classList.add("text-white");
  }

}
