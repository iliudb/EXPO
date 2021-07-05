var express = require('express');
var router = express.Router();
const fs = require('fs');
const https = require('https')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/setdefault', function(req, res, next) {
    try {
        var data = {
            "setcall": req.body.obj,
        };
        var jsonstringify = JSON.stringify(data);
        fs.writeFile("./json/setcall.json", jsonstringify, function(err, result) {

            if (err) {
                console.log('error', err)
            } else {
                res.send('done')
            }
        })
    } catch (err) {
        console.log(err);
    }
})

router.get('/getdefault', function(req, res, next) {
    try {
        fs.readFile("./json/setcall.json", 'utf8', function(err, result) {
            if (err) {
                console.log('error', err)
            } else {
                res.send(JSON.parse(result))
            }
        })
    } catch (err) {
        console.log(err);
    }
})

router.get('/default', function(req, res, next) {
    try {
        var data = {
            "call": "default",
            "webname": "ONESLOT.BET",
            "maincolor": "#673ab7",
            "fontXL": 40,
            "fontL": 30,
            "fontM": 20,
            "fontS": 15,
            "background": "#e8eaf6",
            "color": "black",
            "appbar": [
                { "bg01": "transparent", "bg02": "transparent", "degree": "90deg", "color": "#673ab7" },
                { "bg01": "transparent", "bg02": "transparent", "degree": "90deg", "color": "#e8eaf6" },
                { "bg01": "#673ab7", "bg02": "#673ab7", "degree": "90deg", "color": "#e8eaf6" }
            ],
            "btn0": [
                { "bg01": "#673ab7", "bg02": "#673ab7", "degree": "90deg", "color": "#e8eaf6" },
                { "bg01": "#ede7f6", "bg02": "#ede7f6", "degree": "90deg", "color": "#673ab7" }
            ],
            "err": [
                { "bg01": "red", "bg02": "red", "degree": "90deg", "color": "white" },
            ],
            "promotion": [
                { "proname": "proname", "img": "https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
                { "proname": "proname", "img": "https://images.unsplash.com/photo-1602131010835-412c62f26aaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" },
                { "proname": "proname", "img": "https://images.unsplash.com/photo-1614102073832-030967418971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
                { "proname": "proname", "img": "https://warpufa.bet/_nuxt/img/pcbg3.79c81a1.webp" },
                { "proname": "proname", "img": "https://www.ufa-online.bet/_nuxt/img/pcbg2.fb0df7e.webp" }
            ],
            "mbpromotion": [
                { "proname": "proname", "img": "https://warpufa.bet/_nuxt/img/mbbg3.ba23164.webp" },
                { "proname": "proname", "img": "https://www.ufa-online.bet/_nuxt/img/mbbg2.c3b3c4b.webp" }
            ]
        };
        var jsonstringify = JSON.stringify(data);
        fs.writeFile("./json/default.json", jsonstringify, function(err, result) {

            if (err) {
                console.log('error', err)
            } else {
                res.send('done')
            }
        })
    } catch (err) {
        console.log(err);
    }
});

router.post('/loadpage', function(req, res, next) {
    // console.log(req.body.obj);
    try {
        fs.readFile("./json/" + req.body.obj + ".json", 'utf8', function(err, result) {
            if (err) {
                console.log('error', err)
            } else {
                res.send(JSON.parse(result))
            }
        })
    } catch (err) {
        console.log(err);
    }
});

router.post('/updatejson', function(req, res, next) {
    // console.log(req);
    try {
        var jsonstringify = JSON.stringify(req.body);
        fs.writeFile("./json/" + req.body.call + ".json", jsonstringify, function(err, result) {
            if (err) {
                console.log('error', err)
            } else {
                res.send('done')
            }
        })
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;