import { Component, OnInit, ViewChild } from "@angular/core";
import { ControlEntriesService } from "./../../services/control-entries.service";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: "app-home-module",
  templateUrl: "./home-module.component.html",
  styleUrls: ["./home-module.component.css"],
})
export class HomeModuleComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  contaCliente: ContaCliente[];
  showAlert: boolean = false;

  constructor(public entriesServices: ControlEntriesService) {
    this.chartOptions = {
      series: [
        {
          name: "Valor Final",
          data: [],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "R$ (Mil)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "R$ " + val + " Mil";
          },
        },
      },
    };
  }

  ngOnInit() {
    this.generateParameters();
  }

  /**
   * Retrieve data to populate both Table and Chart.
   *
   *
   */
  public generateParameters() {
    this.entriesServices.getUserEntries().subscribe((data: any) => {
      this.contaCliente = data.listaControleLancamento;
      this.updateSeries(data.listaControleLancamento);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    });
  }

  /**
   * Update bar chart data, needs array of values from back-end
   *
   * @param values - Response data from back-end
   */
  public updateSeries(values: any) {
    let dataArray: number[] = [];
    let categoriesArray: string[] = [];

    values.map((entry) => {
      dataArray.push(entry.valorLancamentoRemessa);
      categoriesArray.push(entry.dataLancamentoContaCorrenteCliente);
    });
    this.chartOptions = {
      ...this.chartOptions,
      series: [
        {
          name: "Valor Final",
          data: dataArray,
        },
      ],
      xaxis: {
        categories: categoriesArray,
      },
    };
  }
}
