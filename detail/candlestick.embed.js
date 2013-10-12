console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "candlestick"}, "doc": null, "bounds": "auto", "id": "38ac3e11-99e4-4753-8c4b-9cc175859540", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "major_label_orientation": 0.7853981633974483, "dimension": 0}, "type": "DatetimeAxis", "id": "38ac3e11-99e4-4753-8c4b-9cc175859540"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d3170a30-6474-4646-92a7-02cb7c4741c3"}, "columns": ["y0", "y1"]}, {"ref": {"type": "ColumnDataSource", "id": "08e3729a-7d00-44a9-bf94-422e5c6e80c2"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "de0b230a-38ee-417a-8772-03a6f79ab8dd"}, "columns": ["y"]}], "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f", "doc": null}, "type": "DataRange1d", "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f"}, {"attributes": {"plot": {"type": "Plot", "id": "candlestick"}, "location": "min", "bounds": "auto", "doc": null, "id": "37d0ef31-f016-4649-826b-b5a6b3d8f566", "dimension": 1}, "type": "LinearAxis", "id": "37d0ef31-f016-4649-826b-b5a6b3d8f566"}, {"attributes": {"column_names": ["height", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [90.215, 92.59, 95.435, 94.685, 97.655, 100.28, 97.81, 94.965, 97.31, 99.75, 103.03, 109.34, 103.965, 106.19, 106.125, 88.03, 75.06, 78.53, 78.78, 69.06, 68.625, 73.155, 70.465, 70.375, 70.685], "x": [951868800000, 951955200000, 952041600000, 952473600000, 952560000000, 952646400000, 952905600000, 953078400000, 953251200000, 953596800000, 953683200000, 953769600000, 954201600000, 954288000000, 954460800000, 955065600000, 955929600000, 956016000000, 956188800000, 956620800000, 956793600000, 957139200000, 957312000000, 957398400000, 957484800000], "height": [1.1899999999999977, 1.5600000000000023, 1.3700000000000045, 1.75, 4.689999999999998, 1.4399999999999977, 0.37999999999999545, 0.8100000000000023, 4.1200000000000045, 6.0, 0.4399999999999977, 5.060000000000002, 0.6899999999999977, 2.0, 0.25, 2.0600000000000023, 1.6200000000000045, 4.060000000000002, 0.3199999999999932, 0.6200000000000045, 2.3700000000000045, 0.5699999999999932, 0.18999999999999773, 0.12999999999999545, 0.8700000000000045]}, "id": "08e3729a-7d00-44a9-bf94-422e5c6e80c2"}, "type": "ColumnDataSource", "id": "08e3729a-7d00-44a9-bf94-422e5c6e80c2"}, {"attributes": {"column_names": ["height", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [93.31, 94.495, 96.87, 95.655, 98.06, 112.155, 105.91499999999999, 104.78, 92.655, 90.06, 87.31, 86.935, 87.34, 84.495, 80.745, 80.06, 76.62, 80.065, 66.935, 69.0, 70.25, 71.34, 70.375, 69.0, 66.97], "x": [952300800000, 952387200000, 952992000000, 953164800000, 953510400000, 953856000000, 954115200000, 954374400000, 954720000000, 954806400000, 954892800000, 954979200000, 955324800000, 955411200000, 955497600000, 955584000000, 955670400000, 956102400000, 956534400000, 956707200000, 956880000000, 957225600000, 957744000000, 957830400000, 957916800000], "height": [5.3799999999999955, 3.25, 3.5, 0.5699999999999932, 1.3799999999999955, 0.9300000000000068, 3.7099999999999937, 2.819999999999993, 3.569999999999993, 3.0, 1.8799999999999955, 1.8700000000000045, 2.5600000000000023, 1.25, 2.75, 1.6200000000000045, 5.0, 2.75, 0.6299999999999955, 2.0, 1.0, 2.9399999999999977, 1.1299999999999955, 2.3799999999999955, 1.5600000000000023]}, "id": "de0b230a-38ee-417a-8772-03a6f79ab8dd"}, "type": "ColumnDataSource", "id": "de0b230a-38ee-417a-8772-03a6f79ab8dd"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1"}, {"type": "DataRange1d", "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f"}], "dimensions": ["width", "height"], "id": "2fd514d7-01d3-4347-899e-e4719f296cd2"}, "type": "ZoomTool", "id": "2fd514d7-01d3-4347-899e-e4719f296cd2"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1"}, "axes": [], "title": "MSFT Candlestick", "y_range": {"type": "DataRange1d", "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f"}, "outer_width": 1000, "renderers": [{"type": "DatetimeAxis", "id": "38ac3e11-99e4-4753-8c4b-9cc175859540"}, {"type": "LinearAxis", "id": "37d0ef31-f016-4649-826b-b5a6b3d8f566"}, {"type": "Grid", "id": "def340cc-980a-4fb6-9b1d-5648e804bb8a"}, {"type": "Grid", "id": "551fa24c-fc57-423b-8991-d90da3f338f8"}, {"type": "GlyphRenderer", "id": "79d124fb-4a38-4609-88a2-4387ae690533"}, {"type": "GlyphRenderer", "id": "dc014451-2d09-42ed-9b1a-8de8e3c991e1"}, {"type": "GlyphRenderer", "id": "6fee4d07-f158-4e81-a373-c912f7aa8a37"}], "outer_height": 600, "width": 1000, "doc": null, "canvas_height": 600, "id": "candlestick", "tools": [{"type": "PanTool", "id": "01dca6f5-d43e-487a-a87a-0d7be9ba96a1"}, {"type": "ZoomTool", "id": "2fd514d7-01d3-4347-899e-e4719f296cd2"}, {"type": "ResizeTool", "id": "9654b00b-6f76-47b3-a779-e7efaf8ee2be"}], "canvas_width": 1000}, "type": "Plot", "id": "candlestick"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "de0b230a-38ee-417a-8772-03a6f79ab8dd"}, "doc": null, "id": "6fee4d07-f158-4e81-a373-c912f7aa8a37", "xdata_range": {"type": "DataRange1d", "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1"}, "ydata_range": {"type": "DataRange1d", "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f"}, "glyphspec": {"line_color": {"value": "#000000"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "#F2583E"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "value": 60479999.999999993}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "rect"}, "nonselection_glyphspec": {"line_color": {"value": "#000000"}, "angle_units": "deg", "fill_color": {"value": "#F2583E"}, "height": {"units": "data", "field": "height"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "width": {"units": "data", "value": 60479999.999999993}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "rect", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "6fee4d07-f158-4e81-a373-c912f7aa8a37"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d3170a30-6474-4646-92a7-02cb7c4741c3"}, "columns": ["x0", "x1"]}, {"ref": {"type": "ColumnDataSource", "id": "08e3729a-7d00-44a9-bf94-422e5c6e80c2"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "de0b230a-38ee-417a-8772-03a6f79ab8dd"}, "columns": ["x"]}], "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1", "doc": null}, "type": "DataRange1d", "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1"}, {"attributes": {"plot": {"type": "Plot", "id": "candlestick"}, "id": "9654b00b-6f76-47b3-a779-e7efaf8ee2be", "doc": null}, "type": "ResizeTool", "id": "9654b00b-6f76-47b3-a779-e7efaf8ee2be"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "candlestick"}], "id": "57fed07b-12b9-427d-9e41-75c370a6bf59"}, "type": "PlotContext", "id": "57fed07b-12b9-427d-9e41-75c370a6bf59"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d3170a30-6474-4646-92a7-02cb7c4741c3"}, "doc": null, "id": "79d124fb-4a38-4609-88a2-4387ae690533", "xdata_range": {"type": "DataRange1d", "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1"}, "ydata_range": {"type": "DataRange1d", "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f"}, "glyphspec": {"line_color": {"value": "#000000"}, "fill_color": "#000000", "width": 1000, "type": "segment", "x_axis_type": "datetime", "y1": {"units": "data", "field": "y1"}, "y0": {"units": "data", "field": "y0"}, "x0": {"units": "data", "field": "x0"}, "x1": {"units": "data", "field": "x1"}, "tools": "pan,zoom,resize", "name": "candlestick"}, "nonselection_glyphspec": {"line_color": {"value": "#000000"}, "line_width": 1, "angle_units": "deg", "type": "segment", "y1": {"units": "data", "field": "y1"}, "line_alpha": 0.1, "valign": null, "start_angle_units": "deg", "margin": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "y0": {"units": "data", "field": "y0"}, "x0": {"units": "data", "field": "x0"}, "x1": {"units": "data", "field": "x1"}, "line_join": "miter", "halign": null}}, "type": "GlyphRenderer", "id": "79d124fb-4a38-4609-88a2-4387ae690533"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "08e3729a-7d00-44a9-bf94-422e5c6e80c2"}, "doc": null, "id": "dc014451-2d09-42ed-9b1a-8de8e3c991e1", "xdata_range": {"type": "DataRange1d", "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1"}, "ydata_range": {"type": "DataRange1d", "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f"}, "glyphspec": {"line_color": {"value": "#000000"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "#D5E1DD"}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "value": 60479999.999999993}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "rect"}, "nonselection_glyphspec": {"line_color": {"value": "#000000"}, "angle_units": "deg", "fill_color": {"value": "#D5E1DD"}, "height": {"units": "data", "field": "height"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "width": {"units": "data", "value": 60479999.999999993}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "rect", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "dc014451-2d09-42ed-9b1a-8de8e3c991e1"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "7e35ac23-65c9-4d37-ac1a-0e0cc59ac3a1"}, {"type": "DataRange1d", "id": "fa4bb619-7c5c-4bf1-827e-1c14939ef21f"}], "dimensions": ["width", "height"], "doc": null, "id": "01dca6f5-d43e-487a-a87a-0d7be9ba96a1"}, "type": "PanTool", "id": "01dca6f5-d43e-487a-a87a-0d7be9ba96a1"}, {"attributes": {"plot": {"type": "Plot", "id": "candlestick"}, "grid_line_alpha": 0.3, "doc": null, "grid_line_dash": [], "dimension": 1, "id": "551fa24c-fc57-423b-8991-d90da3f338f8"}, "type": "Grid", "id": "551fa24c-fc57-423b-8991-d90da3f338f8"}, {"attributes": {"column_names": ["x0", "x1", "y0", "y1"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y1": [88.94, 91.12, 93.87, 90.12, 91.94, 91.0, 95.0, 99.5, 97.5, 95.12, 93.69, 93.25, 94.5, 96.5, 96.5, 101.12, 106.62, 109.56, 103.94, 102.37, 105.12, 102.5, 104.12, 90.0, 84.94, 85.87, 85.27, 85.0, 86.0, 83.5, 78.75, 79.0, 73.25, 73.0, 75.87, 78.12, 77.5, 65.0, 67.62, 67.37, 67.37, 68.25, 71.69, 69.5, 68.81, 69.31, 69.87, 69.69, 67.5, 65.75], "y0": [94.09, 95.37, 98.87, 97.37, 97.5, 96.19, 100.0, 102.5, 100.25, 99.25, 96.62, 96.69, 99.5, 99.75, 103.12, 105.62, 112.87, 115.0, 108.25, 107.44, 108.94, 108.62, 108.25, 96.5, 92.0, 88.5, 88.0, 89.37, 88.62, 86.06, 82.25, 82.25, 79.5, 76.0, 81.94, 81.5, 79.87, 68.0, 69.5, 71.12, 69.94, 71.0, 74.0, 73.5, 70.81, 71.25, 71.81, 71.37, 70.44, 67.87], "x0": [951868800000, 951955200000, 952041600000, 952300800000, 952387200000, 952473600000, 952560000000, 952646400000, 952905600000, 952992000000, 953078400000, 953164800000, 953251200000, 953510400000, 953596800000, 953683200000, 953769600000, 953856000000, 954115200000, 954201600000, 954288000000, 954374400000, 954460800000, 954720000000, 954806400000, 954892800000, 954979200000, 955065600000, 955324800000, 955411200000, 955497600000, 955584000000, 955670400000, 955929600000, 956016000000, 956102400000, 956188800000, 956534400000, 956620800000, 956707200000, 956793600000, 956880000000, 957139200000, 957225600000, 957312000000, 957398400000, 957484800000, 957744000000, 957830400000, 957916800000], "x1": [951868800000, 951955200000, 952041600000, 952300800000, 952387200000, 952473600000, 952560000000, 952646400000, 952905600000, 952992000000, 953078400000, 953164800000, 953251200000, 953510400000, 953596800000, 953683200000, 953769600000, 953856000000, 954115200000, 954201600000, 954288000000, 954374400000, 954460800000, 954720000000, 954806400000, 954892800000, 954979200000, 955065600000, 955324800000, 955411200000, 955497600000, 955584000000, 955670400000, 955929600000, 956016000000, 956102400000, 956188800000, 956534400000, 956620800000, 956707200000, 956793600000, 956880000000, 957139200000, 957225600000, 957312000000, 957398400000, 957484800000, 957744000000, 957830400000, 957916800000]}, "id": "d3170a30-6474-4646-92a7-02cb7c4741c3"}, "type": "ColumnDataSource", "id": "d3170a30-6474-4646-92a7-02cb7c4741c3"}, {"attributes": {"plot": {"type": "Plot", "id": "candlestick"}, "grid_line_alpha": 0.3, "doc": null, "grid_line_dash": [], "dimension": 0, "id": "def340cc-980a-4fb6-9b1d-5648e804bb8a"}, "type": "Grid", "id": "def340cc-980a-4fb6-9b1d-5648e804bb8a"}];
    var modeltype = "PlotContext";
    var elementid = "9e8933c8-58e9-4d78-ae0f-1029f6e9bdd1";
    var plotID = "candlestick";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));
