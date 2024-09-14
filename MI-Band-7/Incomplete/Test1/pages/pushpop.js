Page({
    build(){
        hmUI.setStatusBarVisible(false);
        hmUI.setLayerScrolling(false);
                let score = 0
                let moveCount = 0
                let bestScore=0
                let level = 3
                let isMoved = false
                let nextBlockClass = "X"//X表示实体方块，O表示得分点          
                let nextType = "normal"
                let action=""
                let mapArr = new Array()
                let isOver = false
                if (hmFS.SysProGetInt('bestScore') == undefined) {
                    hmFS.SysProSetInt('bestScore', score)
                }
                try {
                    bestScore = hmFS.SysProGetInt('bestScore')
                }
                catch{}
                var theme = hmFS.SysProGetInt("theme_42");
                if (theme == 0) {

                } else {

                }
                const backGround = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 0,
                    y: 0,
                    w: 192,
                    h: 368,
                color: theme == 0 ? 0xEDF1F7 : 0x4d5158
                })
                //随机位置
                function randomPlace() {
                    let placeIndex = new Array()
                    placeIndex[0] = parseInt(Math.random() * (4 + 1), 10)
                    placeIndex[1] = parseInt(Math.random() * (4 + 1), 10)
                    return placeIndex
                }
                //设置方块种类
                function setBlock(placeX, placeY, blockType) {
                    switch (blockType) {
                        case "floor":
                            mapArr[placeX][placeY].blockType = "floor"
                            mapArr[placeX][placeY].isOccupied = false
                            mapArr[placeX][placeY].canBeDel = false
                            mapArr[placeX][placeY].cell.setProperty(hmUI.prop.MORE, {
                                x: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.x),
                                y: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.y),
                                w: 30,
                                h: 30,
                                color: theme == 0 ? 0xB9C5DF : 0x565c68
                            })
                            break;
                        case "player":
                            mapArr[placeX][placeY].blockType = "player"
                            mapArr[placeX][placeY].isOccupied = true
                            mapArr[placeX][placeY].canBeDel = false
                            mapArr[placeX][placeY].cell.setProperty(hmUI.prop.MORE, {
                                x: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.x),
                                y: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.y),
                                w: 30,
                                h: 30,
                            color: theme ==  0 ? 0x3f72af : 0x284a72
                            })
                            break;
                        case "scorePoint":
                            mapArr[placeX][placeY].blockType = "scorePoint"
                            mapArr[placeX][placeY].isOccupied = false
                            mapArr[placeX][placeY].canBeDel = true
                            mapArr[placeX][placeY].cell.setProperty(hmUI.prop.MORE, {
                                x: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.x),
                                y: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.y),
                                w: 30,
                                h: 30,
                                color: theme == 0 ? 0xa6e3e9 : 0x79a2a6
                            })
                            break;
                        case "fixedBlock":
                            mapArr[placeX][placeY].blockType = "fixedBlock"
                            mapArr[placeX][placeY].isOccupied = true
                            mapArr[placeX][placeY].canBeDel = false
                            mapArr[placeX][placeY].cell.setProperty(hmUI.prop.MORE, {
                                x: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.x),
                                y: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.y),
                                w: 30,
                                h: 30,
                            color: theme == 0 ? 0x1F8A8E : 0x11484a
                            })
                            break;
                        case "crossDelPoint":
                            mapArr[placeX][placeY].blockType = "crossDelPoint"
                            mapArr[placeX][placeY].isOccupied = true
                            mapArr[placeX][placeY].canBeDel = true
                            mapArr[placeX][placeY].cell.setProperty(hmUI.prop.MORE, {
                                x: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.x),
                                y: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.y),
                                w: 30,
                                h: 30,
                                color: theme == 0 ? 0xabedd8 : 0x7cab9c
                            })
                            break;
                        case "normal":
                            mapArr[placeX][placeY].blockType = "normal"
                            mapArr[placeX][placeY].isOccupied = true
                            mapArr[placeX][placeY].canBeDel = false
                            mapArr[placeX][placeY].cell.setProperty(hmUI.prop.MORE, {
                                x: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.x),
                                y: mapArr[placeX][placeY].cell.getProperty(hmUI.prop.y),
                                w: 30,
                                h: 30,
                                color: theme  == 0 ? 0x46cdcf :  0x2f8586
                            })
                            break;
                        default:
                            break;
                     }
                }
                function crossDelFunc(placeX, placeY) {
                    setBlock(placeX, placeY,"floor")
                    let _playerPos = findPlayerPos()
                    for (let r = 0; r <= 4; r++) {
                        if (r !== _playerPos[0]) {
                            if (mapArr[r][placeY].blockType !== "fixedBlock") {
                                setBlock(r, placeY, "floor")
                            }
                            else {
                                setBlock(r, placeY, "crossDelPoint")
                            }
                        }
                    }
                    for (let c = 0;c <= 4; c++) {
                        if (c !== _playerPos[1]) {
                            if (mapArr[placeX][c].blockType !== "fixedBlock") {
                                setBlock(placeX, c, "floor")
                            }
                            else {
                                setBlock(placeX, c, "crossDelPoint")
                            }
                        }
                    }
                    score+=8
                }
                //初始化
                function gameInit() {
                    score = 0
                    moveCount = 0
                    level = 0
                    isMoved = false
                    nextBlockClass = "X"
                    nextType = "normal"
                    mapArr.length = 0
                    isOver = false
                    for (let i = 0; i <= 4; i++) {
                        let line = new Array()
                        for (let j = 0; j <= 4; j++) {
                            let Posx = 15 + i * 30 + i * 3
                            let Posy = 180 + j * 30 + j * 3
                            let side = 30
                            line.push({
                                blockType: "floor",
                                IndexX: i,
                                IndexY: j,
                                isOccupied: false,
                                canBeDel: false,
                                cell: hmUI.createWidget(hmUI.widget.FILL_RECT, {    // 自定义组件容器
                                    x: Posx,
                                    y: Posy,
                                    w: side,
                                    h: side,
                                    radius: 3,
                                    color: theme == 0 ? 0xB9C5DF : 0x565c68
                                })
                            })
                        }
                        mapArr.push(line)
                    }
                    setBlock(1,2,"player")
                    for (i = 0; i < 8;) {
                        let xyIndex = randomPlace()
                        if (mapArr[xyIndex[0]][xyIndex[1]].isOccupied == false) {
                            setBlock(xyIndex[0], xyIndex[1],"normal")
                            i++
                        }
                    }
                    for (i = 0; i < 8;) {
                        let xyIndex = randomPlace()
                        if (mapArr[xyIndex[0]][xyIndex[1]].canBeDel == false && mapArr[xyIndex[0]][xyIndex[1]].isOccupied == false) {
                            setBlock(xyIndex[0], xyIndex[1],"scorePoint")
                            i++
                        }
                    }
                }
                //查找玩家位置
                function findPlayerPos() {
                    for (let x = 0; x <= 4; x++) {
                        for (let y = 0; y <= 4; y++) {
                            if (mapArr[x][y].blockType === "player") {
                                return [x, y]                            
                            }
                        }
                    }
                }
                //移动
                function moveUp(a) {
                    let playerPos = findPlayerPos()
                    if (playerPos[1] != 0) {
                        for (let i = playerPos[1]-1; i >= 0; i--) {
                            if (mapArr[playerPos[0]][i].blockType === "floor") {
                                for (let j = i + 1; j <= playerPos[1]; j++) {
                                    setBlock(playerPos[0], j - 1, mapArr[playerPos[0]][j].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[playerPos[0]][i].blockType === "scorePoint") {
                                score += 1
                                console.log(score)
                                for (let j = i + 1; j <= playerPos[1]; j++) {
                                    setBlock(playerPos[0], j - 1, mapArr[playerPos[0]][j].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[playerPos[0]][i].blockType === "crossDelPoint") {
                                crossDelFunc(playerPos[0], i)
                                for (let j = i + 1; j <= playerPos[1]; j++) {
                                    setBlock(playerPos[0], j - 1, mapArr[playerPos[0]][j].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[playerPos[0]][i].blockType === "fixedBlock") {
                                break;
                            }                          
                        }
                        if (isMoved == true) {
                            moveCount += 1
                            action="up"
                        }
                         
                    }
                }
                function moveDown(a) {
                    let playerPos = findPlayerPos()
                    if (playerPos[1] != 4) {
                        for (let i = playerPos[1] +1; i <= 4; i++) {
                            if (mapArr[playerPos[0]][i].blockType === "floor") {
                                for (let j = i - 1; j >= playerPos[1]; j--) {
                                    setBlock(playerPos[0], j+1 , mapArr[playerPos[0]][j].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[playerPos[0]][i].blockType === "scorePoint") {
                                score += 1
                                console.log(score)
                                for (let j = i - 1; j >= playerPos[1]; j--) {
                                    setBlock(playerPos[0], j + 1, mapArr[playerPos[0]][j].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[playerPos[0]][i].blockType === "crossDelPoint") {
                                crossDelFunc(playerPos[0], i)
                                for (let j = i - 1; j >= playerPos[1]; j--) {
                                    setBlock(playerPos[0], j + 1, mapArr[playerPos[0]][j].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[playerPos[0]][i].blockType === "fixedBlock") {
                                break;
                            }
                        }
                        if (isMoved == true) {
                            moveCount += 1
                            action="down"
                        }
                    }
                }
                function moveRight(a) {
                    let playerPos = findPlayerPos()
                    if (playerPos[0] != 4) {
                        for (let i = playerPos[0] + 1; i <= 4; i++) {
                            if (mapArr[i][playerPos[1]].blockType === "floor") {
                                for (let j = i - 1; j >= playerPos[0]; j--) {
                                    setBlock(j + 1, playerPos[1], mapArr[j][playerPos[1]].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[i][playerPos[1]].blockType === "scorePoint") {
                                score += 1
                                console.log(score)
                                for (let j = i - 1; j >= playerPos[0]; j--) {
                                    setBlock(j + 1, playerPos[1], mapArr[j][playerPos[1]].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[i][playerPos[1]].blockType === "crossDelPoint") {
                                crossDelFunc(i, playerPos[1])
                                for (let j = i - 1; j >= playerPos[0]; j--) {
                                    setBlock(j + 1, playerPos[1], mapArr[j][playerPos[1]].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[i][playerPos[1]].blockType === "fixedBlock") {
                                break;
                            }
                        }
                        if (isMoved == true) {
                            moveCount += 1
                            action="right"
                        }
                    }
                }
                function moveLeft(a) {
                    let playerPos = findPlayerPos()
                    if (playerPos[0] != 0) {
                        for (let i = playerPos[0] - 1; i >= 0; i--) {
                            if (mapArr[i][playerPos[1]].blockType === "floor") {
                                for (let j = i + 1; j <= playerPos[0]; j++) {
                                    setBlock(j - 1, playerPos[1], mapArr[j][playerPos[1]].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[i][playerPos[1]].blockType === "scorePoint") {
                                score += 1
                                console.log(score)
                                for (let j = i + 1; j <= playerPos[0]; j++) {
                                    setBlock(j - 1, playerPos[1], mapArr[j][playerPos[1]].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[i][playerPos[1]].blockType === "crossDelPoint") {
                                crossDelFunc(i, playerPos[1])
                                for (let j = i + 1; j <= playerPos[0]; j++) {
                                    setBlock(j - 1, playerPos[1], mapArr[j][playerPos[1]].blockType)
                                }
                                setBlock(playerPos[0], playerPos[1], "floor")
                                isMoved = true
                            }
                            else if (mapArr[i][playerPos[1]].blockType === "fixedBlock") {
                                break;
                            }
                        }
                        if (isMoved == true) {
                            moveCount += 1
                            action="left"
                        }
                    }
                }
                //消除
                function eliminateFunc() {
                    let eliminateQueue = new Array()
                    for (let i = 0; i <= 4; i++) {
                        let countR = 0
                        let countC = 0
                        for (let j = 0; j <= 4; j++) {
                            if (mapArr[i][j].blockType === "normal" || mapArr[i][j].blockType ==="fixedBlock") {
                                countC++                           
                            }
                            if (mapArr[j][i].blockType === "normal" || mapArr[j][i].blockType === "fixedBlock") {
                                countR++                             
                            }
                        }
                        if (countC == 5) {
                            eliminateQueue.push(["c", i])
                        }
                        if (countR == 5) {
                            eliminateQueue.push(["r", i])
                            console.log(i)
                        }
                    }
                    console.log(eliminateQueue.length)
                    for (let i = 0; i < eliminateQueue.length; i++) {
                        if (eliminateQueue[i][0] == "r") {
                            for (let r = 0; r <= 4; r++) {
                                if (mapArr[r][eliminateQueue[i][1]].blockType === "fixedBlock") {
                                    setBlock(r, eliminateQueue[i][1], "crossDelPoint")
                                    console.log("crossDelDectected")
                                }
                                else {
                                    setBlock(r, eliminateQueue[i][1], "scorePoint")
                                }
                            }
                        }
                        else {
                            for (let c = 0; c <= 4; c++) {
                                if (mapArr[eliminateQueue[i][1]][c].blockType === "fixedBlock") {
                                    setBlock(eliminateQueue[i][1], c, "crossDelPoint")
                                    console.log("crossDelDectected")
                                }
                                else {
                                    setBlock(eliminateQueue[i][1], c, "scorePoint")
                                }
                            }
                        }
                    }
                }
                //预告下次生成方块类型，返回string,在升级前调用
                function nextblock() {
                    if (isMoved == true) {
                        //step范围0-19
                        let _step = moveCount + 1
                        if (_step === 20) {
                            _step = 0
                        }
                        if (_step === 21) {
                            _step = 1
                        }
                        //1-18区间内正常交替生成
                        if (_step !== 0 && _step !== 19) {
                            console.log(nextBlockClass)
                            if (nextBlockClass === "X") {
                                nextBlockClass = "O"
                                console.log("In")
                                nextType = "normal" //随机位置设置正常方块
                            }
                            else {
                                nextBlockClass = "X"
                                nextType = "scorePoint" //随机位置设置得分点
                            }
                        }
                        //0或19特殊情况
                        else {
                            //0
                            if (_step === 0) {
                                //下一个等级小于等于3
                                if (level + 1 <= 3) {
                                    if (nextBlockClass === "X") {
                                        nextBlockClass = "O"
                                        nextType = "normal" //随机位置设置正常方块
                                    }
                                    else {
                                        nextBlockClass = "X"
                                        nextType = "scorePoint" //随机位置设置得分点
                                    }
                                }
                                //下一个level大于3
                                else {
                                    nextBlockClass = "O"
                                    nextType = "fixedBlock"//随机设置fixedBlock
                                }
                            }
                            //19
                            else {
                                nextBlockClass = "X"
                                nextType = "allScorePoint" //空白位置全部设置得分点
                            }
                        }
                    }               
                }
                //随机生成指定类型方块
                function randomSpan(nextType) {
                    if (isMoved == true) {
                        let placesArr = new Array()
                        if (nextType === "normal") {
                            let inlinePlaces = new Array()
                            for (let r = 0; r <= 4; r++) {
                                for (let c = 0; c <= 4; c++) {
                                    let _playerPos = findPlayerPos()
                                    if (mapArr[r][c].blockType === "floor" || mapArr[r][c].blockType === "scorePoint") {
                                        placesArr.push([r, c])
                                        console.log("ac",action)
                                        if (action === "up") {
                                            console.log(r, _playerPos[0])
                                            if (r === _playerPos[0] && c > _playerPos[1]) {
                                                inlinePlaces.push([r, c])
                                                console.log("pushed")
                                            }
                                        }
                                        else if (action === "down") {
                                            if (r === _playerPos[0] && c < _playerPos[1]) {
                                                inlinePlaces.push([r, c])
                                            }
                                        }
                                        else if (action === "right") {
                                            if (c === _playerPos[1] && r < _playerPos[0]) {
                                                inlinePlaces.push([r, c])
                                            }
                                        }
                                        else if (action === "left") {
                                            if (c === _playerPos[1] && r > _playerPos[0]) {
                                                inlinePlaces.push([r, c])
                                            }
                                        }
                                    }
                                }
                            }
                            console.log(inlinePlaces.length)
                            let randomNum = Math.floor(Math.random() * (9 + 1))
                            if (randomNum <= 1 && placesArr.length > 0) {
                                let placeIndex = Math.floor(Math.random() * (placesArr.length - 1 + 1))
                                setBlock(placesArr[placeIndex][0], placesArr[placeIndex][1], "normal")
                                console.log("random20normal")
                            }
                            else if (placesArr.length > 0) {
                                if (inlinePlaces.length > 0) {
                                    let placeIndex = Math.floor(Math.random() * (inlinePlaces.length - 1 + 1))
                                    setBlock(inlinePlaces[placeIndex][0], inlinePlaces[placeIndex][1], "normal")
                                    console.log("spaninlinenormal")
                                }
                                else {
                                    let placeIndex = Math.floor(Math.random() * (placesArr.length - 1 + 1))
                                    setBlock(placesArr[placeIndex][0], placesArr[placeIndex][1], "normal")
                                    console.log("spannormal")
                                }
                            }
                        }
                        else if (nextType === "scorePoint") {
                            for (let r = 0; r <= 4; r++) {
                                for (let c = 0; c <= 4; c++) {
                                    if (mapArr[r][c].blockType === "floor") {
                                        placesArr.push([r, c])
                                    }
                                }
                            }
                            if (placesArr.length > 0) {
                                let placeIndex = Math.floor(Math.random() * (placesArr.length - 1 + 1))
                                setBlock(placesArr[placeIndex][0], placesArr[placeIndex][1], "scorePoint")
                                console.log("SpanscorePoint")
                            }
                        }
                        else if (nextType === "fixedBlock") {
                            for (let r = 0; r <= 4; r++) {
                                for (let c = 0; c <= 4; c++) {
                                    if (mapArr[r][c].blockType === "floor" || mapArr[r][c].blockType === "normal" || mapArr[r][c].blockType === "scorePoint") {
                                        placesArr.push([r, c])
                                    }
                                }
                            }
                            if (placesArr.length > 0) {
                                let placeIndex = Math.floor(Math.random() * (placesArr.length - 1 + 1))
                                setBlock(placesArr[placeIndex][0], placesArr[placeIndex][1], "fixedBlock")
                                console.log("SpanFixedBlock")
                            }
                        }
                        else if (nextType === "allScorePoint") {
                            for (let r = 0; r <= 4; r++) {
                                for (let c = 0; c <= 4; c++) {
                                    if (mapArr[r][c].blockType === "floor") {
                                        setBlock(r,c,"scorePoint")
                                    }
                                }
                            }
                        }
                    }
                    
                }
                //判断是否结束，返回bool
                function isGameOver() {
                    let playerPos = findPlayerPos()
                    isOver = true;
                    (function () {
                        if (playerPos[1] != 0) {
                            for (let i = playerPos[1] - 1; i >= 0; i--) {
                                if (mapArr[playerPos[0]][i].blockType === "floor") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[playerPos[0]][i].blockType === "scorePoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[playerPos[0]][i].blockType === "crossDelPoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[playerPos[0]][i].blockType === "fixedBlock") {
                                    return;
                                }
                            }
                        }
                    })();//up
                    (function () {
                        if (playerPos[1] != 4) {
                            for (let i = playerPos[1] + 1; i <= 4; i++) {
                                if (mapArr[playerPos[0]][i].blockType === "floor") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[playerPos[0]][i].blockType === "scorePoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[playerPos[0]][i].blockType === "crossDelPoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[playerPos[0]][i].blockType === "fixedBlock") {
                                    return;
                                }
                            }
                        }
                    })();//down
                    (function () {
                        if (playerPos[0] != 4) {
                            for (let i = playerPos[0] + 1; i <= 4; i++) {
                                if (mapArr[i][playerPos[1]].blockType === "floor") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[i][playerPos[1]].blockType === "scorePoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[i][playerPos[1]].blockType === "crossDelPoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[i][playerPos[1]].blockType === "fixedBlock") {
                                    return;
                                }
                            }
                        }
                    })();//right
                    (function () {
                        if (playerPos[0] != 0) {
                            for (let i = playerPos[0] - 1; i >= 0; i--) {
                                if (mapArr[i][playerPos[1]].blockType === "floor") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[i][playerPos[1]].blockType === "scorePoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[i][playerPos[1]].blockType === "crossDelPoint") {
                                    isOver = false
                                    return
                                }
                                else if (mapArr[i][playerPos[1]].blockType === "fixedBlock") {
                                    return;
                                }
                            }
                        }
                    })();//left
                }
                //升级
                function levelUpgrade() {
                    if (moveCount === 20) {
                        level += 1
                        moveCount = 0
                    }
                    console.log("level:", level)
                    console.log("step:", moveCount)
                }
                //分数等级信息显示
                function textDisplay() {
                    scoreText.setProperty(hmUI.prop.MORE, {
                        text: `${score}`
                    })
                    levelText.setProperty(hmUI.prop.MORE, {
                        text: `level:${level}`
                    })
                    bestScoreText.setProperty(hmUI.prop.MORE, {
                        text: `BEST:${bestScore}`
                    })
                }
                //进度条显示
                function progressBarDisplay() {
                    let _w = moveCount * 8                
                    progressBar.setProperty(hmUI.prop.MORE, {
                        x: progressBar.getProperty(hmUI.prop.x),
                        y: progressBar.getProperty(hmUI.prop.y),
                        w: _w
                    })
                }
                //下一个方块显示
                function nextDisplay() {
                    let _color = 0
                    switch (nextType) {
                        case "normal":
                            _color = theme  == 0 ? 0x46cdcf :  0x2f8586
                            break;
                        case "scorePoint":
                            _color = theme == 0 ? 0xa6e3e9 : 0x79a2a6
                            break;
                        case "fixedBlock":
                            _color = theme == 0 ? 0x1F8A8E : 0x11484a
                            break;
                        case "allScorePoint":
                            _color = theme == 0 ? 0xa6e3e9 : 0x79a2a6
                            break;
                        default:
                            break;
                    }
                    nextTipBlock.setProperty(hmUI.prop.MORE, {
                        x: nextTipBlock.getProperty(hmUI.prop.x),
                        y: nextTipBlock.getProperty(hmUI.prop.y),
                        color: _color
                    })
                }
                //游戏结束提示
                function isOverTextDisplay() {
                    isGameOver()
                    if (isOver == true) {
                        hmUI.showToast({
                            text: 'GameOver'
                        })
                        console.log("gameOver")
                    }
                    //if (isOver == true) {
                    //    isOverText.setProperty(hmUI.prop.VISIBLE, true)
                    //}
                    //else {
                    //    isOverText.setProperty(hmUI.prop.VISIBLE, false)
                    //
                    //}
                }
                function bestScoreRecord() {
                    try {
                        if (bestScore < score) {
                            hmFS.SysProSetInt('bestScore', score)
                            bestScore = score
                            console.log("record")
                        } }
                    catch {}                  
                }
                gameInit() 
                function upFunc(e) {
                    moveUp()
                    randomSpan(nextType)
                    nextblock()
                    levelUpgrade()
                    eliminateFunc()
                    bestScoreRecord()
                    textDisplay()
                    progressBarDisplay()
                    nextDisplay()
                    isOverTextDisplay()
                    isMoved = false
                }
                function downFunc(e) {
                    moveDown()
                    randomSpan(nextType)
                    nextblock()
                    levelUpgrade()
                    eliminateFunc()
                    bestScoreRecord()
  
                    textDisplay()
                    progressBarDisplay()
                    nextDisplay()
                    isOverTextDisplay()
                    isMoved = false
                }
                function leftFunc(e) {
                    moveLeft()
                    randomSpan(nextType)
                    nextblock()
                    levelUpgrade()
                    eliminateFunc()
                    bestScoreRecord()
  
                    textDisplay()
                    progressBarDisplay()
                    nextDisplay()
                    isOverTextDisplay()
                    isMoved = false
                }
                function rightFunc(e) {
                    moveRight()
                    randomSpan(nextType)
                    nextblock()
                    levelUpgrade()
                    eliminateFunc()
                    bestScoreRecord()
  
                    textDisplay()
                    progressBarDisplay()
                    nextDisplay()
                    isOverTextDisplay()
                    isMoved = false
                }
                function  moveFunc(event) {
                    switch (event) {
                        case hmApp.gesture.UP:
                            upFunc()
                            break
                        case hmApp.gesture.DOWN:
                            downFunc()
                            break
                        case hmApp.gesture.LEFT:
                            leftFunc()
                            break
                        case hmApp.gesture.RIGHT:
                            rightFunc()
                            break
                        default:
                            break
                    }
                    return true
                }
                function quitGame() {
                    hmApp.goBack()
                }
                hmApp.registerGestureEvent(moveFunc)
                const Rest = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 103,
                    y: 30,
                    w: 70,
                    h: 45,
                    press_color: 0x10999E,
                    normal_color: 0x14C6CC,
                    text: `reset`,
                    color: theme  == 0 ? 0xEFEFEF : 0x2f2f2f,
                    text_size: 25,
                    radius: 20,
                    click_func: gameInit
                })
                let scoreText = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 80,
                    w: 192,
                    h: 40,
                    color: 0x11999e,
                    text_size: 40,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WARP,
                    text: '0'
                })
                let bestScoreText = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 15,
                    y: 345,
                    w: 192,
                    h: 20,
                    color: 0x11999e,
                    text_size: 18,
                    align_h: hmUI.align.LEFT,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WARP,
                    text: `BEST:${bestScore}`
                })
                let levelText = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 120,
                    w: 192,
                    h: 20,
                    color: 0x11999e,
                    text_size: 20,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WARP,
                    text: `level:${level}`
                })
                let isOverText = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 0,
                    y: 245,
                    w: 192,
                    h: 20,
                    color: 0x11999e,
                    text_size: 40,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.WARP,
                    text: 'GameOver'
                })
                isOverText.setProperty(hmUI.prop.VISIBLE, false)
                let nextTipBlock = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 88,
                    y: 145,
                    w: 16,
                    h: 16,
                    radius: 3,
                    color: 0x11999e
                })
                let progressBar = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                    x: 15,
                    y: 170,
                    w: 0,
                    h: 5,
                    radius: 50,
                    color: theme  == 0 ? 0x46cdcf :  0x2f8586
                })
                const quit = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 15,
                    y: 30,
                    w: 70,
                    h: 45,
                    press_color: 0x10999E,
                    normal_color: 0x14C6CC,
                    text: `quit`,
                    color: theme  == 0 ? 0xEFEFEF : 0x2f2f2f,
                    text_size: 25,
                    radius: 20,
                    click_func: quitGame
                })
              }
            })