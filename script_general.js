(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['MainViewer'];
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['MainViewer']);
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                            if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                p += 0x1;
                            return p;
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"scrollBarOpacity":0.5,"contentOpaque":false,"id":"rootPlayer","width":"100%","paddingTop":0,"start":"this.init()","mouseWheelEnabled":true,"layout":"absolute","borderSize":0,"paddingBottom":0,"defaultVRPointer":"laser","scrollBarMargin":2,"propagateClick":false,"paddingLeft":0,"toolTipHorizontalAlign":"center","overflow":"hidden","mobileMipmappingEnabled":false,"scripts":{"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"openLink":TDV.Tour.Script.openLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"initQuiz":TDV.Tour.Script.initQuiz,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initGA":TDV.Tour.Script.initGA,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"unregisterKey":TDV.Tour.Script.unregisterKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"init":TDV.Tour.Script.init,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setLocale":TDV.Tour.Script.setLocale,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setValue":TDV.Tour.Script.setValue,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"mixObject":TDV.Tour.Script.mixObject,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"translate":TDV.Tour.Script.translate,"showWindow":TDV.Tour.Script.showWindow,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizStart":TDV.Tour.Script.quizStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizFinish":TDV.Tour.Script.quizFinish,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay},"children":["this.MainViewer"],"class":"Player","minHeight":20,"verticalAlign":"top","minWidth":20,"mediaActivationMode":"window","downloadEnabled":false,"vrPolyfillScale":0.75,"shadow":false,"borderRadius":0,"scrollBarVisible":"rollOver","height":"100%","definitions": [{"subtitlesPaddingLeft":5,"subtitlesVerticalAlign":"bottom","playbackBarBorderSize":0,"id":"MainViewer","subtitlesTextShadowHorizontalLength":1,"subtitlesTop":0,"progressBackgroundColorRatios":[0],"paddingTop":0,"toolTipBorderRadius":3,"width":"100%","playbackBarBackgroundOpacity":1,"borderSize":0,"paddingBottom":0,"subtitlesTextShadowOpacity":1,"progressOpacity":1,"subtitlesPaddingBottom":5,"progressRight":0,"paddingLeft":0,"progressBarBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","subtitlesBorderSize":0,"toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"toolTipPaddingRight":6,"progressBarBackgroundColorRatios":[0],"class":"ViewerArea","progressBarBorderColor":"#000000","toolTipFontFamily":"Arial","toolTipBorderSize":1,"transitionMode":"blending","playbackBarLeft":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"progressBackgroundOpacity":1,"transitionDuration":500,"shadow":false,"toolTipBorderColor":"#767676","height":"100%","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","borderRadius":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowOpacity":0,"playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"progressBarOpacity":1,"playbackBarHeadOpacity":1,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"displayTooltipInTouchScreens":true,"subtitlesTextDecoration":"none","toolTipTextShadowBlurRadius":3,"subtitlesBackgroundOpacity":0.2,"progressHeight":10,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowBlurRadius":0,"playbackBarOpacity":1,"toolTipFontWeight":"normal","subtitlesBorderColor":"#FFFFFF","toolTipShadowSpread":0,"playbackBarBottom":5,"progressBorderSize":0,"progressBarBorderSize":0,"toolTipShadowColor":"#333333","toolTipFontColor":"#606060","progressBarBorderRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","paddingRight":0,"toolTipPaddingBottom":4,"subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"subtitlesTextShadowVerticalLength":1,"toolTipDisplayTime":600,"subtitlesPaddingTop":5,"playbackBarHeight":10,"toolTipBackgroundColor":"#F6F6F6","progressBorderRadius":0,"toolTipShadowVerticalLength":0,"progressLeft":0,"subtitlesShadow":false,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"propagateClick":false,"playbackBarBackgroundColorDirection":"vertical","vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","toolTipOpacity":1,"toolTipShadowHorizontalLength":0,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"minHeight":50,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"minWidth":100,"playbackBarHeadShadowOpacity":0.7,"subtitlesOpacity":1,"toolTipPaddingLeft":6,"subtitlesGap":0,"toolTipShadowBlurRadius":3,"firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadBorderRadius":0,"toolTipFontStyle":"normal","playbackBarProgressOpacity":1,"doubleClickAction":"toggle_fullscreen","subtitlesHorizontalAlign":"center","subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF"},{"titlePaddingRight":5,"bodyBackgroundColorDirection":"vertical","closeButtonPressedBorderColor":"#000000","id":"window_43FDA763_58ED_3735_41D3_035B089F3D8B","veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"width":900,"paddingTop":0,"titlePaddingBottom":5,"veilOpacity":0.4,"footerBackgroundColorRatios":[0,0.9,1],"borderSize":0,"paddingBottom":0,"overflow":"scroll","closeButtonPressedBorderSize":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"paddingLeft":0,"toolTipHorizontalAlign":"center","class":"Window","modal":true,"headerVerticalAlign":"middle","verticalAlign":"middle","closeButtonBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"closeButtonPaddingRight":0,"backgroundColor":[],"veilColorDirection":"horizontal","shadow":false,"headerBackgroundColorDirection":"vertical","height":600,"closeButtonPressedIconColor":"#FFFFFF","scrollBarVisible":"rollOver","bodyBackgroundColorRatios":[0,0.5,1],"borderRadius":5,"closeButtonRollOverIconColor":"#FFFFFF","scrollBarWidth":10,"closeButtonIconColor":"#000000","gap":10,"titleFontSize":"1.29vmin","scrollBarOpacity":0.5,"horizontalAlign":"center","closeButtonBorderRadius":11,"closeButtonRollOverBackgroundOpacity":0,"scrollBarColor":"#000000","closeButtonBorderColor":"#000000","bodyPaddingRight":5,"paddingRight":0,"headerPaddingRight":10,"headerPaddingLeft":10,"closeButtonRollOverBorderColor":"#000000","contentOpaque":false,"titleFontColor":"#000000","closeButtonRollOverIconLineWidth":2,"children":["this.WebFrame_46389410_58E7_6913_41D5_78CC4F69E882","this.htmlText_41F2520B_589B_28F5_41B8_0E1CB365C0EB"],"backgroundOpacity":1,"layout":"horizontal","bodyPaddingTop":5,"bodyPaddingLeft":5,"scrollBarMargin":2,"closeButtonPressedBackgroundOpacity":0,"propagateClick":false,"bodyPaddingBottom":5,"closeButtonPaddingBottom":0,"closeButtonBackgroundColor":[],"closeButtonPressedBackgroundColor":["#3A1D1F"],"closeButtonRollOverBorderSize":0,"titlePaddingTop":5,"backgroundColorRatios":[],"closeButtonBorderSize":0,"minHeight":20,"footerHeight":5,"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"minWidth":20,"closeButtonPaddingLeft":0,"closeButtonIconWidth":12,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"titleFontFamily":"Arial","closeButtonIconHeight":12,"closeButtonPressedIconLineWidth":2,"backgroundColorDirection":"vertical","headerBackgroundColorRatios":[0,0.1,1],"closeButtonPressedBackgroundColorRatios":[0],"closeButtonRollOverBackgroundColor":["#C13535"],"veilColor":["#000000","#000000"],"footerBackgroundColorDirection":"vertical","veilColorRatios":[0,1],"closeButtonIconLineWidth":2,"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"data":{"name":"Window17071"},"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"headerPaddingTop":10,"closeButtonPaddingTop":0,"headerPaddingBottom":10,"closeButtonRollOverBackgroundColorRatios":[0],"titlePaddingLeft":5},{"hfov":360,"adjacentPanoramas":[{"distance":1,"yaw":-16.45,"backwardYaw":-104.27,"panorama":"this.panorama_54821D45_589B_FB7D_41C9_F9551A3E0301","class":"AdjacentPanorama"}],"label":trans('panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005.label'),"hfovMax":130,"id":"panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005","data":{"label":"stitched"},"frames":[{"cube":{"levels":[{"url":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_0/{face}/0/{row}_{column}.jpg","rowCount":9,"tags":"ondemand","width":27648,"height":4608,"colCount":54,"class":"TiledImageResourceLevel"},{"url":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_0/{face}/1/{row}_{column}.jpg","rowCount":5,"tags":"ondemand","width":15360,"height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"url":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_0/{face}/2/{row}_{column}.jpg","rowCount":3,"tags":"ondemand","width":9216,"height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"url":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_0/{face}/3/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","width":6144,"height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"url":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_0/{face}/4/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"width":3072,"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"url":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_0/{face}/vr/0.jpg","rowCount":1,"tags":"mobilevr","width":9216,"height":1536,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_t.jpg","class":"CubicPanoramaFrame"}],"class":"Panorama","thumbnailUrl":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_t.jpg","overlays":["this.overlay_4AEB8022_58AD_2934_41CA_F51660035ED3","this.overlay_4B2455AF_58A5_2B0D_41C9_A569B74D1320"],"pitch":9.55,"partial":false,"vfov":160.9},{"initialPosition":{"yaw":-16.32,"pitch":-4.51,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"initialSequence":"this.sequence_5DD417F0_576B_1713_4180_6A51F71D699A","id":"panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_camera","class":"PanoramaCamera"},{"initialPosition":{"yaw":-105.51,"pitch":-15.83,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"initialSequence":"this.sequence_5362EAED_589B_190C_41BF_20FEC433509C","id":"panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_camera","class":"PanoramaCamera"},{"items":[{"media":"this.panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_camera","class":"PanoramaPlayListItem"},{"media":"this.panorama_54821D45_589B_FB7D_41C9_F9551A3E0301","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_camera","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"hfov":360,"adjacentPanoramas":[{"distance":1,"yaw":-104.27,"backwardYaw":-16.45,"panorama":"this.panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005","class":"AdjacentPanorama"}],"label":trans('panorama_54821D45_589B_FB7D_41C9_F9551A3E0301.label'),"hfovMax":130,"id":"panorama_54821D45_589B_FB7D_41C9_F9551A3E0301","data":{"label":"stitched"},"frames":[{"cube":{"levels":[{"url":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_0/{face}/0/{row}_{column}.jpg","rowCount":9,"tags":"ondemand","width":27648,"height":4608,"colCount":54,"class":"TiledImageResourceLevel"},{"url":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_0/{face}/1/{row}_{column}.jpg","rowCount":5,"tags":"ondemand","width":15360,"height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"url":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_0/{face}/2/{row}_{column}.jpg","rowCount":3,"tags":"ondemand","width":9216,"height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"url":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_0/{face}/3/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","width":6144,"height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"url":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_0/{face}/4/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"width":3072,"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"url":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_0/{face}/vr/0.jpg","rowCount":1,"tags":"mobilevr","width":9216,"height":1536,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_t.jpg","class":"CubicPanoramaFrame"}],"class":"Panorama","thumbnailUrl":"media/panorama_54821D45_589B_FB7D_41C9_F9551A3E0301_t.jpg","overlays":["this.overlay_4B1F5159_58AF_EB15_419C_2C4CC6AD1C74"],"pitch":7.29,"partial":false,"vfov":165.42},{"id":"WebFrame_46389410_58E7_6913_41D5_78CC4F69E882","backgroundOpacity":1,"width":"68%","paddingTop":0,"borderSize":0,"paddingBottom":0,"url":"//www.youtube.com/embed/IchjN-ng-o0?v=IchjN-ng-o0","propagateClick":false,"paddingLeft":0,"toolTipHorizontalAlign":"center","class":"WebFrame","backgroundColorRatios":[],"minHeight":0,"minWidth":0,"backgroundColor":[],"shadow":false,"borderRadius":0,"height":"100%","backgroundColorDirection":"vertical","scrollEnabled":true,"insetBorder":false,"data":{"name":"WebFrame17503"},"paddingRight":0},{"id":"htmlText_41F2520B_589B_28F5_41B8_0E1CB365C0EB","backgroundOpacity":0,"width":"31%","paddingTop":10,"borderSize":0,"paddingBottom":10,"scrollBarMargin":2,"propagateClick":false,"paddingLeft":10,"toolTipHorizontalAlign":"center","class":"HTMLText","minHeight":0,"minWidth":0,"height":"100%","shadow":false,"borderRadius":0,"scrollBarVisible":"rollOver","scrollBarWidth":10,"html":trans('htmlText_41F2520B_589B_28F5_41B8_0E1CB365C0EB.html'),"scrollBarColor":"#000000","data":{"name":"HTMLText17072"},"scrollBarOpacity":0.5,"paddingRight":10},{"rollOverDisplay":true,"items":[{"vfov":8.51,"hfov":19.93,"scaleMode":"fit_inside","data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_4B5F9A4F_58AD_F90C_41CA_A8EA4B0FDB5B","pitch":-26.8,"verticalAlign":"middle","yaw":-16.45}],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_4AEBE023_58AD_2935_41CB_7EFA820765E9"],"id":"overlay_4AEB8022_58AD_2934_41CA_F51660035ED3","data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"rollOverDisplay":true,"items":[{"hfov":60.54,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","distance":50,"image":{"levels":[{"url":"media/panorama_5CA673C7_576B_EF7C_41D0_35AC2426E005_HS_2ewd9iih.png","width":2048,"height":1490,"class":"ImageResourceLevel"}],"class":"ImageResource"},"pitch":-22.31,"roll":0,"yaw":67.49}],"maps":[],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_4B41A5C5_58A5_2B7C_41C2_9EEA2E05D6F9"],"id":"overlay_4B2455AF_58A5_2B0D_41C9_A569B74D1320","data":{"label":"Polygon"},"class":"HotspotPanoramaOverlay"},{"restartMovementOnUserInteraction":false,"id":"sequence_5DD417F0_576B_1713_4180_6A51F71D699A","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"restartMovementOnUserInteraction":false,"id":"sequence_5362EAED_589B_190C_41BF_20FEC433509C","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"rollOverDisplay":false,"items":[{"hfov":19.11,"scaleMode":"fit_inside","data":{"label":"Image"},"vfov":6.63,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","distance":50,"image":"this.res_4B5F9A4F_58AD_F90C_41CA_A8EA4B0FDB5B","pitch":-31.2,"verticalAlign":"middle","yaw":-104.27}],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_4A76A1CA_58AF_EB74_41C6_C393C736F3CF"],"id":"overlay_4B1F5159_58AF_EB15_419C_2C4CC6AD1C74","data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"res_4B5F9A4F_58AD_F90C_41CA_A8EA4B0FDB5B","levels":[{"url":"media/res_4B5F9A4F_58AD_F90C_41CA_A8EA4B0FDB5B_0.png","width":166,"height":56,"class":"ImageResourceLevel"}],"class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_4AEBE023_58AD_2935_41CB_7EFA820765E9","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea"},{"mapColor":"image","id":"HotspotPanoramaOverlayArea_4B41A5C5_58A5_2B7C_41C2_9EEA2E05D6F9","click":"this.showWindow(this.window_43FDA763_58ED_3735_41D3_035B089F3D8B, null, false)","class":"HotspotPanoramaOverlayArea"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_4A76A1CA_58AF_EB74_41C6_C393C736F3CF","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea"}],"scrollBarWidth":10,"backgroundPreloadEnabled":true,"gap":10,"data":{"name":"Player579","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"scrollBarColor":"#000000","desktopMipmappingEnabled":false,"horizontalAlign":"left","paddingRight":0};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.1.5.js.map
//Generated with v2020.2.0, Thu Jul 16 2020