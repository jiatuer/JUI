
// ($(".column_profile_cntnr"),data);
	~function func(column_profile_cntnr,data){
		_func1(column_profile_cntnr,data);
		_print(6);
		console.log("outer func end");
	}($(".column_profile_cntnr"),data);

	function _func1(column_profile_cntnr,data){
		renderProfilingChartByDateId(column_profile_cntnr,data);
		_print(3);
		console.log("inner func end");
	};

function renderProfilingChartByDateId(column_profile_cntnr,data){
		renderDataProfilingChart(column_profile_cntnr,data);
	}

	function renderDataProfilingChart(column_profile_cntnr,data){
		console.log("########################begin to render########################");
		var col_chart_template = _.template(getTmpl("column", "profiling"), {unit: data.result});
		column_profile_cntnr.empty().html(col_chart_template);
		var $cntnr = column_profile_cntnr;
		var length = $cntnr.find(".col_info_wrap").length;
		var chartCntnr = $cntnr.find(".col_info_wrap");

		
		// for(var i =0;i<length;i++){
		// 	setTimeout(function (){
		// 		renderColumnUnit($(chartCntnr.get(i)),data.result[i])
		// 		},0);
		// }

		 //  for(var i =0;i<length;i++){
			// 	renderColumnUnit($(chartCntnr.get(i)),data.result[i]);
			//   }
			// console.log("end for");
		// add to queue one by one - async

	    var i = 0;
	    function updateLater() {
	    	renderColumnUnit($(chartCntnr.get(i)),data.result[i++]);
	    	console.log("#######################render chart num:"+i)
	        if (i < length) {
	            setTimeout(updateLater, 0);
	        }

	    }
	    updateLater();

	    console.log();

			
		console.log("########################end to render########################");
	}

	function renderColumnUnit(unit_cntnr,unit){
		//common
		var col_type = unit.DATA_TYPE;
		var column_name = unit.CLMN_NAME;
		
		var null_cnt = unit.NULL_CNT;
		var nt_null_cnt = unit.NONE_NULL_CNT;
		//for numeric
		var min_value = unit.MIN_VAL;
		var max_value = unit.MAX_VAL;
		var avg_val = unit.AVG_VAL;
		var val_cnt = unit.VAL_CNT;
		var profile_cntnr = unit_cntnr.find(".profile_cntnr");
		var null_info_cntnr = unit_cntnr.find(".null_info_cntnr");
		loadColumnProfile(null_info_cntnr,column_name,nt_null_cnt,null_cnt);
		if(col_type==="Character"){
			var categories = new Array();
			var data = new Array();
			$.each(val_cnt,function(index,unit){
				categories.push(unit.VALUE);
				data.push(unit.COUNT);
			});
			loadCharacterProfile(profile_cntnr,column_name,categories,data);
		}
		if(col_type==="Numeric"){
			// loadCharacterProfile();
			loadNumericProfile(profile_cntnr,column_name,min_value,avg_val,max_value);
		}
	}

function getTmpl(type, tmplType) {
	var _name = "#tmpl_" + type;
	if(tmplType !== undefined) _name += "_" + tmplType;
	var $tmpl = $(_name.toLowerCase());
	if($tmpl.length === 0) throw "template not found: " + _name.toLowerCase();
	return $tmpl.html();
}

	    function renderTableProfileInfo(cntnr, _oid, tablename) {
        ajaxList([{
            type: $.getJSON,
            url: url_proxy,
            para: {
                url: parseCMSUrl(getCMSQueryUrl("table", "profiling"), {
                    table_id: _oid
                })
            }
        }, ], function(list) {
            if (tb_pro_nt_nullnum = list[0].result[0]) {
                var total = list[0].result[0].SMPL_VAL_CNT;
                var tb_pro_nullnum = list[0].result[0].NULL_CNT;
                var tb_pro_nt_nullnum = total - tb_pro_nullnum;
                loadTableProfile(cntnr, tablename, tb_pro_nt_nullnum, tb_pro_nullnum);
            } else {
                cntnr.html("No profiling info!");
            }
        })
    };

    function loadTableProfile(tb_profile_cntnr, tablename, tb_pro_nt_nullnum, tb_pro_nullnum) {
        tb_profile_cntnr.highcharts({
            chart: {
                type: 'column',
                inverted: 'true'
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true
            },
            title: {
                text: 'Table Profile',
                style: {
                    // color: '#FF00FF',
                    fontWeight: 'bold',
                    fontSize: '13px'
                }
            },
            xAxis: {
                categories: ['']
            },
            yAxis: {
                min: 0,
                title: {
                    text: tablename
                },
                labels: {
                    formatter: function() {
                        return 100 * this.value / $(this.axis.tickPositions).last()[0] + '%';
                    }
                },
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true               
            },
            plotOptions: {
                column: {
                    stacking: 'percent',
                    pointPadding: 0.2, //图表柱形的
                    borderWidth: 0, //图表柱形的粗细 
                    pointWidth: 15 //你想显示的宽度(number型                
                }
            },
            series: [ {
                name: 'not null',
                data: [tb_pro_nt_nullnum]
            },{
                name: 'null',
                data: [tb_pro_nullnum]
            },]
        });
    }

    function loadColumnProfile(column_profile_cntnr, columnname, col_pro_nt_nullnum, col_pro_nullnum) {
        column_profile_cntnr.highcharts({
            chart: {
                type: 'column',
                inverted: 'true'
            },
            credits: {
                enabled: false
            },
            loading: {
                labelStyle: {
                    top: '45%'
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                reversed: true
            },
            title: {
                text: "",
                style: {
                    // color: '#FF00FF',
                    fontWeight: 'bold',
                    fontSize: '13px'
                }
            },
            xAxis: {
                categories: ['']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ""
                },
                labels: {
                    formatter: function() {
                        return 100 * this.value / $(this.axis.tickPositions).last()[0] + '%';
                    }
                },
            },
            exporting: {
                enabled: false
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent',
                    pointPadding: 0.2, //图表柱形的
                    borderWidth: 0, //图表柱形的粗细 
                    pointWidth: 5 //你想显示的宽度(number型                
                }
            },
            series: [{
                name: 'not null',
                data: [col_pro_nt_nullnum]
            }, {
                name: 'null',
                data: [col_pro_nullnum]
            }]
        });
    }

    function loadCharacterProfile(profile_cntnr, columnname, categories, data) {
        profile_cntnr.highcharts({
            chart: {
                type: 'bar',
                zoomType: 'y'
            },
            credits: {
                enabled: false
            },
            title: {
                text: columnname,
                style: {
                    // color: '#FF00FF',
                    fontWeight: 'bold',
                    fontSize: '18px'
                }
            },
            xAxis: {
                categories: categories,
                labels: {
                    formatter: function() {
                        var text = this.value,
                            formatted = text.length > 25 ? text.substring(0, 25) + '...' : text;
                        return '<div class="js-ellipse" style="width:100px; overflow:hidden" title="' + text + '">' + formatted + '</div>';
                    },
                    style: {
                        width: '100px'
                    },
                    useHTML: true
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    pointWidth: 5 //number
                }
            },
            tooltip: {
                formatter: function() {
                    return this.x + ': ' + this.y;
                },
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            },
            exporting: {
                enabled: false
            },
            series: [{
                data: data
            }]
        });
    }

    function loadNumericProfile(profile_cntnr, columnname, min_value, avg_val, max_value) {
        profile_cntnr.highcharts({
            chart: {
                type: 'line',
            },
            credits: {
                enabled: false
            },
            title: {
                text: columnname,
                style: {
                    // color: '#FF00FF',
                    fontWeight: 'bold',
                    fontSize: '18px'
                }
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return this.x + ': ' + this.y;
                }
            },
            xAxis: {
                categories: ['Min', 'Median ', 'Max']
            },
            series: [{
                data: [min_value, avg_val, max_value],
                lineWidth: 0,
            }]
        });
    }    