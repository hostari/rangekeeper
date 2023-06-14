Search.setIndex({"docnames": ["README", "basic_dcf", "deterministic_scenarios", "drive_model_from_design_scenario", "flexibility_intro", "flexibility_under_uncertainty", "intro", "load_design_scenario", "market_dynamics"], "filenames": ["README.md", "basic_dcf.ipynb", "deterministic_scenarios.ipynb", "drive_model_from_design_scenario.ipynb", "flexibility_intro.ipynb", "flexibility_under_uncertainty.ipynb", "intro.md", "load_design_scenario.ipynb", "market_dynamics.ipynb"], "titles": ["Updating Documentation:", "A Basic Discounted Cash Flow Valuation", "Deterministic Scenario Analysis", "Driving a Financial Valuation from a Design Scenario", "Introduction to Modeling Flexibility", "Flexibility under Uncertainty", "Rangekeeper", "Loading a Design Scenario", "Real Estate Pricing Factor Dynamics"], "terms": {"make": [0, 2, 6, 7, 8], "sure": 0, "github": 0, "page": 0, "being": [0, 7], "built": 0, "gh": 0, "branch": 0, "from": [0, 1, 2, 4, 6, 8], "root": [0, 7], "directori": 0, "ghp": 0, "import": [0, 1, 2, 3, 4, 5, 7, 8], "instal": [0, 7], "pip": 0, "build": [0, 1, 4, 5, 7, 8], "via": [0, 1, 3, 8], "poetri": 0, "run": [0, 4, 5, 7, 8], "jupyt": [0, 2], "book": [0, 6], "walkthrough": [0, 6], "commit": [0, 3, 7], "ani": [0, 1, 3, 4, 5, 7, 8], "chang": [0, 2, 4, 8], "main": [0, 3], "while": [0, 8], "n": [0, 5, 7], "p": [0, 2], "f": 0, "_build": 0, "html": [0, 3, 7], "rangekeep": [0, 1, 2, 3, 4, 5, 8], "chapter": [1, 2, 4, 5, 6, 8], "1": [1, 2, 3, 4, 5, 7, 8], "dng18": [1, 2, 4, 5, 6, 8], "showcas": [1, 6], "structur": [1, 4, 7], "function": [1, 4, 6, 8], "dcf": [1, 2, 4, 6, 7, 8], "us": [1, 2, 3, 4, 5, 7, 8], "real": [1, 4, 5, 7], "estat": [1, 4, 7], "In": [1, 2, 3, 4, 5, 7, 8], "thi": [1, 2, 3, 4, 5, 6, 7, 8], "notebook": [1, 3, 6, 7], "core": [1, 7], "comput": [1, 5, 6, 8], "object": [1, 3, 4, 5, 8], "class": [1, 2, 4, 5], "how": [1, 2, 3, 4, 5, 7, 8], "thei": [1, 3, 4, 5, 7, 8], "ar": [1, 2, 3, 4, 5, 6, 7, 8], "compos": [1, 7], "togeth": [1, 4, 6], "model": [1, 6, 8], "outlin": [1, 8], "To": [1, 4, 5, 7, 8], "do": [1, 5, 8], "so": [1, 3, 5, 7, 8], "we": [1, 2, 3, 4, 5, 7, 8], "replic": [1, 2, 5, 8], "tabl": [1, 2, 4, 8], "which": [1, 2, 4, 7, 8], "describ": [1, 4, 5, 7, 8], "first": [1, 2, 4, 5, 7, 8], "need": [1, 4, 5, 7, 8], "neccesari": [1, 7], "librari": [1, 2, 4, 5, 6, 7, 8], "well": [1, 4, 6, 7, 8], "alia": 1, "rk": [1, 2, 3, 4, 5, 7, 8], "local": [1, 2, 4, 5], "panda": [1, 2, 4, 5, 8], "pd": [1, 2, 4, 5, 8], "analysi": [1, 4, 6, 8], "sequenc": [1, 2, 4, 5, 8], "movement": [1, 2, 4, 5, 8], "currenc": [1, 2, 4, 5], "whether": 1, "posit": [1, 8], "inflow": 1, "neg": [1, 8], "outflow": 1, "where": [1, 2, 4, 5, 7, 8], "each": [1, 2, 5, 7, 8], "associ": [1, 7], "date": [1, 2, 4, 5, 8], "quantiti": [1, 7], "also": [1, 2, 3, 5, 7, 8], "sometim": 1, "refer": [1, 7, 8], "line": [1, 2, 4, 8], "item": [1, 3, 4, 7], "wai": [1, 4, 8], "design": [1, 6], "subject": 1, "e": [1, 4, 7, 8], "g": [1, 4, 7, 8], "oper": [1, 2, 4, 5, 7, 8], "expens": [1, 2, 4, 5, 8], "incom": [1, 2, 4, 5, 8], "2": [1, 2, 4, 5, 8], "s": [1, 2, 3, 4, 5, 6, 8], "park": [1, 7], "implement": [1, 8], "flux": [1, 2, 4, 5, 8], "modul": [1, 5, 8], "seri": [1, 2, 4, 5, 6, 8], "encapsul": [1, 4, 7], "materi": [1, 7], "specifi": [1, 4, 5, 7, 8], "unit": [1, 2, 4, 5, 8], "like": [1, 2, 6, 7, 8], "energi": 1, "mass": [1, 7], "etc": [1, 7], "occur": [1, 2, 8], "note": [1, 4, 7, 8], "index": [1, 2, 4, 5], "datetimeindex": 1, "its": [1, 3, 4, 5, 7, 8], "valu": [1, 3, 4, 7, 8], "float": 1, "initi": [1, 2, 5, 8], "our": [1, 2, 4, 5, 7], "type": [1, 2, 3, 4, 5, 7, 8], "measur": [1, 2, 3, 4, 5, 7], "pint": [1, 5], "definit": [1, 4, 8], "setlocal": [1, 2, 4, 5], "lc_all": [1, 2, 4, 5], "en_au": [1, 2, 4, 5], "registri": [1, 2, 4, 5], "register_curr": [1, 2, 4, 5], "print": [1, 4, 5, 7, 8], "australian": 1, "dollar": 1, "australia": 1, "coco": 1, "keel": 1, "island": 1, "christma": 1, "heard": 1, "mcdonald": 1, "kiribati": 1, "norfolk": 1, "nauru": 1, "tuvalu": 1, "aud": 1, "next": [1, 8], "defin": [1, 4, 5], "list": [1, 4, 5, 7], "amount": [1, 8], "transact": 1, "timestamp": [1, 2, 4, 5, 8], "2020": [1, 8], "01": [1, 2, 4, 5, 8], "100": [1, 2, 3, 4, 5, 7, 8], "02": [1, 2, 4, 5, 8], "200": [1, 8], "2019": [1, 8], "300": 1, "12": [1, 2, 4, 8], "31": [1, 2, 4, 8], "data": [1, 5, 6, 7, 8], "cash_flow": 1, "name": [1, 2, 3, 4, 5, 7, 8], "can": [1, 2, 3, 4, 5, 6, 7, 8], "view": 1, "just": [1, 8], "creat": [1, 2, 4], "simpli": [1, 2, 4], "call": [1, 7], "00": [1, 2, 4, 8], "inspect": 1, "displai": [1, 3, 7], "0": [1, 2, 3, 4, 7, 8], "dtype": [1, 2, 5], "float64": [1, 2, 5], "datetime64": 1, "ns": 1, "freq": 1, "none": [1, 2, 4, 5], "It": [1, 6, 7, 8], "properti": [1, 2, 3, 4, 8], "As": [1, 2, 3, 8], "you": [1, 7, 8], "see": [1, 4, 5, 7, 8], "ha": [1, 2, 4, 7, 8], "three": [1, 2], "stamp": 1, "follow": [1, 2, 3, 5, 6, 7, 8], "tempor": 1, "order": [1, 2, 4, 5, 7, 8], "convert": [1, 7], "all": [1, 2, 3, 4, 5, 7], "inform": [1, 4, 7, 8], "method": [1, 2, 4, 5, 7, 8], "interv": 1, "time": [1, 2, 4, 7, 8], "encompass": 1, "bound": [1, 2, 4, 5, 8], "start": [1, 4, 5, 8], "end": [1, 2, 4, 5, 8], "start_dat": [1, 2, 4, 5], "2001": [1, 2, 4, 5, 8], "num_period": [1, 2, 4, 5, 8], "11": [1, 2, 4, 8], "from_num_period": [1, 2, 4, 5, 8], "period_typ": [1, 2, 4, 5, 8], "period": [1, 2, 4, 5, 8], "year": [1, 2, 4, 5, 8], "2011": [1, 4, 8], "take": [1, 4, 5, 8], "cast": 1, "over": [1, 7, 8], "accord": [1, 3], "logic": [1, 4], "There": [1, 6, 7], "two": [1, 3, 4, 5, 6, 7, 8], "form": [1, 2, 4, 5, 6, 8], "extrapol": [1, 2, 4, 5], "gener": [1, 3, 4, 5, 7, 8], "distribut": [1, 2, 4, 8], "total": [1, 7, 8], "subdivid": 1, "match": [1, 5, 8], "4": [1, 2, 4, 5, 8], "potenti": [1, 2, 4, 5, 8], "gross": [1, 2, 4, 5, 8], "abov": [1, 7, 8], "compound": [1, 2, 4, 5], "compounding_r": 1, "rate": [1, 2, 4, 5, 8], "to_index": [1, 2, 4, 5, 8], "let": [1, 2, 4, 7, 8], "now": [1, 2, 3, 4, 5, 8], "previou": [1, 3, 4, 5, 8], "construct": [1, 4, 5, 7, 8], "initial_incom": [1, 2, 4, 5], "potential_gross_incom": 1, "from_project": [1, 2, 4, 5], "proj": [1, 2, 4, 5], "2002": [1, 2, 4, 8], "102": [1, 4], "2003": [1, 2, 4, 8], "104": [1, 4], "04": [1, 2, 4, 8], "2004": [1, 2, 4, 8], "106": [1, 4], "2005": [1, 2, 4, 8], "108": [1, 4], "24": [1, 4, 8], "2006": [1, 2, 4, 8], "110": [1, 4], "41": [1, 2, 4, 8], "2007": [1, 2, 4, 8], "112": [1, 4], "62": [1, 4], "2008": [1, 2, 4, 8], "114": [1, 4], "87": [1, 2, 4, 8], "2009": [1, 2, 4, 8], "117": [1, 4], "17": [1, 4, 8], "2010": [1, 2, 4, 8], "119": [1, 4], "51": [1, 4, 8], "121": [1, 4], "90": [1, 4, 8], "similarli": [1, 2, 4, 5], "vacanc": [1, 2, 4, 5], "multipli": [1, 4, 5, 8], "vacancy_r": [1, 2, 4, 5], "05": [1, 2, 4, 5, 8], "allow": [1, 2, 4, 5], "5": [1, 4, 5, 8], "10": [1, 2, 4, 5, 6, 8], "20": [1, 4, 5, 8], "52": [1, 4, 8], "63": [1, 4, 8], "74": [1, 2, 4, 8], "86": [1, 4, 8], "98": [1, 4, 8], "6": [1, 4, 7, 8], "09": [1, 4, 8], "sign": 1, "becaus": [1, 7, 8], "an": [1, 2, 3, 4, 6, 7, 8], "collect": [1, 7], "constitu": 1, "resampl": 1, "effect": [1, 2, 4, 5, 8], "illustr": 1, "concept": [1, 2, 7], "effective_gross_incom": 1, "own": 1, "aggreg": [1, 7, 8], "sum": [1, 2, 3, 4, 5], "them": [1, 3, 4, 7], "result": [1, 4, 7, 8], "effective_gross_income_flow": 1, "95": [1, 4, 8], "96": [1, 2, 4, 8], "84": [1, 4], "81": [1, 4, 8], "83": [1, 2, 4, 8], "89": [1, 4, 8], "99": [1, 4], "109": [1, 4], "13": [1, 2, 4, 8], "111": [1, 4], "113": [1, 4], "53": [1, 4], "115": [1, 4], "80": [1, 4, 8], "back": [1, 7, 8], "With": 1, "mind": [1, 8], "complet": 1, "opex_pgi_ratio": [1, 2, 4, 5], "35": [1, 2, 4, 5, 8], "operating_expens": 1, "invert": [1, 2, 4, 5], "net_operating_incom": 1, "net": [1, 2, 4, 5, 7, 8], "70": [1, 4], "36": [1, 4, 8], "37": [1, 4, 8], "14": [1, 4, 8], "38": [1, 4, 8], "64": [1, 4, 8], "39": [1, 4, 8], "42": [1, 2, 4, 8], "40": [1, 4], "66": [1, 4, 8], "capex_pgi_ratio": [1, 2, 4, 5], "capital_expenditur": 1, "capit": [1, 2, 4, 5, 8], "expenditur": [1, 2, 4, 5, 8], "net_annual_cashflow": 1, "annual": [1, 2, 4, 5, 8], "cashflow": [1, 2, 4, 5, 6], "60": [1, 4], "61": [1, 4, 8], "67": [1, 4], "82": [1, 4], "57": [1, 2, 4, 8], "26": [1, 2, 4, 8], "68": [1, 4], "92": [1, 2, 4], "49": [1, 4, 8], "30": [1, 4, 8], "72": [1, 2, 4, 8], "71": [1, 4], "73": [1, 4, 8], "19": [1, 4, 8], "calcul": [1, 2, 3, 4, 5, 7, 8], "revers": [1, 2, 4, 5, 8], "set": [1, 2, 4, 5, 7, 8], "up": [1, 2, 4, 5, 7, 8], "10th": [1, 5], "reversion_span": [1, 4, 5], "dateoffset": 1, "9": [1, 4, 5], "exit_capr": [1, 2, 4, 5], "reversion_flow": 1, "uniform": [1, 2, 4, 5, 8], "218": [1, 2, 4], "final": 1, "net_cashflows_with_revers": 1, "trim_to_span": [1, 2, 4, 5], "end_dat": [1, 2, 4, 5], "50": [1, 2, 4, 5, 8], "06": [1, 4, 8], "54": [1, 4, 8], "55": [1, 4, 8], "56": [1, 4, 8], "43": [1, 2, 4, 8], "58": [1, 2, 4], "59": [1, 2, 4], "75": [1, 4, 5], "If": [1, 5, 8], "wish": [1, 3], "278": 1, "given": [1, 2, 8], "7": [1, 4, 8], "present": [1, 2, 4], "pv": [1, 2, 4, 8], "discount_r": [1, 2, 4, 5], "07": [1, 2, 4, 5, 8], "46": [1, 8], "44": [1, 4, 8], "48": [1, 4, 8], "78": 1, "33": [1, 8], "650": 1, "project_pv": 1, "collaps": [1, 2, 4, 5], "round": [1, 2, 4, 5], "1000": [1, 2, 4, 5], "variou": [2, 8], "vari": [2, 8], "kei": [2, 7, 8], "input": [2, 4, 5, 8], "modyf": 2, "certain": [2, 4, 8], "produc": [2, 3, 4, 5, 7], "integr": [2, 5, 8], "step": 2, "singl": [2, 4, 5, 7, 8], "accept": 2, "dictionari": 2, "easili": [2, 5], "altern": [2, 4, 5], "specif": [2, 4, 7, 8], "recreat": 2, "again": 2, "necessari": 2, "These": [2, 5, 8], "format": [2, 3, 4, 5, 7, 8], "param": [2, 4, 5], "acquisition_cost": [2, 4, 5], "growth_rat": [2, 4, 5, 8], "absorb": 2, "addit": [2, 4, 7, 8], "straight": [2, 4], "addl_pgi_init": 2, "addl_pgi_slop": 2, "Then": 2, "dict": [2, 4, 5], "def": [2, 4, 5], "__init__": [2, 4, 5], "self": [2, 4, 5], "more": [2, 3, 4, 5, 6, 7, 8], "readabl": [2, 7], "update_class": [2, 4], "decor": 2, "sequenti": [2, 3], "add": 2, "cell": [2, 8], "help": 2, "when": [2, 4], "document": [2, 5], "init_span": [2, 4, 5], "calc_span": [2, 4, 5], "acq_span": [2, 4, 5], "acquisit": [2, 4, 5], "offset_d": [2, 4, 5], "shift": [2, 4, 5, 8], "init_flow": 2, "project": [2, 4, 5, 7, 8], "base_pgi": 2, "addl_pgi": 2, "straightlin": 2, "slope": 2, "pgi": [2, 4, 5], "stream": [2, 3, 4, 5, 7, 8], "egi": [2, 4, 5], "opex": [2, 4, 5], "noi": [2, 4, 5, 8], "capex": [2, 4, 5], "net_cf": [2, 4, 5], "dropna": [2, 4, 5], "intern": [2, 4, 5], "return": [2, 4, 5, 7, 8], "irr": [2, 4], "calc_metr": [2, 4, 5], "cumulative_net_cf": [2, 4, 5], "cumul": [2, 4, 8], "loc": [2, 4, 5], "cumulative_net_cfs_with_rev": 2, "append": [2, 4, 5], "incl_acq": [2, 4, 5], "xirr": [2, 4, 5], "concat": [2, 4, 5], "000": [2, 4], "panel": 2, "b": 2, "increas": 2, "ad": [2, 3, 8], "3": [2, 4, 5, 8], "optimistic_param": 2, "copi": [2, 4, 5], "new": [2, 4, 7], "128": 2, "153": 2, "177": [2, 4], "23": [2, 4, 8], "198": 2, "236": 2, "252": 2, "85": 2, "267": 2, "281": 2, "294": 2, "08": [2, 8], "21": [2, 4], "15": [2, 4, 5, 8], "c": 2, "pessimistic_param": 2, "871": 2, "846": 2, "28": [2, 4, 8], "822": 2, "77": [2, 4], "801": 2, "781": 2, "763": 2, "747": 2, "732": 2, "718": 2, "705": 2, "continu": [2, 8], "outcom": [2, 4, 5, 8], "both": [2, 5, 6, 7, 8], "have": [2, 3, 4, 5, 7, 8], "chanc": 2, "valuat": [2, 7], "And": [2, 5, 7, 8], "price": [2, 4, 6], "er": 2, "07000": 2, "06675": 2, "06605": 2, "06565": 2, "06535": 2, "06510": 2, "06485": 2, "06465": 2, "06450": 2, "06435": 2, "flexibl": [2, 8], "assum": 2, "possibl": [2, 5, 6, 8], "sell": [2, 4, 8], "optim": 2, "value_of_flex": 2, "02036601269492": 2, "The": [3, 4, 5, 7, 8], "work": 3, "progress": 3, "content": 3, "seen": 3, "knowledg": 3, "includ": [3, 8], "spatial": [3, 7], "semant": 3, "relationship": 3, "speckl": 3, "support": 3, "connector": 3, "long": [3, 5, 8], "those": [3, 7, 8], "been": [3, 4, 5, 7, 8], "demonstr": [3, 7], "done": 3, "cash": [3, 4, 6, 7, 8], "appropri": [3, 7, 8], "same": [3, 4, 5, 8], "os": [3, 5, 7], "ipython": [3, 7], "ifram": [3, 7], "api": [3, 7], "host": [3, 7], "xyz": [3, 7], "token": [3, 7], "getenv": [3, 7], "speckle_token": [3, 7], "stream_id": [3, 7], "3f40d86240": [3, 7], "commit_id": [3, 7], "get_latest_commit_id": [3, 7], "http": [3, 6, 7, 8], "emb": [3, 7], "width": [3, 7], "height": [3, 5, 7, 8], "800": [3, 7], "specklecli": [3, 7], "server": [3, 7], "authent": 3, "true": [3, 4, 5, 7, 8], "get_commit": [3, 7], "provid": [5, 6, 7, 8], "default": [5, 7, 8], "latest": 7, "speckle_ent": [3, 7], "pars": [3, 7], "root_assembl": [3, 7], "to_ent": [3, 7], "develop": [3, 4, 6, 7], "design_scenario": [3, 7], "plot": [3, 4, 7, 8], "hierarchical_layout": [3, 7], "fals": [3, 4, 5, 7], "select": [3, 7], "network": [3, 7], "edg": [3, 7], "node": [3, 7], "filter": [3, 7], "reset": [3, 7], "organis": 3, "categori": 3, "cost": [3, 7], "revenu": [3, 7, 8], "exampl": [3, 8], "base": [3, 7, 8], "sellabl": 3, "leasabl": 3, "area": [3, 7], "nsa": 3, "nla": [3, 7], "queri": 3, "find": 3, "revenue_ent": 3, "hasattr": 3, "contain": [3, 7, 8], "ie": [3, 4, 7, 8], "appli": [4, 5, 8], "simul": [4, 5, 8], "basic": [4, 6], "proforma": [4, 6, 7, 8], "factor": [4, 5, 6], "adjust": [4, 5], "flow": [4, 5, 6, 7, 8], "against": [4, 5, 7, 8], "respect": [4, 8], "program": [4, 6], "decis": [4, 5, 6, 7], "respons": 4, "condit": [4, 5, 7], "characterist": [4, 8], "dynam": [4, 5, 6], "begin": [4, 5, 7], "scenario": [4, 6], "trial": 4, "similar": [4, 7, 8], "determinist": [4, 6, 8], "requir": [4, 5, 7, 8], "non": [4, 7, 8], "befor": [4, 7], "basemodel": [4, 5], "pass": [4, 5, 7], "set_param": [4, 5], "span": [4, 5], "calc_acquisit": [4, 5], "calc_egi": [4, 5], "calc_noi": [4, 5], "calc_ncf": [4, 5], "calc_revers": [4, 5], "pbtcf": [4, 5], "metric": [4, 5, 7], "cumulative_net_cf_with_rev": [4, 5], "wrap": 4, "execut": [4, 5, 7], "realist": [4, 5, 8], "tradit": [4, 5, 8], "ex_ant": 4, "ex_ante_t": 4, "pro": [4, 5, 8], "forma": [4, 5, 8], "occ": 4, "group": [4, 7], "averag": [4, 5, 8], "mean": [4, 5, 7, 8], "hold": [4, 5], "fix": [4, 5, 8], "deriv": [4, 5], "onli": [4, 5, 8], "count": [4, 5], "indic": [4, 7, 8], "rel": [4, 7, 8], "favor": [4, 8], "term": [4, 8], "space": [4, 5, 7, 8], "fundament": 4, "econom": 4, "basi": [4, 8], "accompani": [4, 5, 8], "excel": [4, 5, 8], "spreadsheet": [4, 5, 8], "case": [4, 5, 7, 8], "instead": 4, "growth": [4, 5, 8], "emul": 4, "would": [4, 5, 7, 8], "look": [4, 8], "25": [4, 5, 8], "2000": [4, 5], "overal": 4, "trend": 4, "cap_rat": [4, 5, 8], "initial_valu": [4, 5, 8], "050747414": 4, "002537905": 4, "volatil": 4, "volatility_per_period": [4, 5, 8], "autoregression_param": [4, 5, 8], "mean_reversion_param": [4, 5, 8], "cyclic": 4, "from_estim": [4, 8], "space_cycle_phase_prop": [4, 8], "space_cycle_period": [4, 8], "8": [4, 5, 8], "space_cycle_height": [4, 8], "space_cycle_asymmetric_paramet": [4, 8], "asset_cycle_period_diff": [4, 8], "asset_cycle_phase_diff_prop": [4, 8], "asset_cycle_amplitud": [4, 8], "asset_cycle_asymmetric_paramet": [4, 8], "nois": 4, "black": 4, "swan": 4, "noise_dist": [4, 5, 8], "symmetr": [4, 5, 8], "triangular": [4, 5, 8], "residu": [4, 5, 8], "black_swan": [4, 5, 8], "blackswan": [4, 5, 8], "likelihood": [4, 8], "dissipation_r": [4, 5, 8], "probabl": [4, 5, 8], "impact": [4, 5, 8], "autoregressive_return": [4, 8], "space_waveform": [4, 8], "space_market": [4, 8], "asset_waveform": [4, 8], "asset_market": [4, 8], "asset_true_valu": [4, 8], "space_market_price_factor": [4, 5, 8], "noisy_valu": [4, 8], "historical_valu": [4, 8], "implied_rev_cap_r": [4, 5, 8], "histor": [4, 8], "peak": [4, 5, 8], "trough": [4, 5, 8], "duplic": 4, "edit": [4, 5], "subclass": [4, 7], "expostinflexmodel": 4, "set_market": [4, 5], "overrid": 4, "product": [4, 5, 7], "whose": [4, 7, 8], "impli": [4, 8], "cap": [4, 5, 8], "asset": [4, 5, 7, 8], "paramet": [4, 8], "ex_post_param": 4, "ex_post_inflex": 4, "ex_post_t": 4, "97": 4, "79": [4, 8], "93": 4, "163": 4, "155": 4, "27": [4, 5, 8], "16": [4, 8], "34": [4, 8], "173": 4, "65": 4, "164": 4, "103": 4, "183": 4, "18": [4, 8], "91": 4, "217": 4, "206": 4, "76": 4, "130": 4, "187": 4, "94": 4, "120": 4, "22": [4, 8], "47": [4, 8], "45": [4, 8], "69": 4, "32": [4, 8], "415": 4, "compar": 4, "696": 4, "pv_diff": 4, "percentag": 4, "differ": [4, 8], "minu": [4, 8], "irr_diff": 4, "attempt": 4, "captur": [4, 8], "must": [4, 5, 7], "introduc": [4, 8], "abil": [4, 7], "option": 4, "creation": 4, "cours": [4, 7], "action": [4, 5], "mai": [4, 5, 7, 8], "exercis": [4, 8], "oblig": 4, "simpl": [4, 7], "resal": [4, 8], "problem": 4, "question": [4, 5], "decid": 4, "invest": [4, 8], "formul": [4, 8], "trigger": 4, "execis": 4, "overwrit": 4, "thu": [4, 5, 7, 8], "enabl": [4, 7], "state": [4, 5], "check": [4, 5, 7], "met": 4, "figur": [4, 8], "diagram": [4, 7], "stop": 4, "gain": 4, "rule": [4, 5], "flowchart": 4, "influenc": 4, "bring": 4, "sale": 4, "output": [4, 8], "boolean": 4, "flag": [4, 5], "below": [4, 7, 8], "code": [4, 6], "minimum": 4, "prevent": 4, "consist": [4, 8], "few": [4, 5], "phase": [4, 5, 8], "alwai": [4, 8], "mid": [4, 8], "cycl": [4, 5, 8], "go": [4, 8], "exceed_pricing_factor": [4, 5], "bool": [4, 5], "threshold": [4, 5], "i": [4, 5, 7], "rang": [4, 5, 8], "size": [4, 5, 8], "els": [4, 5], "manipul": 4, "adjust_hold_period": [4, 5], "get": [4, 5, 7], "try": [4, 5], "idx": [4, 5], "except": [4, 5, 8], "valueerror": [4, 5], "len": [4, 5], "policy_param": [4, 5], "re": [4, 5, 8], "updat": [4, 5], "instanc": [4, 7], "context": [4, 5, 7], "abstract": 4, "natur": [4, 7, 8], "chain": 4, "multipl": [4, 7, 8], "complex": 4, "graph": 4, "better": [4, 5, 8], "mimic": 4, "manag": [4, 5], "For": [4, 5, 6, 7, 8], "markov": 4, "process": [4, 7, 8], "stop_gain_resale_polici": [4, 5], "ex_post_flex": 4, "arg": 4, "389": 4, "situat": [4, 8], "benefit": [4, 5], "investor": 4, "encourag": 4, "until": 4, "avoid": 4, "downturn": [4, 8], "wa": 5, "emploi": 5, "assess": 5, "one": 5, "futur": [5, 7, 8], "mani": 5, "incorpor": [5, 8], "about": 5, "unfold": 5, "suspect": 5, "rather": 5, "than": [5, 8], "iter": 5, "configur": 5, "seaborn": 5, "sn": 5, "number": [5, 7], "rent": [5, 8], "typic": [5, 8], "most": [5, 7, 8], "should": [5, 8], "abl": [5, 8], "estim": [5, 8], "pretti": 5, "accur": 5, "especi": [5, 7, 8], "exist": [5, 7, 8], "reflect": [5, 8], "throughout": 5, "entir": [5, 7, 8], "though": [5, 8], "other": [5, 7, 8], "half": [5, 8], "small": 5, "unless": 5, "great": 5, "economi": 5, "perhap": [5, 8], "some": [5, 6, 7, 8], "emerg": 5, "countri": 5, "nomin": 5, "what": [5, 7, 8], "inflat": 5, "anywai": 5, "growth_rate_dist": 5, "0005": [5, 8], "005": 5, "initial_value_dist": 5, "from_likelihood": 5, "expect": [5, 8], "histplot": 5, "bin": 5, "kde": 5, "ax": 5, "ylabel": 5, "from_trend": 5, "here": [5, 8], "agnost": 5, "current": [5, 8], "want": [5, 7, 8], "proport": [5, 8], "between": [5, 7, 8], "space_cycle_phase_prop_dist": 5, "random": [5, 8], "space_cycle_period_dist": 5, "space_cycle_height_dist": 5, "asset_cycle_phase_diff_prop_dist": 5, "asset_cycle_period_diff_dist": 5, "amplitud": [5, 8], "asset_cycle_amplitude_dist": 5, "remov": 5, "asymmetri": [5, 8], "align": 5, "space_cycle_asymmetric_parameter_dist": 5, "asset_cycle_asymmetric_parameter_dist": 5, "obtain": 5, "util": 5, "lack": 5, "particular": 5, "evalu": 5, "expos": 5, "independ": 5, "exactli": [5, 8], "side": 5, "ex": [5, 8], "post": [5, 8], "recogn": [5, 8], "did": 5, "section": [5, 6], "speed": [5, 8], "multiprocess": 5, "set_application_registri": 5, "inflex_scenario": 5, "pool": 5, "cpu_count": 5, "map": 5, "polici": 5, "policy_arg": 5, "flex_scenario": 5, "descript": 5, "statist": [5, 8], "scipi": 5, "stat": 5, "ss": 5, "inflex_pv": 5, "flex_pv": 5, "diff_pv": 5, "datafram": 5, "000000": 5, "1077": 5, "749725": 5, "1459": 5, "890803": 5, "382": 5, "141078": 5, "std": 5, "356": 5, "733073": 5, "407": 5, "668206": 5, "585": 5, "102023": 5, "min": 5, "525": 5, "484367": 5, "513": 5, "378835": 5, "1310": 5, "107219": 5, "783": 5, "639627": 5, "1219": 5, "508580": 5, "29": [5, 8], "028227": 5, "980": 5, "830945": 5, "1464": 5, "753353": 5, "412": 5, "529076": 5, "1325": 5, "374409": 5, "1727": 5, "293824": 5, "809": 5, "352601": 5, "max": 5, "2309": 5, "718708": 5, "2681": 5, "567039": 5, "1886": 5, "715075": 5, "skew": [5, 8], "813978": 5, "262439": 5, "085629": 5, "kurtosi": 5, "115368": 5, "059207": 5, "654304": 5, "t": [5, 8], "ttest_1samp": 5, "ttestresult": 5, "208356578401148": 5, "pvalu": 5, "7139390240943988e": 5, "156": 5, "df": 5, "1999": 5, "ecdfplot": 5, "drop": 5, "column": 5, "inflex_irr": 5, "flex_irr": 5, "diff_irr": 5, "071331": 5, "307902": 5, "236571": 5, "041593": 5, "375327": 5, "390067": 5, "026000": 5, "005500": 5, "118100": 5, "036275": 5, "093400": 5, "067400": 5, "132200": 5, "058950": 5, "105600": 5, "327825": 5, "289250": 5, "174500": 5, "869300": 5, "832800": 5, "219405": 5, "795472": 5, "733436": 5, "950033": 5, "067658": 5, "887851": 5, "123003445931644": 5, "2653704314645177e": 5, "138": 5, "inflex_irr_x_pv": 5, "jointplot": 5, "y": 5, "kind": [5, 7], "scatter": 5, "axisgrid": 5, "jointgrid": 5, "0x339e94f40": 5, "flex_irr_x_pv": 5, "0x33a0dc760": 5, "diff_pvs_x_inflex_pv": 5, "hist": 5, "0x3199a4250": 5, "diff_irrs_x_inflex_irr": 5, "0x33a0d1750": 5, "open": 6, "sourc": [6, 7, 8], "assist": 6, "financi": [6, 7], "plan": 6, "forecast": 6, "decompos": 6, "element": [6, 8], "discount": [6, 8], "approach": 6, "recompos": 6, "wire": 6, "full": [6, 8], "rigor": 6, "methodolog": [6, 8], "establish": 6, "mit": 6, "professor": 6, "david": 6, "geltner": 6, "richard": 6, "de": 6, "neufvil": 6, "A": [6, 7, 8], "practic": 6, "guid": 6, "expand": 6, "robust": 6, "framework": 6, "parallel": 6, "intend": 6, "practition": 6, "who": 6, "familiar": 6, "vers": 6, "scienc": 6, "orient": 6, "introduct": 6, "load": 6, "drive": 6, "andrea": 6, "keep": [6, 8], "remind": 6, "me": 6, "r": 6, "d": 6, "john": 6, "wilei": 6, "son": 6, "ltd": 6, "2018": [6, 8], "isbn": 6, "9781119106470": 6, "url": 6, "onlinelibrari": 6, "com": [6, 7], "doi": 6, "ab": 6, "1002": 6, "arxiv": 6, "pdf": 6, "org": [6, 8], "access": 7, "extend": 7, "3d": 7, "autom": 7, "optimis": 7, "send": 7, "walk": [7, 8], "through": 7, "o": 7, "understand": 7, "place": 7, "attribut": [7, 8], "represent": 7, "physic": 7, "compon": [7, 8], "equip": 7, "holist": 7, "web": 7, "inter": 7, "relat": [7, 8], "thing": [7, 8], "floor": 7, "sai": 7, "sub": 7, "room": 7, "even": 7, "servic": 7, "mechan": 7, "system": 7, "control": 7, "air": 7, "repres": [7, 8], "huge": 7, "substanc": 7, "volum": 7, "sort": 7, "direct": 7, "connect": 7, "link": 7, "anoth": [7, 8], "virtu": 7, "could": [7, 8], "clearli": 7, "intuit": 7, "themselv": 7, "too": [7, 8], "travers": 7, "overlap": 7, "fashion": 7, "common": 7, "sens": [7, 8], "conceptualis": 7, "exclus": 7, "id": 7, "uniqu": 7, "immut": 7, "identifi": [7, 8], "whole": 7, "lifetim": 7, "human": 7, "text": 7, "entitytyp": 7, "tree": 7, "store": 7, "eg": 7, "geometri": 7, "seek": 7, "record": 7, "occurr": 7, "experi": [7, 8], "happen": 7, "lettabl": 7, "entityid": 7, "pointer": 7, "meanwhil": 7, "relationshiptyp": 7, "sourceid": 7, "targetid": 7, "target": 7, "everi": 7, "extent": 7, "dure": 7, "overview": 7, "founat": 7, "uml": 7, "style": 7, "drill": 7, "down": 7, "roll": 7, "composit": 7, "summat": 7, "offic": 7, "tenant": 7, "occupi": 7, "part": 7, "analys": 7, "per": [7, 8], "share": 7, "likewis": 7, "multi": 7, "facet": 7, "pathwai": 7, "effici": [7, 8], "broad": 7, "pertin": 7, "organ": 7, "either": [7, 8], "itself": 7, "after": 7, "receiv": 7, "exchang": 7, "scaffold": 7, "off": [7, 8], "plugin": 7, "mcneel": 7, "rhinoceros3d": 7, "grasshopp": 7, "www": 7, "rhino3d": 7, "manual": 7, "assign": 7, "export": 7, "onc": [7, 8], "upload": 7, "mix": 7, "basement": 7, "plinth": 7, "garbag": 7, "dispos": 7, "storag": 7, "yourself": 7, "ll": 7, "environ": 7, "variabl": [7, 8], "version": 7, "25b3551c0b32e8044de35043525ae5d3": 7, "speckle_typ": 7, "totalchildrencount": 7, "2074": 7, "member": 7, "get_dynamic_member_nam": 7, "detach": 7, "viewer": 7, "endpoint": 7, "Of": 7, "easier": [7, 8], "helper": 7, "isinst": 7, "networkx": 7, "multidigraph": 7, "python": 7, "buildinga": 7, "residenti": 7, "retail": 7, "spatiallycontain": 7, "label": 7, "accordingli": 7, "buildinga_contain": 7, "get_rel": 7, "outgo": 7, "relationship_typ": 7, "sinc": [7, 8], "distinct": [7, 8], "consolid": 7, "unrol": 7, "visual": [7, 8], "circumst": 8, "qualiti": 8, "substitut": 8, "fungibl": 8, "ineffici": 8, "autoregress": 8, "ratio": 8, "origin": 8, "arriv": 8, "variat": 8, "observ": 8, "interpret": 8, "avail": 8, "substanti": 8, "enhanc": 8, "special": 8, "featur": 8, "offer": 8, "much": 8, "richer": 8, "fuller": 8, "pictur": 8, "doe": 8, "explicitli": 8, "later": 8, "detail": 8, "mktdynamicsinput": 8, "tab": 8, "five": 8, "mostli": 8, "explicit": 8, "stochast": 8, "sampl": 8, "specifii": 8, "extra": 8, "2025": 8, "rental": 8, "exclud": 8, "around": 8, "toward": 8, "revert": 8, "out": 8, "upon": 8, "inflex": 8, "10yr": 8, "yr11": 8, "divid": 8, "tend": 8, "earlier": 8, "mitig": 8, "maxim": 8, "unfavor": 8, "yield": 8, "bui": 8, "plausibl": 8, "equal": 8, "plu": 8, "point": 8, "improv": 8, "intial": 8, "level": 8, "fraction": 8, "subsequ": 8, "perform": 8, "sensit": 8, "govern": 8, "central": 8, "tendenc": 8, "TO": 8, "normal": 8, "zero": 8, "principl": 8, "howev": 8, "increment": 8, "slightli": 8, "counteract": 8, "minor": 8, "inconsist": 8, "give": 8, "upward": 8, "bia": 8, "interact": 8, "ideal": 8, "appl": 8, "comparison": 8, "inflxpv": 8, "proformapv": 8, "k13": 8, "almost": 8, "absolut": 8, "lr": 8, "assumpt": 8, "awai": 8, "0500": 8, "0000": 8, "fact": 8, "0475": 8, "0525": 8, "standard": 8, "deviat": 8, "across": 8, "longitudin": 8, "dispers": 8, "accumul": 8, "realiz": 8, "becom": 8, "embed": 8, "forward": 8, "top": 8, "inertia": 8, "affect": 8, "empir": 8, "evid": 8, "matur": 8, "u": 8, "individu": 8, "idiosyncrat": 8, "risk": 8, "stabil": 8, "automat": 8, "greater": 8, "momentum": 8, "liquid": 8, "information": 8, "stock": 8, "might": 8, "leav": 8, "noisi": 8, "deal": 8, "separ": 8, "determin": 8, "strength": 8, "reduc": 8, "veri": 8, "close": 8, "were": 8, "impart": 8, "pull": 8, "suggest": 8, "rent_market": 8, "somewhat": 8, "predict": 8, "necessarili": 8, "sync": 8, "latter": 8, "sine": 8, "asymmetr": 8, "degre": 8, "curv": 8, "sharp": 8, "quick": 8, "notic": 8, "oppos": 8, "upturn": 8, "wave": 8, "offset": 8, "head": 8, "think": 8, "know": 8, "en": 8, "wikipedia": 8, "wiki": 8, "phase_": 8, "durat": 8, "seem": 8, "distanc": 8, "doubl": 8, "occup": 8, "consid": 8, "leverag": 8, "bottom": 8, "slippag": 8, "randomli": 8, "mayb": 8, "usual": 8, "far": 8, "quarter": 8, "unrel": 8, "magnitud": 8, "enter": 8, "swing": 8, "correspond": 8, "roughli": 8, "denomin": 8, "whenev": 8, "waveform": 8, "resembl": 8, "sawtooth": 8, "often": 8, "sharper": 8, "quicker": 8, "recoveri": 8, "extrem": 8, "immedi": 8, "last": 8, "twice": 8, "pure": 8, "actual": 8, "directli": 8, "invers": 8, "By": 8, "therefor": 8, "envis": 8, "market_wav": 8, "025": 8, "unlik": 8, "sheet": 8, "sampleabl": 8, "event": 8, "come": 8, "surpris": 8, "major": 8, "outsid": 8, "simplifi": 8, "dissip": 8, "yet": 8, "geometr": 8, "alreadi": 8, "calibr": 8, "presum": 8, "disposit": 8, "good": 8, "03": 8, "2012": 8, "2013": 8, "2014": 8, "88": 8, "2015": 8, "2016": 8, "2017": 8, "2021": 8, "2022": 8, "2023": 8, "2024": 8, "shown": 8}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"updat": 0, "document": 0, "A": 1, "basic": 1, "discount": 1, "cash": [1, 2], "flow": [1, 2, 3], "valuat": [1, 3, 6], "The": 1, "foundat": 1, "element": 1, "proforma": [1, 2], "overview": 1, "span": [1, 2, 8], "project": 1, "stream": 1, "determinist": 2, "scenario": [2, 3, 5, 7, 8], "analysi": 2, "base": [2, 4, 5], "paramet": [2, 5], "model": [2, 3, 4, 5, 7], "metric": 2, "output": 2, "optimist": 2, "pessimist": 2, "expect": 2, "valu": [2, 5], "ev": 2, "drive": 3, "financi": 3, "from": [3, 5, 7], "design": [3, 7], "load": [3, 7], "inspect": [3, 7], "graph": [3, 7], "assign": 3, "aggreg": 3, "per": 3, "entiti": [3, 7], "introduct": 4, "flexibl": [4, 5, 6], "ex": 4, "ant": 4, "inflex": [4, 5], "post": 4, "market": [4, 5, 8], "polici": 4, "under": [5, 6], "uncertainti": [5, 6], "multipl": 5, "sampl": 5, "distribut": 5, "likelihood": 5, "overal": [5, 8], "trend": [5, 8], "volatil": [5, 8], "cyclic": [5, 8], "nois": [5, 8], "black": [5, 8], "swan": [5, 8], "compar": 5, "result": 5, "time": 5, "0": 5, "present": 5, "occ": 5, "pv": 5, "cumul": 5, "target": 5, "curv": 5, "realiz": 5, "irr": 5, "price": [5, 8], "x": 5, "diff": 5, "differ": 5, "function": 5, "rangekeep": [6, 7], "tabl": 6, "content": 6, "real": [6, 8], "estat": [6, 8], "us": 6, "exampl": [6, 7], "acknowledg": 6, "bibliographi": 6, "object": 7, "relationship": 7, "assembl": 7, "definit": 7, "properti": 7, "event": 7, "rational": 7, "implic": 7, "technic": 7, "defin": 7, "authent": 7, "speckl": 7, "queri": 7, "s": 7, "factor": 8, "dynam": 8, "produc": 8, "one": 8, "trial": 8, "put": 8, "all": 8, "togeth": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})