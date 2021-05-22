export default {
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    // backgroundColor: 'rgba(0,0,0,0)',
    textStyle: {
        align: 'left'
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
        textStyle: {
            color: '#333333'
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
    categoryAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#6E7079'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#6E7079'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6e7079'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: [
                    '#E0E6F1'
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
    valueAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#6e7079'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#6E7079'
            }
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
