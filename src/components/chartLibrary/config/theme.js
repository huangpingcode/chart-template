
const gridPadding = 18
export default {
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    // backgroundColor: 'rgba(0,0,0,0)',
    // textStyle: {
    //     align: 'left',
    //     color: '#ffaacc',
    //     lineHeight: 60
    // },
    grid: {
        left: gridPadding,
        right: gridPadding,
        top: gridPadding + 20,
        bottom: gridPadding,
        containLabel: true
    },
    title: {
        textStyle: {
            color: '#464646'
        },
        subtextStyle: {
            color: '#6e7079'
        }
    },
    legend: {
        top: 0,
        textStyle: {
            color: '#333333',

            lineHeight: 160
        }
    },
    tooltip: {
        // extraCssText: 'text-align: left;',
        axisPointer: {
            // type: 'cross',
            lineStyle: {
                color: '#cccccc',
                width: 1
            },
            crossStyle: {
                color: '#cccccc',
                width: 1
            }
        }
        // alwaysShowContent: true  // 总是显示坐标
    },
    categoryAxis: { // 类目坐标轴默认样式，一般为x轴
        axisLine: { // 坐标轴线样式
            show: true,
            lineStyle: {
                color: '#6E7079'
            }
        },
        axisTick: { // 刻度
            show: false
            // lineStyle: {
            //     color: '#ffaacc'
            // }
        },
        axisLabel: { // 刻度标签
            show: true,
            textStyle: {
                color: '#6e7079'
            }
        },
        splitLine: { // 分割线
            show: false // 默认数值轴显示，类目轴不显示
            // lineStyle: {
            //     color: [
            //         '#E0E6F1'
            //     ]
            // }
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: [
                    'rgba(250,250,250,0.2)',
                    'rgba(210,219,238,0.2)'
                ]
            }
        }
    },
    valueAxis: { // 类目坐标轴默认样式，一般为y轴
        axisLine: {
            show: false,
            lineStyle: {
                color: '#6E7079'
            }
        },
        axisTick: {
            show: false
            // lineStyle: {
            //     color: '#6E7079'
            // }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6E7079'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: [
                    '#e0e6f1'
                ]
            }
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: [
                    'rgba(250,250,250,0.2)',
                    'rgba(210,219,238,0.2)'
                ]
            }
        }
    },
    line: {
        itemStyle: {
            borderWidth: 1
        },
        lineStyle: {
            width: '1'
        },
        symbolSize: 4,
        symbol: 'circle',
        smooth: false
    },

    bar: {
        itemStyle: {
            barBorderWidth: 0,
            barBorderColor: '#cccccc'
        }
    },
    pie: {
        itemStyle: {
            borderWidth: 0,
            borderColor: '#cccccc'
        }
    },
    radar: {
        itemStyle: {
            borderWidth: 1
        },
        lineStyle: {
            width: '2'
        },
        symbolSize: 4,
        symbol: 'circle',
        smooth: false
    }
    // scatter: {
    //     itemStyle: {
    //         borderWidth: 0,
    //         borderColor: '#cccccc'
    //     }
    // },
    // boxplot: {
    //     itemStyle: {
    //         borderWidth: 0,
    //         borderColor: '#cccccc'
    //     }
    // },
    // parallel: {
    //     itemStyle: {
    //         borderWidth: 0,
    //         borderColor: '#cccccc'
    //     }
    // },
    // sankey: {
    //     itemStyle: {
    //         borderWidth: 0,
    //         borderColor: '#cccccc'
    //     }
    // },
    // funnel: {
    //     itemStyle: {
    //         borderWidth: 0,
    //         borderColor: '#cccccc'
    //     }
    // },
    // gauge: {
    //     itemStyle: {
    //         borderWidth: 0,
    //         borderColor: '#cccccc'
    //     }
    // },
    // candlestick: {
    //     itemStyle: {
    //         color: '#eb5454',
    //         color0: '#47b262',
    //         borderColor: '#eb5454',
    //         borderColor0: '#47b262',
    //         borderWidth: 1
    //     }
    // },
    // graph: {
    //     itemStyle: {
    //         borderWidth: 0,
    //         borderColor: '#cccccc'
    //     },
    //     lineStyle: {
    //         width: 1,
    //         color: '#aaaaaa'
    //     },
    //     symbolSize: 4,
    //     symbol: 'circle',
    //     smooth: false,
    //     color: [
    //         '#5470c6',
    //         '#91cc75',
    //         '#fac858',
    //         '#ee6666',
    //         '#73c0de',
    //         '#3ba272',
    //         '#fc8452',
    //         '#9a60b4',
    //         '#ea7ccc'
    //     ],
    //     label: {
    //         color: '#eeeeee'
    //     }
    // },
    // map: {
    //     itemStyle: {
    //         normal: {
    //             areaColor: '#eee',
    //             borderColor: '#444',
    //             borderWidth: 0.5
    //         },
    //         emphasis: {
    //             areaColor: 'rgba(255,215,0,0.8)',
    //             borderColor: '#444',
    //             borderWidth: 1
    //         }
    //     },
    //     label: {
    //         normal: {
    //             textStyle: {
    //                 color: '#000'
    //             }
    //         },
    //         emphasis: {
    //             textStyle: {
    //                 color: 'rgb(100,0,0)'
    //             }
    //         }
    //     }
    // },
    // geo: {
    //     itemStyle: {
    //         normal: {
    //             areaColor: '#eee',
    //             borderColor: '#444',
    //             borderWidth: 0.5
    //         },
    //         emphasis: {
    //             areaColor: 'rgba(255,215,0,0.8)',
    //             borderColor: '#444',
    //             borderWidth: 1
    //         }
    //     },
    //     label: {
    //         normal: {
    //             textStyle: {
    //                 color: '#000'
    //             }
    //         },
    //         emphasis: {
    //             textStyle: {
    //                 color: 'rgb(100,0,0)'
    //             }
    //         }
    //     }
    // }

    // logAxis: {
    //     axisLine: {
    //         show: false,
    //         lineStyle: {
    //             color: '#6E7079'
    //         }
    //     },
    //     axisTick: {
    //         show: false,
    //         lineStyle: {
    //             color: '#6E7079'
    //         }
    //     },
    //     axisLabel: {
    //         show: true,
    //         textStyle: {
    //             color: '#6E7079'
    //         }
    //     },
    //     splitLine: {
    //         show: true,
    //         lineStyle: {
    //             color: [
    //                 '#E0E6F1'
    //             ]
    //         }
    //     },
    //     splitArea: {
    //         show: false,
    //         areaStyle: {
    //             color: [
    //                 'rgba(250,250,250,0.2)',
    //                 'rgba(210,219,238,0.2)'
    //             ]
    //         }
    //     }
    // },
    // timeAxis: {
    //     axisLine: {
    //         show: true,
    //         lineStyle: {
    //             color: '#6E7079'
    //         }
    //     },
    //     axisTick: {
    //         show: true,
    //         lineStyle: {
    //             color: '#6E7079'
    //         }
    //     },
    //     axisLabel: {
    //         show: true,
    //         textStyle: {
    //             color: '#6E7079'
    //         }
    //     },
    //     splitLine: {
    //         show: false,
    //         lineStyle: {
    //             color: [
    //                 '#E0E6F1'
    //             ]
    //         }
    //     },
    //     splitArea: {
    //         show: false,
    //         areaStyle: {
    //             color: [
    //                 'rgba(250,250,250,0.2)',
    //                 'rgba(210,219,238,0.2)'
    //             ]
    //         }
    //     }
    // },
    // toolbox: {
    //     iconStyle: {
    //         normal: {
    //             borderColor: '#999999'
    //         },
    //         emphasis: {
    //             borderColor: '#666666'
    //         }
    //     }
    // },

    // timeline: {
    //     lineStyle: {
    //         color: '#dae1f5',
    //         width: 2
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: '#a4b1d7',
    //             borderWidth: 1
    //         },
    //         emphasis: {
    //             color: '#ffffff'
    //         }
    //     },
    //     controlStyle: {
    //         normal: {
    //             color: '#a4b1d7',
    //             borderColor: '#a4b1d7',
    //             borderWidth: 1
    //         },
    //         emphasis: {
    //             color: '#a4b1d7',
    //             borderColor: '#a4b1d7',
    //             borderWidth: 1
    //         }
    //     },
    //     checkpointStyle: {
    //         color: '#316bf3',
    //         borderColor: '#ffffff'
    //     },
    //     label: {
    //         normal: {
    //             textStyle: {
    //                 color: '#a4b1d7'
    //             }
    //         },
    //         emphasis: {
    //             textStyle: {
    //                 color: '#a4b1d7'
    //             }
    //         }
    //     }
    // },
    // visualMap: {
    //     color: [
    //         '#bf444c',
    //         '#d88273',
    //         '#f6efa6'
    //     ]
    // },
    // dataZoom: {
    //     handleSize: 'undefined%',
    //     textStyle: {}
    // },
    // markPoint: {
    //     label: {
    //         color: '#eeeeee'
    //     },
    //     emphasis: {
    //         label: {
    //             color: '#eeeeee'
    //         }
    //     }
    // }
}
