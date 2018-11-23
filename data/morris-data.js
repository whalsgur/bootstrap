$(function() {

    // Morris.Area({
    //     element: 'morris-area-chart',
    //     data: [{
    //         period: '2010 Q1',
    //         iphone: 2666,
    //         ipad: null,
    //         itouch: 2647
    //     }, {
    //         period: '2010 Q2',
    //         iphone: 2778,
    //         ipad: 2294,
    //         itouch: 2441
    //     }, {
    //         period: '2010 Q3',
    //         iphone: 4912,
    //         ipad: 1969,
    //         itouch: 2501
    //     }, {
    //         period: '2010 Q4',
    //         iphone: 3767,
    //         ipad: 3597,
    //         itouch: 5689
    //     }, {
    //         period: '2011 Q1',
    //         iphone: 6810,
    //         ipad: 1914,
    //         itouch: 2293
    //     }, {
    //         period: '2011 Q2',
    //         iphone: 5670,
    //         ipad: 4293,
    //         itouch: 1881
    //     }, {
    //         period: '2011 Q3',
    //         iphone: 4820,
    //         ipad: 3795,
    //         itouch: 1588
    //     }, {
    //         period: '2011 Q4',
    //         iphone: 15073,
    //         ipad: 5967,
    //         itouch: 5175
    //     }, {
    //         period: '2012 Q1',
    //         iphone: 10687,
    //         ipad: 4460,
    //         itouch: 2028
    //     }, {
    //         period: '2012 Q2',
    //         iphone: 8432,
    //         ipad: 5713,
    //         itouch: 1791
    //     }],
    //     xkey: 'period',
    //     ykeys: ['iphone', 'ipad', 'itouch'],
    //     labels: ['iPhone', 'iPad', 'iPod Touch'],
    //     pointSize: 2,
    //     hideHover: 'auto',
    //     resize: true
    // });

    // Morris.Donut({
    //     element: 'morris-donut-chart',
    //     data: [{
    //         label: "Download Sales",
    //         value: 23
    //     }, {
    //         label: "In-Store Sales",
    //         value: 24
    //     }, {
    //         label: "abcde",
    //         value: 25
    //     }, {
    //         label: "Mail-Order Sales",
    //         value: 26
    //     }],
    //     resize: true
    // });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2012',
            a: 0,
            b: 5,
            c: 10
        }, {
            y: '2013',
            a: 15,
            b: 20,
            c: 25
        }, {
            y: '2014',
            a: 30,
            b: 35,
            c: 40
        }, {
            y: '2015',
            a: 45,
            b: 50,
            c: 55
        }, {
            y: '2016',
            a: 60,
            b: 65,
            c: 70
        }, {
            y: '2017',
            a: 75,
            b: 80,
            c: 85
        }, {
            y: '2018',
            a: 90,
            b: 95,
            c: 100
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Series A', 'Series B', 'Series C'],
        hideHover: 'auto',
        resize: true
    });
    
});
