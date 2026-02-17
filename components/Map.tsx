"use client";

import React, { useEffect, useRef, } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Stack } from "@mui/material";

import { mapData } from "../public/data/us-states";

interface MapChartProps {
  mapHeader?: string,
  mapSubheader?: string
}


const MapChart: React.FC<MapChartProps> = ({mapHeader, mapSubheader}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Create root
    const root = am5.Root.new(chartRef.current);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoAlbersUsa(),
        layout: root.horizontalLayout
      })
    );

    // Create polygon series
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
        valueField: "value",
        calculateAggregates: true
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}: {value}"
    });

    polygonSeries.set("heatRules", [
      {
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0x8ab7ff),
        max: am5.color(0x25529a),
        key: "fill"
      }
    ]);

    // Heat legend
    const heatLegend = chart.children.push(
        am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0x8ab7ff),
        endColor: am5.color(0x25529a),
        startText: "Lowest",
        endText: "Highest",
        stepCount: 5,
        startOpacity: 1,
        endOpacity: 1
      })
    );

    heatLegend.startLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get("startColor")
    });

    heatLegend.endLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get("endColor")
    });

    polygonSeries.mapPolygons.template.events.on("pointerover", (ev) => {
        const value = (ev.target.dataItem?.dataContext as any)?.value;

        if (typeof value === "number") {
            heatLegend.showValue(value);
        }
        });


    polygonSeries.data.setAll(mapData);

    polygonSeries.events.on("datavalidated", () => {
      heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
      heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
    });

    // Cleanup
    return () => {
      root.dispose();
    };
  }, []);

  return (
      <Stack direction="column" sx={{marginTop: 3}}>
          {
              mapHeader ?
              <h1 className="small-header">{mapHeader}</h1> :
              <div></div>
          }
          {
              mapSubheader ?
              <h2>{mapSubheader}</h2> :
              <div></div>
          }
          <div
            ref={chartRef}
            style={{ width: "100%", height: "500px" }}
          />
      </Stack>
  );
}

export default MapChart;
