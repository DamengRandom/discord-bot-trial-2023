function convertToGua(number) {
  switch (number) {
    case 0:
    case 8:
      return "land";
    case 1:
      return "sky";
    case 2:
      return "swamp";
    case 3:
      return "fire";
    case 4:
      return "thunder";
    case 5:
      return "wind";
    case 6:
      return "water";
    case 7:
      return "mountain";
    default:
      return "none";
  }
}

function convertToYao(number) {
  switch (number) {
    case 0:
    case 6:
      return 6;
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return -1;
  }
}

function allGuas(result) {
  switch (result) {
    case "sky-sky":
      return "乾";
    case "land-land":
      return "坤";
    case "water-thunder":
      return "屯";
    case "mountain-water":
      return "蒙";
    case "water-sky":
      return "需";
    case "sky-water":
      return "讼";
    case "land-water":
      return "师";
    case "water-land":
      return "比";
    case "wind-sky":
      return "小畜";
    case "sky-swamp":
      return "履";
    case "land-sky":
      return "泰";
    case "sky-land":
      return "否";
    case "sky-fire":
      return "同人";
    case "fire-sky":
      return "大有";
    case "land-mountain":
      return "谦";
    case "thunder-land":
      return "豫";
    case "swamp-thunder":
      return "随";
    case "mountain-wind":
      return "蛊";
    case "land-swamp":
      return "临";
    case "wind-land":
      return "观";
    case "fire-thunder":
      return "噬嗑";
    case "mountain-fire":
      return "贲";
    case "mountain-land":
      return "剥";
    case "land-thunder":
      return "复";
    case "sky-thunder":
      return "无妄";
    case "mountain-sky":
      return "大畜";
    case "mountain-thunder":
      return "颐";
    case "swamp-wind":
      return "大过";
    case "water-water":
      return "坎";
    case "fire-fire":
      return "离";
    case "swamp-mountain":
      return "咸";
    case "thunder-wind":
      return "恒";
    case "sky-mountain":
      return "遁";
    case "thunder-sky":
      return "大壮";
    case "fire-land":
      return "晋";
    case "land-fire":
      return "明夷";
    case "wind-fire":
      return "家人";
    case "fire-swamp":
      return "睽";
    case "water-mountain":
      return "蹇";
    case "thunder-water":
      return "解";
    case "mountain-swamp":
      return "损";
    case "wind-thunder":
      return "益";
    case "swamp-sky":
      return "夬";
    case "sky-wind":
      return "姤";
    case "swamp-land":
      return "萃";
    case "land-wind":
      return "升";
    case "swamp-water":
      return "困";
    case "water-wind":
      return "井";
    case "swamp-fire":
      return "革";
    case "fire-wind":
      return "鼎";
    case "thunder-thunder":
      return "震";
    case "mountain-mountain":
      return "艮";
    case "wind-mountain":
      return "渐";
    case "thunder-swamp":
      return "归妹";
    case "thunder-fire":
      return "丰";
    case "fire-mountain":
      return "旅";
    case "wind-wind":
      return "巽";
    case "swamp-swamp":
      return "兑";
    case "wind-water":
      return "涣";
    case "water-swamp":
      return "节";
    case "wind-swamp":
      return "中孚";
    case "thunder-mountain":
      return "小过";
    case "water-fire":
      return "既济";
    case "fire-water":
      return "未济";
    default:
      return "无";
  }
}

function allYaos(gua) {
  switch (gua) {
    case "sky-sky":
    case "乾":
      return ["初九", "九二", "九三", "九四", "九五", "上九"];
    case "land-land":
    case "坤":
      return ["初六", "六二", "六三", "六四", "六五", "上六"];
    case "water-thunder":
    case "屯":
      return ["初九", "六二", "六三", "六四", "九五", "上六"];
    case "mountain-water":
    case "蒙":
      return ["初六", "九二", "六三", "六四", "六五", "上九"];
    case "water-sky":
    case "需":
      return ["初九", "九二", "九三", "六四", "九五", "上六"];
    case "sky-water":
    case "讼":
      return ["初六", "九二", "六三", "九四", "九五", "上九"];
    case "land-water":
    case "师":
      return ["初六", "九二", "六三", "六四", "六五", "上六"];
    case "water-land":
    case "比":
      return ["初六", "六二", "六三", "六四", "九五", "上六"];
    case "wind-sky":
    case "小畜":
      return ["初九", "九二", "九三", "六四", "九五", "上九"];
    case "sky-swamp":
    case "履":
      return ["初九", "九二", "六三", "九四", "九五", "上九"];
    case "land-sky":
    case "泰":
      return ["初九", "九二", "九三", "六四", "六五", "上六"];
    case "sky-land":
    case "否":
      return ["初六", "六二", "六三", "九四", "九五", "上九"];
    case "sky-fire":
    case "同人":
      return ["初九", "六二", "九三", "九四", "九五", "上九"];
    case "fire-sky":
    case "大有":
      return ["初九", "九二", "九三", "九四", "六五", "上九"];
    case "land-mountain":
    case "谦":
      return ["初六", "六二", "九三", "六四", "六五", "上六"];
    case "thunder-land":
    case "豫":
      return ["初六", "六二", "六三", "九四", "六五", "上六"];
    case "swamp-thunder":
    case "随":
      return ["初九", "六二", "六三", "九四", "九五", "上六"];
    case "mountain-wind":
    case "蛊":
      return ["初六", "九二", "九三", "六四", "六五", "上九"];
    case "land-swamp":
    case "临":
      return ["初九", "九二", "六三", "六四", "六五", "上六"];
    case "wind-land":
    case "观":
      return ["初六", "六二", "六三", "六四", "九五", "上九"];
    case "fire-thunder":
    case "噬嗑":
      return ["初九", "六二", "六三", "九四", "六五", "上九"];
    case "mountain-fire":
    case "贲":
      return ["初九", "六二", "九三", "六四", "六五", "上九"];
    case "mountain-land":
    case "剥":
      return ["初六", "六二", "六三", "六四", "六五", "上九"];
    case "land-thunder":
    case "复":
      return ["初九", "六二", "六三", "六四", "六五", "上六"];
    case "sky-thunder":
    case "无妄":
      return ["初九", "六二", "六三", "九四", "九五", "上九"];
    case "mountain-sky":
    case "大畜":
      return ["初九", "九二", "九三", "六四", "六五", "上九"];
    case "mountain-thunder":
    case "颐":
      return ["初九", "六二", "六三", "六四", "六五", "上九"];
    case "swamp-wind":
    case "大过":
      return ["初六", "九二", "九三", "九四", "九五", "上六"];
    case "water-water":
    case "坎":
      return ["初六", "九二", "六三", "六四", "九五", "上六"];
    case "fire-fire":
    case "离":
      return ["初九", "六二", "九三", "九四", "六五", "上九"];
    case "swamp-mountain":
    case "咸":
      return ["初六", "六二", "九三", "九四", "九五", "上六"];
    case "thunder-wind":
    case "恒":
      return ["初六", "九二", "九三", "九四", "六五", "上六"];
    case "sky-mountain":
    case "遁":
      return ["初六", "六二", "九三", "九四", "九五", "上九"];
    case "thunder-sky":
    case "大壮":
      return ["初九", "九二", "九三", "九四", "六五", "上六"];
    case "fire-land":
    case "晋":
      return ["初六", "六二", "六三", "九四", "六五", "上九"];
    case "land-fire":
    case "明夷":
      return ["初九", "六二", "九三", "六四", "六五", "上六"];
    case "wind-fire":
    case "家人":
      return ["初九", "六二", "九三", "六四", "九五", "上九"];
    case "fire-swamp":
    case "睽":
      return ["初九", "九二", "六三", "九四", "六五", "上九"];
    case "water-mountain":
    case "蹇":
      return ["初六", "六二", "九三", "六四", "九五", "上六"];
    case "thunder-water":
    case "解":
      return ["初六", "九二", "六三", "九四", "六五", "上六"];
    case "mountain-swamp":
    case "损":
      return ["初九", "九二", "六三", "六四", "六五", "上九"];
    case "wind-thunder":
    case "益":
      return ["初九", "六二", "六三", "六四", "九五", "上九"];
    case "swamp-sky":
    case "夬":
      return ["初九", "九二", "九三", "九四", "九五", "上六"];
    case "sky-wind":
    case "姤":
      return ["初六", "九二", "九三", "九四", "九五", "上九"];
    case "swamp-land":
    case "萃":
      return ["初六", "六二", "六三", "九四", "九五", "上六"];
    case "land-wind":
    case "升":
      return ["初六", "九二", "九三", "六四", "六五", "上六"];
    case "swamp-water":
    case "困":
      return ["初六", "九二", "六三", "九四", "九五", "上六"];
    case "water-wind":
    case "井":
      return ["初六", "九二", "九三", "六四", "九五", "上六"];
    case "swamp-fire":
    case "革":
      return ["初九", "六二", "九三", "九四", "九五", "上六"];
    case "fire-wind":
    case "鼎":
      return ["初六", "九二", "九三", "九四", "六五", "上九"];
    case "thunder-thunder":
    case "震":
      return ["初九", "六二", "六三", "九四", "六五", "上六"];
    case "mountain-mountain":
    case "艮":
      return ["初六", "六二", "九三", "六四", "六五", "上九"];
    case "wind-mountain":
    case "渐":
      return ["初六", "六二", "九三", "六四", "九五", "上九"];
    case "thunder-swamp":
    case "归妹":
      return ["初九", "九二", "六三", "九四", "六五", "上六"];
    case "thunder-fire":
    case "丰":
      return ["初九", "六二", "九三", "九四", "六五", "上六"];
    case "fire-mountain":
    case "旅":
      return ["初六", "六二", "九三", "九四", "六五", "上九"];
    case "wind-wind":
    case "巽":
      return ["初六", "九二", "九三", "六四", "九五", "上九"];
    case "swamp-swamp":
    case "兑":
      return ["初九", "九二", "六三", "九四", "九五", "上六"];
    case "wind-water":
    case "涣":
      return ["初六", "九二", "六三", "六四", "九五", "上九"];
    case "water-swamp":
    case "节":
      return ["初九", "九二", "六三", "六四", "九五", "上六"];
    case "wind-swamp":
    case "中孚":
      return ["初九", "九二", "六三", "六四", "九五", "上九"];
    case "thunder-mountain":
    case "小过":
      return ["初六", "六二", "九三", "九四", "六五", "上六"];
    case "water-fire":
    case "既济":
      return ["初九", "六二", "九三", "六四", "九五", "上六"];
    case "fire-water":
    case "未济":
      return ["初六", "九二", "六三", "九四", "六五", "上九"];
    default:
      return ["无", "无", "无", "无", "无", "无"];
  }
}

function answer(guaYao) {
  switch (guaYao) {
    case "乾初九":
      return "潜藏的龙在深渊 暂时无法施展";
    case "乾九二":
      return "龙正在走出低谷 运用德行寻求机会（有利于大才大德的是出世）";
    case "乾九三":
      return "龙虽处境艰难 但坚持不懈 不断努力 即使遇到危险 也可避祸";
    case "乾九四":
      return "龙跳进深渊 伺机而动 没有灾难 时而上跃 时而潜退";
    case "乾九五":
      return "龙在天空中飞 大有所为";
    case "乾上九":
      return "升腾到极限的龙 会有灾祸之困";
    case "坤初六":
      return "阴冷天气逐渐形成 要遵循规律向前推进 寒冬将至";
    case "坤六二":
      return "有了 正直 端方 大气 的品德 即使不学习也没有什么坏处 说明美德充沛 行为不必有疑虑"; // @TODO
    case "坤六三":
      return "具备美好品德 可以正固 事情起初无所发展 但最后有好的结果";
    case "坤六四":
      return "谨言慎行 就会避免灾祸";
    case "坤六五":
      return "穿着黄色的裙裳 大吉大利";
    case "坤上六":
      return "龙在野外发生战斗 天玄地黄 龙血在天空中是黑色在地上的血为黄色"; // @TODO
    case "屯初九":
      return "虽然徘徊难进 但志行贞正 可坚持以退为进的策略";
    case "屯六二":
      return "首次出行 徘徊难进 女性十年才能孕育 前进艰难 现象较为反常";
    case "屯六三":
      return "放弃前行 若一意孤行 会有灾祸";
    case "屯六四":
      return "乘马的人纷纷而来 有婚配的欲求 会心想事成";
    case "屯九五":
      return "囤积资源 少囤积有利 过度囤积会有灾祸";
    case "屯上六":
      return "乘马的人纷纷而来 悲伤悲痛的情况发生";
    case "蒙初六":
      return "愚昧的初期 有利于用刑法惩治坏人 并且给冤屈者脱去枷锁 如果不专心学习去做事 将会带来困境"; // @TODO
    case "蒙九二":
      return "包容愚昧 和 娶妻 吉祥 儿子可以持家了";
    case "蒙六三":
      return "不适合娶这个女人为妻 因为此女子会遇男色而失身 这种行为不好导致不适合结婚 结果也不会好";
    case "蒙六四":
      return "被蒙昧无知的人所困惑 最终会有灾难";
    case "蒙六五":
      return "愚昧无知的人接受启发 吉兆";
    case "蒙上九":
      return "打击愚昧无知的人 不利于做贼寇 有利于防御贼寇"; // @TODO
    case "需初九":
      return "在郊野中等待 适宜持之以恒 可避免灾祸";
    case "需九二":
      return "身处沙地 虽然早到校人的责难 但最终是吉利的";
    case "需九三":
      return "在泥泞中行走 招致贼寇前来";
    case "需六四":
      return "身处血泊中 需要尽快逃离险境";
    case "需九五":
      return "在享用酒食中等待 正固吉祥";
    case "需上六":
      return "进入洞穴 虽然会看到不速之客 但尊敬他们 最后获得吉祥";
    case "讼初六":
      return "不要长期困于官司 减少口舌是非 最终获得吉祥";
    case "讼九二":
      return "官司失利后 应回家躲避 逃到小国 息事宁人";
    case "讼六三":
      return "应该安享旧日俸禄 不要起贪念 若是辅佐君王做事 包括从事公务员工作 即使取得了成就 也不要居功自傲";
    case "讼九四":
      return "不再起诉 安于现状 正固吉祥";
    case "讼九五":
      return "官司得到了公正的判决 最好的吉祥";
    case "讼上九":
      return "得到官位 但一天之内会多次失去"; // @TODO
    case "师初六":
      return "军纪严明 否则有灾祸";
    case "师九二":
      return "率军出征 正固 不偏不倚 可获吉祥 无灾祸 君王会多次嘉奖";
    case "师六三":
      return "士兵从战场上运辉尸体 凶险";
    case "师六四":
      return "率军及时撤退 可避祸";
    case "师六五":
      return "田间有动物 象征着有利于发表观点 无灾祸 有德的人可统帅军队 无德的人会战败 即使正固也有凶相";
    case "师上六":
      return "天子颁布诏命 论功封爵 需要重用君子远离小人";
    case "比初六":
      return "以诚待人 会得到更多的朋友 吉祥";
    case "比六二":
      return "加强内部团结 来辅佐君主 吉祥";
    case "比六三":
      return "亲附了不该亲附的人"; // @TODO
    case "比六四":
      return "交往中相互信任 加强团结 吉祥";
    case "比九五":
      return "光明正大交往 君王用三面包围的方式狩猎 失去前面的禽兽 老百姓不害怕君王 吉祥"; // @TODO
    case "比上六":
      return "结交不到首领 凶相";
    case "小畜初九":
      return "重复自己的做事风格 无灾且吉祥";
    case "小畜九二":
      return "被牵连而返回本位 吉祥";
    case "小畜九三":
      return "大车脱落了辐条 夫妻反目失和";
    case "小畜六四":
      return "有诚信 不再忧虑 从恐惧中走出来 无灾祸";
    case "小畜九五":
      return "诚信相连 与邻居共享富裕";
    case "小畜上九":
      return "所需雨水已积满要下雨了 最终可以安居 积德满载 妇女正固会有危险 月亮快要满盈 有德行的人远行凶险";
    case "履初九":
      return "衣着朴实无华 向前走无灾祸";
    case "履九二":
      return "走在平坦的大道上 安然的人占问此卦吉祥";
    case "履六三":
      return "眼睛快要瞎了 但勉强能看到一点点 腿跛了 但勉强能走几步 不小心踩在老虎尾巴上 老虎回头就咬人 凶险 勇敢的武士要竭力为君主效劳";
    case "履九四":
      return "踩在老虎尾巴上 恐惧最后退去 吉祥";
    case "履九五":
      return "奋不顾身 冒然前行 占卜此卦者 凶";
    case "履上九":
      return "不断反思审视自己的所作所为 最终吉祥";
    case "泰初九":
      return "拔出的茅草离开地面向上是吉利征兆 出门远行吉祥";
    case "泰九二":
      return "有包容大川似的宽广胸怀 可以徒步涉过大河急流 礼贤下士 对远方的贤德之人也不遗弃 不结成小团体 不结党营私 能够辅佐公正有道德的君主";
    case "泰九三":
      return "处境艰难 正固 没有灾祸 不要怕不能取信于人 在饮食方面有口福之吉";
    case "泰六四":
      return "轻松而不靠财富就能得到邻居的支持 由于诚信而不加戒备"; // @TODO
    case "泰六五":
      return "帝乙嫁女 因此而获得福泽 最为吉祥";
    case "泰上六":
      return "城墙倒塌在城壕里 不宜用兵 在城邑中祷告天命 占问必艰难之兆";
    case "否初六":
      return "拔出的茅草离开地面向上 吉利征兆 通达";
    case "否六二":
      return "包容成灾 小人吉祥 君子闭塞 通达"; // @TODO
    case "否六三":
      return "被包容而居于下位 最终招致羞辱";
    case "否九四":
      return "得到君王授命 没有灾祸 众人依附 共享福禄";
    case "否九五":
      return "君子不用躲避 君子可获吉祥 将要灭亡 将要灭亡 白自己拴在大桑树上 就会安然无恙";
    case "否上九":
      return "苦尽甘来 皆大欢喜";
    case "同人初九":
      return "走出大门 与人亲近 无灾祸";
    case "同人六二":
      return "亲近同族的人 必然艰难";
    case "同人九三":
      return "在草丛中设好伏兵 登高望远 三年不能发动战争";
    case "同人九四":
      return "占据城头之上 自行退兵而不进攻 可获吉祥";
    case "同人九五":
      return "与人同心同德 先哭后笑 大军会师 庆祝胜利";
    case "同人上九":
      return "与人在郊外亲善和睦 不会有困厄";
    case "大有初九":
      return "有人交往 不涉及利害 自然不会招致灾祸 须知 需要经历艰辛 才可避免灾祸";
    case "大有九二":
      return "用大车载物 无论去哪里 都不会有灾祸";
    case "大有九三":
      return "君王宴请公侯 小人不可以参与"; // @TODO
    case "大有九四":
      return "不骄不躁 无灾祸";
    case "大有六五":
      return "胸怀坦荡 上下以诚相待 威严自显 可获吉祥";
    case "大有上九":
      return "会得到上天的帮助 吉祥而无不利";
    case "谦初六":
      return "谦虚而富有美德的君子 梵语大江大河 可获吉祥";
    case "谦六二":
      return "谦虚之名传扬外界 正固吉祥";
    case "谦九三":
      return "有功而谦虚 君子保持谦逊 正固吉祥";
    case "谦六四":
      return "发扬谦逊美德 行事无往不利";
    case "谦六五":
      return "与邻国同遭侵略 则需共同应战 如此无往不利";
    case "谦上六":
      return "谦虚之名传扬外界 利于兴兵征伐 占领新的领地";
    case "豫初六":
      return "响应愉悦的态度 有凶险"; // @TODO
    case "豫六二":
      return "德行坚贞胜过磐石 不浪费生命 正固吉祥"; // @TODO
    case "豫六三":
      return "小人媚上以逸乐惑主 会有忧悔 悔恨太迟会更后悔"; // @TODO
    case "豫九四":
      return "喜乐自来 会有大的收获 不比猜疑 像簪子聚拢头发一样将朋友们聚集在一起";
    case "豫六五":
      return "占问疫病吉凶 得此卦者 会病期长 但不会死亡";
    case "豫上六":
      return "已处在天昏地暗的局面 去沉溺于寻欢作乐 十分危险 若改弦更张 可避免灾祸";
    case "随初九":
      return "官位有变动 正固吉祥 出门交友不会有过失"; // @TODO
    case "随六二":
      return "依附小人会失去德高望重的人";
    case "随六三":
      return "依附德高望重的人会失去小人 跟随有追求的人会有所得 利于正固";
    case "随九四":
      return "跟随别人去获得利益 即便守正道 也是凶 有诚信的做事 光明磊落 怎么会有错";
    case "随九五":
      return "真诚的随从嘉言善行 吉祥";
    case "随上六":
      return "先拘押起来 后又捆绑起来 成为君王在西山祭祀的牺牲品"; // @TODO
    case "蛊初六":
      return "改正父亲的过失 有了这样的儿子 父辈以及父辈以上可避免灾祸 即使开始会有危险 最后可获得吉祥";
    case "蛊九二":
      return "改正母亲的过失 不能固守专断"; // @TODO
    case "蛊九三":
      return "改正父亲的过失 即便遭遇小困难 但无大灾";
    case "蛊六四":
      return "姑息纵容父亲的过错 往往出现艰难";
    case "蛊六五":
      return "改正父亲的过失 会得到赞誉";
    case "蛊上九":
      return "不侍奉王侯 专注于自己的事业"; // @TODO
    case "临初九":
      return "心怀感化之心降临到民众 可获吉祥";
    case "临九二":
      return "心怀感化之心降临到民众 吉祥 无所不利";
    case "临六三":
      return "用钳制的政策治理民众 无益处 已然知晓自己的过失 无灾祸"; // @TODO
    case "临六四":
      return "亲子体察民情 无灾祸";
    case "临六五":
      return "以聪明才智实行督导 可以视为王道 可获吉祥";
    case "临上六":
      return "敦厚宽仁 体察民情 可获吉祥 无灾祸";
    case "观初六":
      return "以孩童的视角观察事物 小人没有灾祸 君子会有灾祸";
    case "观六二":
      return "暗中窥探观察 适宜女子正固";
    case "观六三":
      return "查醒自己的言行 审时度势 小心谨慎的决定进退"; // @TODO
    case "观六四":
      return "观察一个国家的风土人情 适宜用宾客之力朝见君王";
    case "观九五":
      return "观察同国的民情 君子无灾祸"; // @TODO
    case "观上九":
      return "观察外国的民情 君子无灾祸";
    case "噬嗑初九":
      return "脚上带上木枷 损伤了脚趾 无灾祸";
    case "噬嗑六二":
      return "咬食肥肉 使鼻子陷入肉中 无灾祸";
    case "噬嗑六三":
      return "咬腊肉干 中了毒 小有不顺 无灾祸";
    case "噬嗑九四":
      return "啃吃骨头 发现骨头中有金属箭头 卜问艰难之事 结果是吉利的"; // @TODO
    case "噬嗑六五":
      return "吃风干的肉 得到黄金 正固思危 无灾祸";
    case "噬嗑上九":
      return "肩带木枷遮住耳朵 有凶险";
    case "贲初九":
      return "修饰脚趾弃车步行而走";
    case "贲六二":
      return "修饰自己的胡须 帮助君王振兴国家"; // @TODO
    case "贲九三":
      return "修饰过后再加以润色 长期正固吉祥";
    case "贲六四":
      return "修饰得如此雅致 骑的白马有如此纯洁无暇 不是盗寇 是来求婚的佳人";
    case "贲六五":
      return "修饰山丘园林 用了大量的布帛 艰难 但最终会获得吉祥";
    case "贲上九":
      return "以白色为装饰 无灾祸";
    case "剥初六":
      return "剥落床体从床脚开始 致使床腿损坏 有凶险";
    case "剥六二":
      return "剥落床体从床头开始 致使床头损坏 有凶险";
    case "剥六三":
      return "剥落 无灾祸";
    case "剥六四":
      return "剥蚀到床板 有凶险";
    case "剥六五":
      return "像鱼鲜排成一行一样 以宫人的身份受到宠幸 无往不利";
    case "剥上九":
      return "不吃硕大的果子 君子得到民众的拥戴 小人遭到覆巢之灾";
    case "复初九":
      return "行而未远就适时而返 没有造成很大的悔意 大吉大利";
    case "复六二":
      return "停止返回 可获吉祥";
    case "复六三":
      return "频繁的返回 艰难 无灾祸";
    case "复六四":
      return "中途独自返回"; // @TODO
    case "复六五":
      return "敦厚笃诚的返回 没有悔恨";
    case "复上六":
      return "迷失在返回的途中 有凶险 会有灾难 出兵打仗 最终惨败凶险来自于国君 十年不可以出战"; // @TODO
    case "无妄初九":
      return "不妄为 按照自己的心志 前行吉祥";
    case "无妄六二":
      return "不耕耘却有收获 不开荒却有良田 则有利于有所作为";
    case "无妄六三":
      return "意想不到的灾祸到来 路人牵走被绳子拴住的耕牛 城里人有灾祸";
    case "无妄九四":
      return "可以正固 无灾祸";
    case "无妄九五":
      return "得了意想不到的疾病 不比用药治疗 自会痊愈";
    case "无妄上九":
      return "切勿妄为 将有灾祸 无益处";
    case "大畜初九":
      return "有危险 适宜停止";
    case "大畜九二":
      return "车身与车轴相分离";
    case "大畜九三":
      return "骏马互相追逐 有利于艰难中正固 每日演练战车防卫 适宜有所作为";
    case "大畜六四":
      return "在牛的角上拴上一根木头 大吉大利";
    case "大畜六五":
      return "是烈性的猪长出牙齿 可获吉祥"; // @TODO
    case "大畜上九":
      return "四通八达的道路 亨通顺畅";
    case "颐初九":
      return "自己储藏着大量的财宝 还要羡嫉人家的财物 必遭凶险之事"; // @TODO
    case "颐六二":
      return "为了糊口 就得在山坡上开荒种地 为了生计而去抢劫别人 这是凶险之事"; // @TODO
    case "颐六三":
      return "违反颐精养气之道 即使正固也有凶险 十年内不能施展才能 无益处";
    case "颐六四":
      return "所求不过糊口 害人之心不可存 吉利 虎视眈眈 防人之心不可无 这样就可以安享天年 悠然自得 无灾祸"; // @TODO
    case "颐六五":
      return "违反规律 在家正固 可获吉祥 不可以跨越大江大河";
    case "颐上九":
      return "遵循生活正道 先艰难而终吉利 筮遇此爻 有利于涉水渡河"; // @TODO
    case "大过初六":
      return "用洁净的茅草铺地以陈设祭品 无灾祸";
    case "大过九二":
      return "枯树发芽 老翁娶新妻 无所不利";
    case "大过九三":
      return "房梁弯曲 有凶险";
    case "大过九四":
      return "房梁隆起 可获吉祥 如果有意外发生 则行事艰难";
    case "大过九五":
      return "枯树开花 老妇与少男结合 无灾祸 无赞誉";
    case "大过上六":
      return "徒步过河 被水淹灭了 头顶 有凶险 无灾祸";
    case "坎初六":
      return "在重重险阻之中 掉入陷阱 有凶险";
    case "坎九二":
      return "在陷阱中经历危险 谋求小事 会有获得";
    case "坎六三":
      return "来来回回都处于险难之中 陷穴既险也深 一旦落入陷阱之中 暂时无法施展才能";
    case "坎六四":
      return "将一杯薄酒 两盘供品 用瓦罐装起来 从窗户送进简约的祭品 最后无灾祸"; // @TODO
    case "坎九五":
      return "陷穴尚未满溢 到需要稳定时则艰难自平 无灾祸"; // @TODO
    case "坎上六":
      return "用绳索将犯人捆绑起来放入荆棘草丛之中 三年不让解脱 比有凶险";
    case "离初九":
      return "步子错乱 但保持谨慎恭敬 无灾祸";
    case "离六二":
      return "有黄色附于物 大吉大利";
    case "离九三":
      return "太阳快要落山 如果不能边打击瓦罐边唱歌 就会发出垂老之人的哀叹 有凶险";
    case "离九四":
      return "突如其来 如同火焰熊熊燃烧 会有生命危险 会被抛弃"; // @TODO
    case "离六五":
      return "眼泪涌出的样子 悲戚哀叹的样子 然后可获吉祥"; // @TODO
    case "离上九":
      return "君王用贤人出门远行 对能够斩杀敌方首领的人给予嘉奖 不俘获一般的随从 无灾祸"; // @TODO
    case "咸初六":
      return "感应发生在脚上的大拇指 因势而动";
    case "咸六二":
      return "感应发生在小腿肚 有凶险 在家里不出来 可获吉祥";
    case "咸九三":
      return "感应发生在大腿 执迷于盲目追随别人 步履维艰";
    case "咸九四":
      return "可获吉祥 危难窘境会消失 即使心意不安 思绪不绝 朋友最后会顺从你的意愿";
    case "咸九五":
      return "感应发生在脊背上 不会有后悔";
    case "咸上六":
      return "感应发生在 口舌 牙床 面颊 都会因势而动";
    case "恒初六":
      return "有所追求 持续追求过于长 即使正固也有凶险 无益处";
    case "恒九二":
      return "窘境会消失";
    case "恒九三":
      return "不能长期保持美德 有时会蒙受羞辱 行事艰难";
    case "恒九四":
      return "田间没有禽兽";
    case "恒六五":
      return "长久的保持美德正固 女人可获得吉祥 男人会处境凶险";
    case "恒上六":
      return "震动不安 不能持之以恒 有凶险";
    case "遁初六":
      return "退避不及 落在后面 有凶险 暂时不宜作为 施展才能";
    case "遁六二":
      return "被黄牛皮绳捆绑 没有人能够逃脱";
    case "遁九三":
      return "由于被牵累而难以逃脱 会生病 有危险 畜养奴仆和侍妾 可获吉祥";
    case "遁九四":
      return "行事有利于逃跑时 君子可获吉祥 小人则难以挣脱";
    case "遁九五":
      return "选择最佳时机退出 可获吉祥";
    case "遁上九":
      return "远走高飞 完全退避 无所不利";
    case "大壮初九":
      return "脚趾变粗壮 出门远行 有凶险 需要有诚信"; // @TODO
    case "大壮九二":
      return "正固吉祥";
    case "大壮九三":
      return "小人靠力量 君子蔑视蛮力 正固有危险 公山羊用角顶篱笆 角被缠住"; // @TODO
    case "大壮九四":
      return "正固吉祥 忧悔消除 因为公羊冲决篱笆 摆脱了拘系 但又被车轮撞伤 不能乱冲乱撞了"; // @TODO
    case "大壮六五":
      return "在田边丢失山羊 不会有忧悔";
    case "大壮上六":
      return "公山羊用角顶篱笆 不能退后 不能前进 无益处 艰难过后可获吉祥";
    case "晋初六":
      return "晋升中遭遇挫折阻碍 正固吉祥 暂时没有收到信任 无灾祸";
    case "晋六二":
      return "晋升中遭遇忧愁 正固吉祥 将会从祖母那里受到宏大的恩泽";
    case "晋六三":
      return "获得众人的信任 忧悔消除";
    case "晋九四":
      return "今生如同 老鼠一样 即贪婪有没有一技之长 正固有危险";
    case "晋六五":
      return "忧悔消除 无需再为得失而忧虑 有所作为可获吉祥 无所不利";
    case "晋上九":
      return "晋升到了顶点 用征讨小国而建立功勋 危中有吉 无灾祸 正固有难";
    case "明夷初九":
      return "在昏暗中 就像飞鸟低垂着翅膀 惊慌飞行 君子若要退避隐藏 就是丢掉职位 三天没有吃饭 一旦有所作为 会受到主人的责备"; // @TODO
    case "明夷六二":
      return "在昏暗中 伤到左大腿 如果有良马来救 可获吉祥";
    case "明夷九三":
      return "在昏暗中 去南方狩猎 想获得丰厚 不可操之过急 正固"; // @TODO
    case "明夷六四":
      return "进入王宫内部 洞悉昏暗的内部情况 最后离开王宫庭院"; // 薇子 离开 商纣 王
    case "明夷六五":
      return "像箕子受难时一样 保持正固";
    case "明夷上六":
      return "不光明 晦暗 起初像天空中升起 最后又落到地上";
    case "家人初九":
      return "持家能够预防不测之灾 忧悔消亡";
    case "家人六二":
      return "不可随心所欲地追求外部事业与功名 而是尽心竭力的料理家中的饮食起居 可获吉祥";
    case "家人九三":
      return "治家过于严厉常常因为过分训斥家人而感到后悔 先凶后吉 夫人孩子嬉笑 不加约束 最后会有灾祸";
    case "家人六四":
      return "家庭富裕 大吉大利";
    case "家人九五":
      return "君王治国如治家一样 不必忧虑 可获吉祥";
    case "家人上九":
      return "心存诚信 严于持家 最后可获吉祥";
    case "睽初九":
      return "忧悔消除 丢失了的马 不必去追逐 马自会返回 谨慎谦虚地对待与自己对立的人 无灾祸";
    case "睽九二":
      return "在小巷中遇到主人 无灾祸";
    case "睽六三":
      return "看见大车艰难前行 驾车的牛受到牵制无法前行 驾车的人受到了 墨刑和劓刑 虽然历经磨难 但最终会有美好结局";
    case "睽九四":
      return "乖离而孤独 但刚好遇到一位贵人 交往中以诚相待 有危险 无灾祸"; // @TODO
    case "睽六五":
      return "忧悔消除 与族人一起吃肉 前进的路上还会有什么灾祸呢";
    case "睽上九":
      return "处于极其孤立的状态 恍惚之间看到一头背上涂满淤泥的猪 又看到一辆载有一车像鬼一样的人 开始想拉开弓箭准备射击 后来又放下弓箭 原来是迎亲的队伍 有所行动 遇到雨可获吉祥";
    case "蹇初六":
      return "有所行动 尽管行事艰难 但归来满载荣誉";
    case "蹇六二":
      return "君王的臣子遇到险难 不是因为自己的缘故"; // @TODO
    case "蹇九三":
      return "在外行动会遭遇艰难 不如及早返回";
    case "蹇六四":
      return "在外行动会遭遇艰难 返回时有车乘";
    case "蹇九五":
      return "行事十分艰难 朋友们纷纷来帮助";
    case "蹇上六":
      return "外出遭遇艰难 归来硕果累累可获吉祥 有利于大德大才的人出现";
    case "解初六":
      return "无灾祸";
    case "解九二":
      return "打猎时获得三只狐狸 又获得黄色箭矢 正固吉祥";
    case "解六三":
      return "背负着重物出行 招致贼寇抢劫 即使正固 也会有灾祸";
    case "解九四":
      return "像解开被绑的拇指一般摆脱小人的纠缠 朋友才会心怀诚信前来帮助";
    case "解六五":
      return "君王被束缚又得到解脱 可获吉祥 能够用诚信感化小人";
    case "解上六":
      return "王公用弓箭在高处射下一只大隼 并且捕获了 无往不利";
    case "损初九":
      return "停止自己的事情 尽快帮助他人 无灾祸 不过适当斟酌减损自己一部分利益就可以了"; // @TODO
    case "损九二":
      return "有利于正固 出门远行有凶险 不要减少 会得到增益"; // @TODO
    case "损六三":
      return "三个人一起前行 有一个人会受到伤害 一个人独行 就会遇到志同道合的朋友";
    case "损六四":
      return "尽快解决自身疾患 迎接喜庆的到来 无灾祸";
    case "损六五":
      return "有人送来价值连城的神龟 不要推辞 大吉大利";
    case "损上九":
      return "不要减少 会得到增益 无灾祸 正固吉祥 适宜有所行动 会得到臣民没有自己的家"; // @TODO
    case "益初九":
      return "有利于大展宏图 大吉大利 无灾祸";
    case "益六二":
      return "有人送来价值连城的神龟 不要推辞 恒久之事 正固吉祥 君王祭祀先帝 可获吉祥";
    case "益六三":
      return "将得到的好处来救助凶险之事 无灾祸 要以诚相待 时刻像手执玉圭向王公告急求助那样谨慎";
    case "益六四":
      return "执持守中正道谨慎行事 得到王公信任 有利于凭此来完成迁都利民的大业";
    case "益九五":
      return "心中有诚信 不用占问 就是 大吉大利 天下人一定会以仁爱之心回报我的仁爱之德";
    case "益上九":
      return "没有得到增益帮助 或者受到攻击 树立决心不够坚定 有凶险"; // @TODO
    case "夬初九":
      return "脚趾前部粗壮 冒然前行不会取胜 会招致灾祸";
    case "夬九二":
      return "受到惊吓发出声音 深夜有军队经过 不用担心";
    case "夬九三":
      return "面颊之间的骨头强壮 有凶险 君子毅然前行 独自遇雨受淋雨水淋湿了衣服 尽管有怨怒 无灾祸";
    case "夬九四":
      return "臀部无皮 行走艰难 如果能牵羊而行 忧悔消除 无耐听了这话的人并不相信";
    case "夬九五":
      return "细角山羊毅然前行 守中正道 无灾祸";
    case "夬上六":
      return "不要大声发出声音 因为凶险最终会到来";
    case "姤初六":
      return "紧紧缚在金属织具上 正固吉祥 急于有所行动 会遭遇到凶险 就像猪被捆绑住竭力挣扎一样";
    case "姤九二":
      return "厨房有鱼 无灾祸 不适宜宴请宾客";
    case "姤九三":
      return "屁股上没有皮肤 走路会很艰难 有危险 但无大灾祸";
    case "姤九四":
      return "厨房无鱼 会引发凶险";
    case "姤九五":
      return "用杞树萌护树下的瓜果 象征着蕴藏文采 会从天而降"; // @TODO
    case "姤上九":
      return "走入空荡的角落里 凶险 无灾祸";
    case "萃初六":
      return "心怀诚信但没有坚持到最后 出现了混乱与新的聚集 如果发出大的声音 就在此时占卜到 一握之数 随后大笑 不用忧虑 有所行动无灾祸"; // @TODO
    case "萃六二":
      return "迎来吉祥 无灾祸 心怀诚信有利于祭祀求福";
    case "萃六三":
      return "由于汇聚而产生叹息 无益处 有所行动无灾祸 小凶险";
    case "萃九四":
      return "大的吉祥 无灾祸";
    case "萃九五":
      return "汇聚而适得其位 无灾祸 但还不能获取众人的信任 开始并持续正固 忧悔消除";
    case "萃上六":
      return "悲伤叹息又痛哭流涕 没灾祸";
    case "升初六":
      return "不断长进上升 大的吉祥";
    case "升九二":
      return "心怀诚信有助于祭祀求福 无灾祸";
    case "升九三":
      return "上升到空旷的城邑 如入无人之境";
    case "升六四":
      return "君王来到岐山祭祀神灵 可获吉祥 无灾祸";
    case "升六五":
      return "正固吉祥 步步高升";
    case "升上六":
      return "深夜还要上升 有利于停止上升而正固";
    case "困初六":
      return "困坐在树干上无法安身 只得退居幽暗的山谷里 三年不能露面";
    case "困九二":
      return "喝醉了酒 大红祭祀衣服刚刚送来 正好用来祭祀 此时出门远行有凶险 无灾祸";
    case "困六三":
      return "被困到乱石之中 靠着有刺的荆棘爬了出来 回到家中 看不到妻子 有凶险";
    case "困九四":
      return "迈着步子缓缓走来 被一辆豪华的大车挡住了去路 有麻烦 但会有好的结果";
    case "困九五":
      return "使用割鼻断足刑罚来治理众人 困难是因红色祭服引起 因而就渐渐的不再穿了 有利于祭祀";
    case "困上六":
      return "被葛藤纠缠的惶恐不安有所行动会感到后悔 应该幡然悔悟 出门远行 可获吉祥";
    case "井初六":
      return "井底污泥淤积 井水已经不能再食用 井枯树死 飞鸟再也不来栖息";
    case "井九二":
      return "井中积水处被当作捉鱼的场所 用来打水的瓦罐破漏不能再用";
    case "井九三":
      return "井中淤泥已被清除仍然没有人取水食用 让人心生悲伤 井水已可食用 应该尽快来取水 君王圣明 与臣民共享恩泽"; // @TODO
    case "井六四":
      return "修整井壁 无灾祸";
    case "井九五":
      return "井水清澈明净就像甘甜凉爽的泉水一样 可供饮用";
    case "井上六":
      return "修整水井的事已然完成 无需再盖井口 此时心怀诚信 大吉大利";
    case "革初九":
      return "用黄牛皮绳牢牢拴住 以免轻举妄动";
    case "革六二":
      return "到了己日断然进行改革 出兵讨伐可获吉祥 无灾祸";
    case "革九三":
      return "出门远行会有凶险 即使正固也有危险 变革要集思广益 行动时要有诚信";
    case "革九四":
      return "忧悔消除 行动时要有诚信 改朝换代 顺天应命 可获吉祥";
    case "革九五":
      return "有才能的人变革时气势会像老虎一样威猛 不必占卜 也能有光大诚信的美德"; // @TODO
    case "革上六":
      return "有才能的人变革时行动会像豹子一样迅速 小人改变往日的面目 出兵讨伐会有凶险 居家守中 正固吉祥";
    case "鼎初六":
      return "大鼎翻倒 其足向上 适宜倒掉无用之物 就如同妻妾生子 其妾因子而被扶作正室 无灾祸";
    case "鼎九二":
      return "鼎中盛满食物 我的对手患了疾病 所以不能靠近我 可获吉祥"; // @TODO
    case "鼎九三":
      return "鼎的耳朵被破坏了 无法被移动 鼎里的山鸡汤也喝不成了 待到阴阳调和 润雨出现才能消除悔恨 最终可获吉祥";
    case "鼎九四":
      return "大鼎那堪重负导致鼎足断折 王公的美食都被倾倒出来 鼎身沾满污物 有凶险";
    case "鼎六五":
      return "大鼎配备上黄色的耳饰 鼎耳配备上铜制的吊环 有利于正固";
    case "鼎上九":
      return "鼎耳配有玉制的吊环 大为吉利 无所不利";
    case "震初九":
      return "雷霆极响 震的万物惊惶恐惧 虽有有谈笑风生 吉祥";
    case "震六二":
      return "雷霆极响待来危险 丢失钱财 应该登上九重高陵 不要追逐 七天内会失而复得";
    case "震六三":
      return "雷霆震动 惊惶不安 伴随着震动前行 无灾难";
    case "震九四":
      return "雷霆震动 惊慌失措 落入泥中";
    case "震六五":
      return "雷霆震动 上下往来都有危险 但无重大损失 会有事发生";
    case "震上六":
      return "雷霆震动 瑟瑟发抖 六神无主 出门远行有凶险 震动不是来自于自身而是来自于旁边的人 无灾祸 婚配会有责怪之言";
    case "艮初六":
      return "抑制脚趾使其难以起步 无灾祸 有利于占问长久之事";
    case "艮六二":
      return "抑制小腿肚运动 既然无法拯救别人 只好随别人行动 心中不能舒畅"; // @TODO
    case "艮九三":
      return "抑制腰部运动 以至于撕裂了夹脊肉 凶险就像烈火烧灼 让人心急如焚";
    case "艮六四":
      return "抑制身体上部运动 无灾祸";
    case "艮六五":
      return "抑制脸颊运动 使之说话有条理 忧悔消除";
    case "艮上九":
      return "敦厚的美德压制邪欲恶念 吉祥";
    case "渐初六":
      return "鸿雁飞行渐进到了河岸边 小雁有危险 被大雁叫住 无灾祸";
    case "渐六二":
      return "鸿雁飞行渐进到了磐石上 饮食和乐 吉祥";
    case "渐九三":
      return "鸿雁飞行渐进到了小山顶上 丈夫征战未归 妻子怀孕流产 凶险之兆 但有利于抗击盗寇";
    case "渐六四":
      return "鸿雁飞行渐进到了大树上 有的落到树枝上 没灾祸";
    case "渐九五":
      return "鸿雁飞行渐进到了山丘上 妇女三年不能怀孕 但邪不压正 最终可获吉祥"; // @TODO
    case "渐上九":
      return "鸿雁飞行渐进到了小山顶上 羽毛美丽到可以用来做仪式的上用的装饰 吉祥";
    case "归妹初九":
      return "少女出嫁 妹妹作为从嫁做偏房 就像跛脚的人奋力前行 出门远行可获吉祥";
    case "归妹九二":
      return "视力不好的人勉强凝视 有利于安恬隐居之人占问";
    case "归妹六三":
      return "少女出嫁 姐姐作为从嫁做偏房 被遣回娘家 又以妹妹的身份从嫁做偏房"; // @TODO
    case "归妹九四":
      return "少女出嫁多次延期 迟迟未嫁 为的是等待时机出嫁";
    case "归妹六五":
      return "帝乙嫁女 正室的服装反而不如陪嫁妹妹的服装华丽 成亲之日定在既望之日 吉祥";
    case "归妹上六":
      return "新娘提着空篮子里面没有果实 新郎杀羊却未见羊血 无益处";
    case "丰初九":
      return "遇到与自己匹配的人 十日内无灾祸 前往会得到尊重"; // @TODO
    case "丰六二":
      return "草棚遮蔽很大 中午出现满天星斗 有所举动会受人猜忌 心怀诚信悔消除疑虑 吉祥"; // @TODO
    case "丰九三":
      return "丰厚遮掩了光明的幔帐 中午一片昏暗 此时折断了右臂 无灾祸";
    case "丰九四":
      return "草棚遮蔽很大 中午出现满天星斗 阴暗不明朗 遇到外邦的主人 吉祥"; // @TODO
    case "丰六五":
      return "迎接光明 会带来喜庆与赞誉 吉祥";
    case "丰上六":
      return "房屋高大 遮蔽了其他人家 从门缝里往里面看 里面空无一人 三年不见有人 凶险";
    case "旅初六":
      return "外出旅行猥猥琐琐 举止多变 会招致灾祸";
    case "旅六二":
      return "旅行的人入住客店 怀里揣着钱财 得到僮仆 可以正固"; // @TODO
    case "旅九三":
      return "客店失了大火 童仆也跑了 即使正固也有危险";
    case "旅九四":
      return "旅行遭遇阻碍 尽管得到了一些钱财 但心中依然不愉快";
    case "旅六五":
      return "射杀野鸡 丢了一支箭矢 但到最后获得赞誉并受到封爵";
    case "旅上九":
      return "树上的鸟烧了自己的巢穴 旅行的人先笑后大哭 田边丢了牛 凶险之兆";
    case "巽初六":
      return "进进退退 停滞不前 有利于勇敢的人占问";
    case "巽九二":
      return "过分顺从而屈居床下 若过能效仿 巫师 勤勉忙碌的样子 吉祥 无灾祸";
    case "巽九三":
      return "一而再再而三的顺从他人 有凶险";
    case "巽六四":
      return "忧悔消除 打猎时捕获了三头禽兽";
    case "巽九五":
      return "正固吉祥 忧悔消除 无所不利 起初不顺利 但最后能畅通无阻 时间是 丁日 戊日 己日 和 辛日 壬日 癸日 吉祥"; // @TODO
    case "巽上九":
      return "谦卑恭顺到了极点而屈于床下 丧失了赖以谋生的资本 丧失了刚硬的本性 结果是凶险的"; // @TODO
    case "兑初九":
      return "平和喜悦的待人态度 有利于正固";
    case "兑九二":
      return "心怀诚信的待人态度 吉祥 忧悔消除";
    case "兑六三":
      return "前来求的喜悦 有凶险";
    case "兑九四":
      return "商议之中和睦欢愉 但事情没有办成 消除小毛病会有喜庆之事";
    case "兑九五":
      return "信任剥蚀阳刚的小人 有危险";
    case "兑上六":
      return "引诱别人与自己一起欢悦";
    case "涣初六":
      return "乘强壮之马去救济患难 吉祥";
    case "涣九二":
      return "大水流散 赶忙跑到 祭祀的案台 以祭告神灵祈求帮助 忧悔消除";
    case "涣六三":
      return "大水冲击自身 没有悔恨";
    case "涣六四":
      return "大水冲散了众人 大吉大利 大水冲上山陵 水势汹涌 可不是日常能够想象得到的";
    case "涣九五":
      return "君王频繁颁布诏令 君王居中守正可安居 无灾祸"; // @TODO
    case "涣上九":
      return "大水流散 能使得忧患消除 惊惧化解 无灾祸";
    case "节初九":
      return "不出自家内院 无灾祸";
    case "节九二":
      return "不出自家前院 有凶险";
    case "节六三":
      return "不节制自己 就会哀叹悲伤 无灾祸";
    case "节六四":
      return "安守于节俭 通达顺畅";
    case "节九五":
      return "以节俭为乐事 吉祥 有所行动必会得到奖赏";
    case "节上六":
      return "过度节俭 即使正固也有凶险 忧悔消除";
    case "中孚初九":
      return "安守诚信之徳吉祥之兆 假如有别的想法则不会安宁";
    case "中孚九二":
      return "鹤在树荫下鸣叫 小鹤应声附和 我有美酒一爵 愿与你共享其安乐";
    case "中孚六三":
      return "遭遇强大的对手 有时击鼓奋进 有时疲惫不前 有时悲愤哭泣 有时慷慨高歌";
    case "中孚六四":
      return "在既望这一天 走失了一匹好马 无灾祸";
    case "中孚九五":
      return "胸怀诚信并惦念他人 无灾祸";
    case "中孚上九":
      return "鸡鸣之声响彻天空 有凶险";
    case "小过初六":
      return "飞鸟带来了危险的兆头";
    case "小过六二":
      return "越过祖父 遇见祖母 没有赶上君王那里 而与其臣子接触 无灾祸"; // @TODO
    case "小过九三":
      return "不严加防范 会有被杀害的危险 有凶险";
    case "小过九四":
      return "无灾祸 不要越过也会遇到 有所行动会有危险 必须加以警惕 不可以有所作为 长久保持正固"; // @TODO
    case "小过六五":
      return "乌云密布却没有下雨 云气从西边郊区升起 王公狩猎射中了一只飞鸟 追到洞穴里才捕捉到";
    case "小过上六":
      return "不要越过也会遇到 就像飞鸟容易被射中 捕获 非常凶险 这就是灾难";
    case "既济初九":
      return "牵引着车轮前行 水弄湿了车尾 无灾祸";
    case "既济六二":
      return "妇人丢失了首饰 不要寻找 七日内会失而复得";
    case "既济九三":
      return "殷商君王攻打鬼方国 历经三年才打败鬼方 事关重大 不能重用小人";
    case "既济六四":
      return "华服即将变成破衣 应当始终警惕以防灾祸";
    case "既济九五":
      return "东面的邻国杀牛举行盛大的祭祀 不入西边的邻国举行简单的祭祀那样实享天福";
    case "既济上六":
      return "水沾湿了头颅 有危险";
    case "未济初六":
      return "水沾湿了尾巴 灾祸";
    case "未济九二":
      return "向后拖拽车轮而放缓前进的速度 正固吉祥";
    case "未济六三":
      return "事业未成 出门远行有凶险 但适宜跨越大江大河";
    case "未济九四":
      return "正固吉祥 忧悔消除 兴兵讨伐鬼方 三年获胜而获得大国的封赏";
    case "未济六五":
      return "正固吉祥 没有悔恨 君子的光辉在于诚实守信 吉祥";
    case "未济上九":
      return "心怀诚信 来喝酒 无灾祸 水沾湿了头颅 即使心怀诚信 也会失去"; // @TODO
    default:
      return "无";
  }
}

function answers(guaYao) {
  switch (guaYao) {
    case "乾初九":
      return {
        gua: "乾",
        guaCi: "元, 亨, 利, 贞.",
        yao: "初九",
        yaoCi: "潜龙勿用, 阳在下也.",
        origin: "潜龙勿用.",
        meaning: "潜藏的龙在深渊 暂时无法施展",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
          "https://www.youtube.com/embed/AgNmXyj9qG4",
          "https://www.youtube.com/embed/EV98_bD4Pgg",
          "https://www.youtube.com/embed/kuJVXOrQTIs",
          "https://www.youtube.com/embed/Nt-Xd3GFKKY",
          "https://www.youtube.com/embed/_dQstnEWEnQ",
          "https://www.youtube.com/embed/u74Kvtw-V60",
          "https://www.youtube.com/embed/c0Bv63B6hZU",
          "https://www.youtube.com/embed/bnKBiVKRBpA",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/IqJOQWiAp6c",
          "https://www.youtube.com/embed/LW4wOQ-pBJE",
        ],
        references: [
          "http://ly.yishihui.net/12820.htm",
          "https://www.guoyi360.com/64gua01/xj/169.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4103.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-1.html",
        ],
      };
    case "乾九二":
      return {
        gua: "乾",
        guaCi: "元, 亨, 利, 贞.",
        yao: "九二",
        yaoCi: "见龙在田, 德施普也.",
        origin: "见龙在田, 利见大人.",
        meaning: "龙正在走出低谷 运用德行寻求机会 有利于大才大德的是出世",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
          "https://www.youtube.com/embed/AgNmXyj9qG4",
          "https://www.youtube.com/embed/EV98_bD4Pgg",
          "https://www.youtube.com/embed/kuJVXOrQTIs",
          "https://www.youtube.com/embed/Nt-Xd3GFKKY",
          "https://www.youtube.com/embed/_dQstnEWEnQ",
          "https://www.youtube.com/embed/u74Kvtw-V60",
          "https://www.youtube.com/embed/c0Bv63B6hZU",
          "https://www.youtube.com/embed/bnKBiVKRBpA",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/IqJOQWiAp6c",
          "https://www.youtube.com/embed/LW4wOQ-pBJE",
        ],
        references: [
          "http://ly.yishihui.net/12818.htm",
          "https://www.guoyi360.com/64gua01/xj/170.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4103.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-1.html",
        ],
      };
    case "乾九三":
      return {
        gua: "乾",
        guaCi: "元, 亨, 利, 贞.",
        yao: "九三",
        yaoCi: "终日乾乾, 反复道也.",
        origin: "君子终日乾乾, 夕惕若; 厉, 无咎.",
        meaning: "龙虽处境艰难 但坚持不懈 不断努力 即使遇到危险 也可避祸",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
          "https://www.youtube.com/embed/AgNmXyj9qG4",
          "https://www.youtube.com/embed/EV98_bD4Pgg",
          "https://www.youtube.com/embed/kuJVXOrQTIs",
          "https://www.youtube.com/embed/Nt-Xd3GFKKY",
          "https://www.youtube.com/embed/_dQstnEWEnQ",
          "https://www.youtube.com/embed/u74Kvtw-V60",
          "https://www.youtube.com/embed/c0Bv63B6hZU",
          "https://www.youtube.com/embed/bnKBiVKRBpA",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/IqJOQWiAp6c",
          "https://www.youtube.com/embed/LW4wOQ-pBJE",
        ],
        references: [
          "http://ly.yishihui.net/12816.htm",
          "https://www.guoyi360.com/64gua01/xj/496.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4103.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-1.html",
        ],
      };
    case "乾九四":
      return {
        gua: "乾",
        guaCi: "元, 亨, 利, 贞.",
        yao: "九四",
        yaoCi: "或跃在渊, 进无咎也.",
        origin: "或跃在渊, 无咎.",
        meaning: "龙跳进深渊 伺机而动 没有灾难 时而上跃 时而潜退",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
          "https://www.youtube.com/embed/AgNmXyj9qG4",
          "https://www.youtube.com/embed/EV98_bD4Pgg",
          "https://www.youtube.com/embed/kuJVXOrQTIs",
          "https://www.youtube.com/embed/Nt-Xd3GFKKY",
          "https://www.youtube.com/embed/_dQstnEWEnQ",
          "https://www.youtube.com/embed/u74Kvtw-V60",
          "https://www.youtube.com/embed/c0Bv63B6hZU",
          "https://www.youtube.com/embed/bnKBiVKRBpA",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/IqJOQWiAp6c",
          "https://www.youtube.com/embed/LW4wOQ-pBJE",
        ],
        references: [
          "http://ly.yishihui.net/12814.htm",
          "https://www.guoyi360.com/64gua01/xj/499.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4103.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-1.html",
        ],
      };
    case "乾九五":
      return {
        gua: "乾",
        guaCi: "元, 亨, 利, 贞.",
        yao: "九五",
        yaoCi: "飞龙在天, 大人造也.",
        origin: "飞龙在天, 利见大人.",
        meaning: "龙在天空中飞 大有所为",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
          "https://www.youtube.com/embed/AgNmXyj9qG4",
          "https://www.youtube.com/embed/EV98_bD4Pgg",
          "https://www.youtube.com/embed/kuJVXOrQTIs",
          "https://www.youtube.com/embed/Nt-Xd3GFKKY",
          "https://www.youtube.com/embed/_dQstnEWEnQ",
          "https://www.youtube.com/embed/u74Kvtw-V60",
          "https://www.youtube.com/embed/c0Bv63B6hZU",
          "https://www.youtube.com/embed/bnKBiVKRBpA",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/IqJOQWiAp6c",
          "https://www.youtube.com/embed/LW4wOQ-pBJE",
        ],
        references: [
          "http://ly.yishihui.net/12812.htm",
          "https://www.guoyi360.com/64gua01/xj/883.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4103.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-1.html",
        ],
      };
    case "乾上九":
      return {
        gua: "乾",
        guaCi: "元, 亨, 利, 贞.",
        yao: "上九",
        yaoCi: "亢龙有悔, 盈不可久也.",
        origin: "亢龙有悔.",
        meaning: "升腾到极限的龙 会有灾祸之困",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
          "https://www.youtube.com/embed/AgNmXyj9qG4",
          "https://www.youtube.com/embed/EV98_bD4Pgg",
          "https://www.youtube.com/embed/kuJVXOrQTIs",
          "https://www.youtube.com/embed/Nt-Xd3GFKKY",
          "https://www.youtube.com/embed/_dQstnEWEnQ",
          "https://www.youtube.com/embed/u74Kvtw-V60",
          "https://www.youtube.com/embed/c0Bv63B6hZU",
          "https://www.youtube.com/embed/bnKBiVKRBpA",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/IqJOQWiAp6c",
          "https://www.youtube.com/embed/LW4wOQ-pBJE",
        ],
        references: [
          "http://ly.yishihui.net/12810.htm",
          "https://www.guoyi360.com/64gua01/xj/884.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4103.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-1.html",
        ],
      };
    case "坤初六":
      return {
        gua: "坤",
        guaCi:
          "元亨, 利牝马之贞. 君子有攸往, 先迷后得主. 利西南得朋, 东北丧朋. 安贞吉.",
        yao: "初六",
        yaoCi: "履霜坚冰, 阴始凝也. 驯致其道, 至坚冰也.",
        origin: "履霜, 坚冰至.",
        meaning: "阴冷天气逐渐形成 要遵循规律向前推进 寒冬将至",
        videoUrls: [
          "https://www.youtube.com/embed/q9XjjmQo0iQ",
          "https://www.youtube.com/embed/VebbObrlL6o",
          "https://www.youtube.com/embed/OHsoKOu8e94",
          "https://www.youtube.com/embed/o-cwrgmtSg8",
          "https://www.youtube.com/embed/9bWFV-W25tU",
          "https://www.youtube.com/embed/KNU8sWEAfFc",
          "https://www.youtube.com/embed/8dRInl5MNg4",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/BKlQ3VdAuvQ",
          "https://www.youtube.com/embed/lRbEBt2saJs",
        ],
        references: [
          "http://ly.yishihui.net/12843.htm",
          "https://www.guoyi360.com/64gua02/xj/888.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4105.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-2.html",
        ],
      };
    case "坤六二":
      return {
        gua: "坤",
        guaCi:
          "元亨, 利牝马之贞. 君子有攸往, 先迷后得主. 利西南得朋, 东北丧朋. 安贞吉.",
        yao: "六二",
        yaoCi: "六二之动, 直以方也. 不习, 无不利, 地道光也.",
        origin: "直方大, 不习, 无不利.",
        meaning:
          "有了 正直 端方 大气 的品德 即使不学习也没有什么坏处 说明美德充沛 行为不必有疑虑",
        videoUrls: [
          "https://www.youtube.com/embed/q9XjjmQo0iQ",
          "https://www.youtube.com/embed/VebbObrlL6o",
          "https://www.youtube.com/embed/OHsoKOu8e94",
          "https://www.youtube.com/embed/o-cwrgmtSg8",
          "https://www.youtube.com/embed/9bWFV-W25tU",
          "https://www.youtube.com/embed/KNU8sWEAfFc",
          "https://www.youtube.com/embed/8dRInl5MNg4",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/BKlQ3VdAuvQ",
          "https://www.youtube.com/embed/lRbEBt2saJs",
        ],
        references: [
          "http://ly.yishihui.net/12841.htm",
          "https://www.guoyi360.com/64gua02/xj/889.html",
          "https://www.zhihu.com/question/265662585",
          "https://www.zhouyi.cc/zhouyi/yijing64/4105.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-2.html",
        ],
      };
    case "坤六三":
      return {
        gua: "坤",
        guaCi:
          "元亨, 利牝马之贞. 君子有攸往, 先迷后得主. 利西南得朋, 东北丧朋. 安贞吉.",
        yao: "六三",
        yaoCi: "含章可贞; 以时发也. 或从王事, 知光大也.",
        origin: "含章可贞. 或从王事, 无成有终.",
        meaning: "具备美好品德 可以正固 事情起初无所发展 但最后有好的结果",
        videoUrls: [
          "https://www.youtube.com/embed/q9XjjmQo0iQ",
          "https://www.youtube.com/embed/VebbObrlL6o",
          "https://www.youtube.com/embed/OHsoKOu8e94",
          "https://www.youtube.com/embed/o-cwrgmtSg8",
          "https://www.youtube.com/embed/9bWFV-W25tU",
          "https://www.youtube.com/embed/KNU8sWEAfFc",
          "https://www.youtube.com/embed/8dRInl5MNg4",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/BKlQ3VdAuvQ",
          "https://www.youtube.com/embed/lRbEBt2saJs",
        ],
        references: [
          "http://ly.yishihui.net/12839.htm",
          "https://www.guoyi360.com/64gua02/xj/890.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4105.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-2.html",
        ],
      };
    case "坤六四":
      return {
        gua: "坤",
        guaCi:
          "元亨, 利牝马之贞. 君子有攸往, 先迷后得主. 利西南得朋, 东北丧朋. 安贞吉.",
        yao: "六四",
        yaoCi: "括囊无咎, 慎不害也.",
        origin: "括囊, 无咎, 无誉.",
        meaning: "谨言慎行 就会避免灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/q9XjjmQo0iQ",
          "https://www.youtube.com/embed/VebbObrlL6o",
          "https://www.youtube.com/embed/OHsoKOu8e94",
          "https://www.youtube.com/embed/o-cwrgmtSg8",
          "https://www.youtube.com/embed/9bWFV-W25tU",
          "https://www.youtube.com/embed/KNU8sWEAfFc",
          "https://www.youtube.com/embed/8dRInl5MNg4",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/BKlQ3VdAuvQ",
          "https://www.youtube.com/embed/lRbEBt2saJs",
        ],
        references: [
          "http://ly.yishihui.net/12837.htm",
          "https://www.guoyi360.com/64gua02/xj/891.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4105.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-2.html",
        ],
      };
    case "坤六五":
      return {
        gua: "坤",
        guaCi:
          "元亨, 利牝马之贞. 君子有攸往, 先迷后得主. 利西南得朋, 东北丧朋. 安贞吉.",
        yao: "六五",
        yaoCi: "黄裳元吉, 文在中也.",
        origin: "黄裳, 元吉.",
        meaning: "穿着黄色的裙裳 大吉大利",
        videoUrls: [
          "https://www.youtube.com/embed/q9XjjmQo0iQ",
          "https://www.youtube.com/embed/VebbObrlL6o",
          "https://www.youtube.com/embed/OHsoKOu8e94",
          "https://www.youtube.com/embed/o-cwrgmtSg8",
          "https://www.youtube.com/embed/9bWFV-W25tU",
          "https://www.youtube.com/embed/KNU8sWEAfFc",
          "https://www.youtube.com/embed/8dRInl5MNg4",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/BKlQ3VdAuvQ",
          "https://www.youtube.com/embed/lRbEBt2saJs",
        ],
        references: [
          "http://ly.yishihui.net/12835.htm",
          "https://www.guoyi360.com/64gua02/xj/892.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4105.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-2.html",
        ],
      };
    case "坤上六":
      return {
        gua: "坤",
        guaCi:
          "元亨, 利牝马之贞. 君子有攸往, 先迷后得主. 利西南得朋, 东北丧朋. 安贞吉.",
        yao: "上六",
        yaoCi: "龙战于野, 其道穷也.",
        origin: "龙战于野, 其血玄黄.",
        meaning: "龙在野外发生战斗 天玄地黄 龙血在天空中是黑色在地上的血为黄色",
        videoUrls: [
          "https://www.youtube.com/embed/q9XjjmQo0iQ",
          "https://www.youtube.com/embed/VebbObrlL6o",
          "https://www.youtube.com/embed/OHsoKOu8e94",
          "https://www.youtube.com/embed/o-cwrgmtSg8",
          "https://www.youtube.com/embed/9bWFV-W25tU",
          "https://www.youtube.com/embed/KNU8sWEAfFc",
          "https://www.youtube.com/embed/8dRInl5MNg4",
          "https://www.youtube.com/embed/86A1yIjoMFA",
          "https://www.youtube.com/embed/BKlQ3VdAuvQ",
          "https://www.youtube.com/embed/lRbEBt2saJs",
        ],
        references: [
          "http://ly.yishihui.net/12833.htm",
          "https://www.guoyi360.com/64gua02/xj/893.html",
          "https://baike.baidu.com/item/%E5%A4%A9%E5%9C%B0%E7%8E%84%E9%BB%84/45289",
          "https://www.zhouyi.cc/zhouyi/yijing64/4105.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-2.html",
        ],
      };
    case "屯初九":
      return {
        gua: "屯",
        guaCi: "元亨利贞. 勿用有攸往, 利建侯.",
        yao: "初九",
        yaoCi: "虽磐桓, 志行正也. 以贵下贱, 大得民也.",
        origin: "磐桓, 利居贞, 利建侯.",
        meaning: "虽然徘徊难进 但志行贞正 可坚持以退为进的策略",
        videoUrls: [
          "https://www.youtube.com/embed/IOpg_Tt47NQ",
          "https://www.youtube.com/embed/_WKNJAowg20",
          "https://www.youtube.com/embed/tUBMaiZ046c",
          "https://www.youtube.com/embed/y3ixbImhxmI",
          "https://www.youtube.com/embed/jvRUnEYBKgE",
          "https://www.youtube.com/embed/tImJu2Vitv8",
          "https://www.youtube.com/embed/j-XlklJ0Ebo",
        ],
        references: [
          "http://ly.yishihui.net/12855.htm",
          "https://www.guoyi360.com/64gua03/xj/930.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4106.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-3.html",
        ],
      };
    case "屯六二":
      return {
        gua: "屯",
        guaCi: "元亨利贞. 勿用有攸往, 利建侯.",
        yao: "六二",
        yaoCi: "六二之难, 乘刚也. 十年乃字, 反常也.",
        origin: "屯如邅如, 乘马班如. 匪寇婚媾, 女子贞不字, 十年乃字.",
        meaning: "首次出行 徘徊难进 女性十年才能孕育 前进艰难 现象较为反常",
        videoUrls: [
          "https://www.youtube.com/embed/IOpg_Tt47NQ",
          "https://www.youtube.com/embed/_WKNJAowg20",
          "https://www.youtube.com/embed/tUBMaiZ046c",
          "https://www.youtube.com/embed/y3ixbImhxmI",
          "https://www.youtube.com/embed/jvRUnEYBKgE",
          "https://www.youtube.com/embed/tImJu2Vitv8",
          "https://www.youtube.com/embed/j-XlklJ0Ebo",
        ],
        references: [
          "http://ly.yishihui.net/12853.htm",
          "https://www.guoyi360.com/64gua03/xj/958.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4106.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-3.html",
        ],
      };
    case "屯六三":
      return {
        gua: "屯",
        guaCi: "元亨利贞. 勿用有攸往, 利建侯.",
        yao: "六三",
        yaoCi: "既鹿无虞, 以纵禽也. 君子舍之, 往吝, 穷也.",
        origin: "即鹿无虞, 惟入于林中. 君子几不如舍. 往吝.",
        meaning: "放弃前行 若一意孤行 会有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/IOpg_Tt47NQ",
          "https://www.youtube.com/embed/_WKNJAowg20",
          "https://www.youtube.com/embed/tUBMaiZ046c",
          "https://www.youtube.com/embed/y3ixbImhxmI",
          "https://www.youtube.com/embed/jvRUnEYBKgE",
          "https://www.youtube.com/embed/tImJu2Vitv8",
          "https://www.youtube.com/embed/j-XlklJ0Ebo",
        ],
        references: [
          "http://ly.yishihui.net/12851.htm",
          "https://www.guoyi360.com/64gua03/xj/959.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4106.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-3.html",
        ],
      };
    case "屯六四":
      return {
        gua: "屯",
        guaCi: "元亨利贞. 勿用有攸往, 利建侯.",
        yao: "六四",
        yaoCi: "求而往, 明也.",
        origin: "乘马班如, 求婚媾, 往吉, 无不利.",
        meaning: "乘马的人纷纷而来 有婚配的欲求 会心想事成",
        videoUrls: [
          "https://www.youtube.com/embed/IOpg_Tt47NQ",
          "https://www.youtube.com/embed/_WKNJAowg20",
          "https://www.youtube.com/embed/tUBMaiZ046c",
          "https://www.youtube.com/embed/y3ixbImhxmI",
          "https://www.youtube.com/embed/jvRUnEYBKgE",
          "https://www.youtube.com/embed/tImJu2Vitv8",
          "https://www.youtube.com/embed/j-XlklJ0Ebo",
        ],
        references: [
          "http://ly.yishihui.net/12849.htm",
          "https://www.guoyi360.com/64gua03/xj/960.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4106.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-3.html",
        ],
      };
    case "屯九五":
      return {
        gua: "屯",
        guaCi: "元亨利贞. 勿用有攸往, 利建侯.",
        yao: "九五",
        yaoCi: "屯其膏, 施未光也.",
        origin: "屯其膏, 小贞吉, 大贞凶.",
        meaning: "囤积资源 少囤积有利 过度囤积会有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/IOpg_Tt47NQ",
          "https://www.youtube.com/embed/_WKNJAowg20",
          "https://www.youtube.com/embed/tUBMaiZ046c",
          "https://www.youtube.com/embed/y3ixbImhxmI",
          "https://www.youtube.com/embed/jvRUnEYBKgE",
          "https://www.youtube.com/embed/tImJu2Vitv8",
          "https://www.youtube.com/embed/j-XlklJ0Ebo",
        ],
        references: [
          "http://ly.yishihui.net/12847.htm",
          "https://www.guoyi360.com/64gua03/xj/961.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4106.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-3.html",
        ],
      };
    case "屯上六":
      return {
        gua: "屯",
        guaCi: "元亨利贞. 勿用有攸往, 利建侯.",
        yao: "上六",
        yaoCi: "泣血涟如, 何可长也.",
        origin: "乘马班如, 泣血涟如.",
        meaning: "乘马的人纷纷而来 悲伤悲痛的情况发生",
        videoUrls: [
          "https://www.youtube.com/embed/IOpg_Tt47NQ",
          "https://www.youtube.com/embed/_WKNJAowg20",
          "https://www.youtube.com/embed/tUBMaiZ046c",
          "https://www.youtube.com/embed/y3ixbImhxmI",
          "https://www.youtube.com/embed/jvRUnEYBKgE",
          "https://www.youtube.com/embed/tImJu2Vitv8",
          "https://www.youtube.com/embed/j-XlklJ0Ebo",
        ],
        references: [
          "http://ly.yishihui.net/12845.htm",
          "https://www.guoyi360.com/64gua03/xj/962.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4106.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-3.html",
        ],
      };
    case "蒙初六":
      return {
        gua: "蒙",
        guaCi: "亨. 匪我求童蒙, 童蒙求我. 初筮告, 再三渎, 渎则不告. 利贞.",
        yao: "初六",
        yaoCi: "利用刑人, 以正法也.",
        origin: "发蒙, 利用刑人, 用说桎梏; 以往吝.",
        meaning:
          "愚昧的初期 有利于用刑法惩治坏人 并且给冤屈者脱去枷锁 如果不专心学习去做事 将会带来困境",
        videoUrls: [
          "https://www.youtube.com/embed/5Z-fmmk9V5c",
          "https://www.youtube.com/embed/SeknFxJOV7o1",
          "https://www.youtube.com/embed/c8yHbxAzkO02",
          "https://www.youtube.com/embed/68AaET1tBNA",
          "https://www.youtube.com/embed/_r3DZjJw7wk",
          "https://www.youtube.com/embed/uYFgT_t-j5E",
          "https://www.youtube.com/embed/T1TU-wmo9h0",
          "https://www.youtube.com/embed/oRNd21qAVss",
        ],
        references: [
          "http://ly.yishihui.net/12867.htm",
          "https://www.guoyi360.com/64gua04/xj/965.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4107.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-4.html",
        ],
      };
    case "蒙九二":
      return {
        gua: "蒙",
        guaCi: "亨. 匪我求童蒙, 童蒙求我. 初筮告, 再三渎, 渎则不告. 利贞.",
        yao: "九二",
        yaoCi: "子克家, 刚柔接也.",
        origin: "包蒙吉. 纳妇吉. 子克家.",
        meaning: "包容愚昧 娶妻吉祥 儿子可以持家了",
        videoUrls: [
          "https://www.youtube.com/embed/5Z-fmmk9V5c",
          "https://www.youtube.com/embed/SeknFxJOV7o1",
          "https://www.youtube.com/embed/c8yHbxAzkO02",
          "https://www.youtube.com/embed/68AaET1tBNA",
          "https://www.youtube.com/embed/_r3DZjJw7wk",
          "https://www.youtube.com/embed/uYFgT_t-j5E",
          "https://www.youtube.com/embed/T1TU-wmo9h0",
          "https://www.youtube.com/embed/oRNd21qAVss",
        ],
        references: [
          "http://ly.yishihui.net/12865.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4107.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-4.html",
        ],
      };
    case "蒙六三":
      return {
        gua: "蒙",
        guaCi: "亨. 匪我求童蒙, 童蒙求我. 初筮告, 再三渎, 渎则不告. 利贞.",
        yao: "六三",
        yaoCi: "勿用取女, 行不顺也.",
        origin: "勿用取女, 见金夫, 不有躬. 无攸利.",
        meaning:
          "不适合娶这个女人为妻 因为此女子会遇男色而失身 这种行为不好导致不适合结婚 结果也不会好",
        videoUrls: [
          "https://www.youtube.com/embed/5Z-fmmk9V5c",
          "https://www.youtube.com/embed/SeknFxJOV7o1",
          "https://www.youtube.com/embed/c8yHbxAzkO02",
          "https://www.youtube.com/embed/68AaET1tBNA",
          "https://www.youtube.com/embed/_r3DZjJw7wk",
          "https://www.youtube.com/embed/uYFgT_t-j5E",
          "https://www.youtube.com/embed/T1TU-wmo9h0",
          "https://www.youtube.com/embed/oRNd21qAVss",
        ],
        references: [
          "http://ly.yishihui.net/12863.htm",
          "https://www.guoyi360.com/64gua04/xj/967.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4107.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-4.html",
        ],
      };
    case "蒙六四":
      return {
        gua: "蒙",
        guaCi: "亨. 匪我求童蒙, 童蒙求我. 初筮告, 再三渎, 渎则不告. 利贞.",
        yao: "六四",
        yaoCi: "困蒙之吝, 独远实也.",
        origin: "困蒙, 吝.",
        meaning: "被蒙昧无知的人所困惑 最终会有灾难",
        videoUrls: [
          "https://www.youtube.com/embed/5Z-fmmk9V5c",
          "https://www.youtube.com/embed/SeknFxJOV7o1",
          "https://www.youtube.com/embed/c8yHbxAzkO02",
          "https://www.youtube.com/embed/68AaET1tBNA",
          "https://www.youtube.com/embed/_r3DZjJw7wk",
          "https://www.youtube.com/embed/uYFgT_t-j5E",
          "https://www.youtube.com/embed/T1TU-wmo9h0",
          "https://www.youtube.com/embed/oRNd21qAVss",
        ],
        references: [
          "http://ly.yishihui.net/12861.htm",
          "https://www.guoyi360.com/64gua04/xj/968.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4107.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-4.html",
        ],
      };
    case "蒙六五":
      return {
        gua: "蒙",
        guaCi: "亨. 匪我求童蒙, 童蒙求我. 初筮告, 再三渎, 渎则不告. 利贞.",
        yao: "六五",
        yaoCi: "童蒙之吉, 顺以巽也.",
        origin: "童蒙, 吉.",
        meaning: "愚昧无知的人接受启发 吉兆",
        videoUrls: [
          "https://www.youtube.com/embed/5Z-fmmk9V5c",
          "https://www.youtube.com/embed/SeknFxJOV7o1",
          "https://www.youtube.com/embed/c8yHbxAzkO02",
          "https://www.youtube.com/embed/68AaET1tBNA",
          "https://www.youtube.com/embed/_r3DZjJw7wk",
          "https://www.youtube.com/embed/uYFgT_t-j5E",
          "https://www.youtube.com/embed/T1TU-wmo9h0",
          "https://www.youtube.com/embed/oRNd21qAVss",
        ],
        references: [
          "http://ly.yishihui.net/12859.htm",
          "https://www.guoyi360.com/64gua04/xj/969.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4107.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-4.html",
        ],
      };
    case "蒙上九":
      return {
        gua: "蒙",
        guaCi: "亨. 匪我求童蒙, 童蒙求我. 初筮告, 再三渎, 渎则不告. 利贞.",
        yao: "上九",
        yaoCi: "利用御寇, 上下顺也.",
        origin: "击蒙. 不利为寇, 利御寇.",
        meaning: "打击愚昧无知的人 不利于做贼寇 有利于防御贼寇",
        videoUrls: [
          "https://www.youtube.com/embed/5Z-fmmk9V5c",
          "https://www.youtube.com/embed/SeknFxJOV7o1",
          "https://www.youtube.com/embed/c8yHbxAzkO02",
          "https://www.youtube.com/embed/68AaET1tBNA",
          "https://www.youtube.com/embed/_r3DZjJw7wk",
          "https://www.youtube.com/embed/uYFgT_t-j5E",
          "https://www.youtube.com/embed/T1TU-wmo9h0",
          "https://www.youtube.com/embed/oRNd21qAVss",
        ],
        references: [
          "http://ly.yishihui.net/12857.htm",
          "https://www.guoyi360.com/64gua04/xj/970.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4107.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-4.html",
        ],
      };
    case "需初九":
      return {
        gua: "需",
        guaCi: "有孚, 光亨, 贞吉. 利涉大川.",
        yao: "初九",
        yaoCi: "需于郊, 不犯难行也. 利用恒, 无咎; 未失常也.",
        origin: "需于郊, 利用恒, 无咎.",
        meaning: "在郊野中等待 适宜持之以恒 可避免灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/9qyoWMG5X7E",
          "https://www.youtube.com/embed/UFU9-bLNcDA",
          "https://www.youtube.com/embed/eOrljm6Pmys",
          "https://www.youtube.com/embed/VTctxzdF7IE",
          "https://www.youtube.com/embed/QXV4cw9ugAc",
          "https://www.youtube.com/embed/f-PnGIr-phY",
          "https://www.youtube.com/embed/aJWUjMr4VS0",
        ],
        references: [
          "http://ly.yishihui.net/12879.htm",
          "https://www.guoyi360.com/64gua05/xj/973.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4108.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-5.html",
        ],
      };
    case "需九二":
      return {
        gua: "需",
        guaCi: "有孚, 光亨, 贞吉. 利涉大川.",
        yao: "九二",
        yaoCi: "需于沙, 衍在中也. 虽小有言, 以终吉也.",
        origin: "需于沙, 小有言, 终吉.",
        meaning: "身处沙地 虽然早到校人的责难 但最终是吉利的",
        videoUrls: [
          "https://www.youtube.com/embed/9qyoWMG5X7E",
          "https://www.youtube.com/embed/UFU9-bLNcDA",
          "https://www.youtube.com/embed/eOrljm6Pmys",
          "https://www.youtube.com/embed/VTctxzdF7IE",
          "https://www.youtube.com/embed/QXV4cw9ugAc",
          "https://www.youtube.com/embed/f-PnGIr-phY",
          "https://www.youtube.com/embed/aJWUjMr4VS0",
        ],
        references: [
          "http://ly.yishihui.net/12877.htm",
          "https://www.guoyi360.com/64gua05/xj/974.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4108.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-5.html",
        ],
      };
    case "需九三":
      return {
        gua: "需",
        guaCi: "有孚, 光亨, 贞吉. 利涉大川.",
        yao: "九三",
        yaoCi: "需于泥, 灾在外也. 自我致寇, 敬慎不败也.",
        origin: "需于泥, 致寇至.",
        meaning: "在泥泞中行走 招致贼寇前来",
        videoUrls: [
          "https://www.youtube.com/embed/9qyoWMG5X7E",
          "https://www.youtube.com/embed/UFU9-bLNcDA",
          "https://www.youtube.com/embed/eOrljm6Pmys",
          "https://www.youtube.com/embed/VTctxzdF7IE",
          "https://www.youtube.com/embed/QXV4cw9ugAc",
          "https://www.youtube.com/embed/f-PnGIr-phY",
          "https://www.youtube.com/embed/aJWUjMr4VS0",
        ],
        references: [
          "http://ly.yishihui.net/12875.htm",
          "https://www.guoyi360.com/64gua05/xj/975.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4108.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-5.html",
        ],
      };
    case "需六四":
      return {
        gua: "需",
        guaCi: "有孚, 光亨, 贞吉. 利涉大川.",
        yao: "六四",
        yaoCi: "需于血, 顺以听也.",
        origin: "需于血, 出自穴.",
        meaning: "身处血泊中 需要尽快逃离险境",
        videoUrls: [
          "https://www.youtube.com/embed/9qyoWMG5X7E",
          "https://www.youtube.com/embed/UFU9-bLNcDA",
          "https://www.youtube.com/embed/eOrljm6Pmys",
          "https://www.youtube.com/embed/VTctxzdF7IE",
          "https://www.youtube.com/embed/QXV4cw9ugAc",
          "https://www.youtube.com/embed/f-PnGIr-phY",
          "https://www.youtube.com/embed/aJWUjMr4VS0",
        ],
        references: [
          "http://ly.yishihui.net/12873.htm",
          "https://www.guoyi360.com/64gua05/xj/976.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4108.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-5.html",
        ],
      };
    case "需九五":
      return {
        gua: "需",
        guaCi: "有孚, 光亨, 贞吉. 利涉大川.",
        yao: "九五",
        yaoCi: "酒食贞吉, 以中正也.",
        origin: "需于酒食, 贞吉.",
        meaning: "在享用酒食中等待 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/9qyoWMG5X7E",
          "https://www.youtube.com/embed/UFU9-bLNcDA",
          "https://www.youtube.com/embed/eOrljm6Pmys",
          "https://www.youtube.com/embed/VTctxzdF7IE",
          "https://www.youtube.com/embed/QXV4cw9ugAc",
          "https://www.youtube.com/embed/f-PnGIr-phY",
          "https://www.youtube.com/embed/aJWUjMr4VS0",
        ],
        references: [
          "http://ly.yishihui.net/12871.htm",
          "https://www.guoyi360.com/64gua05/xj/977.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4108.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-5.html",
        ],
      };
    case "需上六":
      return {
        gua: "需",
        guaCi: "有孚, 光亨, 贞吉. 利涉大川.",
        yao: "上六",
        yaoCi: "不速之客来, 敬之终吉. 虽不当位, 未大失也.",
        origin: "入于穴, 有不速之客三人来, 敬之终吉.",
        meaning: "进入洞穴 虽然会看到不速之客 但尊敬他们 最后获得吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/9qyoWMG5X7E",
          "https://www.youtube.com/embed/UFU9-bLNcDA",
          "https://www.youtube.com/embed/eOrljm6Pmys",
          "https://www.youtube.com/embed/VTctxzdF7IE",
          "https://www.youtube.com/embed/QXV4cw9ugAc",
          "https://www.youtube.com/embed/f-PnGIr-phY",
          "https://www.youtube.com/embed/aJWUjMr4VS0",
        ],
        references: [
          "http://ly.yishihui.net/12869.htm",
          "https://www.guoyi360.com/64gua05/xj/978.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4108.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-5.html",
        ],
      };
    case "讼初六":
      return {
        gua: "讼",
        guaCi: "有孚, 窒惕, 中吉. 终凶. 利见大人, 不利涉大川.",
        yao: "初六",
        yaoCi: "不永所事, 讼不可长也. 虽有小言, 其辩明也.",
        origin: "不永所事, 小有言, 终吉.",
        meaning: "不要长期困于官司 减少口舌是非 最终获得吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/PyzmelpqTsQ",
          "https://www.youtube.com/embed/pMDRsP5eEPM",
          "https://www.youtube.com/embed/KFL3fWs5vJQ",
          "https://www.youtube.com/embed/39uhZsS9xE",
          "https://www.youtube.com/embed/eo6pO9YNbiI",
          "https://www.youtube.com/embed/xGEZCzbn8Rw",
          "https://www.youtube.com/embed/KBxxv2zftZ0",
        ],
        references: [
          "http://ly.yishihui.net/12933.htm",
          "https://www.guoyi360.com/64gua06/xj/1020.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4109.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-6.html",
        ],
      };
    case "讼九二":
      return {
        gua: "讼",
        guaCi: "有孚, 窒惕, 中吉. 终凶. 利见大人, 不利涉大川.",
        yao: "九二",
        yaoCi: "不克讼, 归逋窜也. 自下讼上, 患至掇也.",
        origin: "不克讼, 归而逋, 其邑人三百户无眚.",
        meaning: "官司失利后 应回家躲避 逃到小国 息事宁人",
        videoUrls: [
          "https://www.youtube.com/embed/PyzmelpqTsQ",
          "https://www.youtube.com/embed/pMDRsP5eEPM",
          "https://www.youtube.com/embed/KFL3fWs5vJQ",
          "https://www.youtube.com/embed/39uhZsS9xE",
          "https://www.youtube.com/embed/eo6pO9YNbiI",
          "https://www.youtube.com/embed/xGEZCzbn8Rw",
          "https://www.youtube.com/embed/KBxxv2zftZ0",
        ],
        references: [
          "http://ly.yishihui.net/12929.htm",
          "https://www.guoyi360.com/64gua06/xj/1021.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4109.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-6.html",
        ],
      };
    case "讼六三":
      return {
        gua: "讼",
        guaCi: "有孚, 窒惕, 中吉. 终凶. 利见大人, 不利涉大川.",
        yao: "六三",
        yaoCi: "食旧德, 从上吉也.",
        origin: "食旧德, 贞厉, 终吉. 或从王事, 无成.",
        meaning:
          "应该安享旧日俸禄 不要起贪念 若是辅佐君王做事 包括从事公务员工作 即使取得了成就 也不要居功自傲",
        videoUrls: [
          "https://www.youtube.com/embed/PyzmelpqTsQ",
          "https://www.youtube.com/embed/pMDRsP5eEPM",
          "https://www.youtube.com/embed/KFL3fWs5vJQ",
          "https://www.youtube.com/embed/39uhZsS9xE",
          "https://www.youtube.com/embed/eo6pO9YNbiI",
          "https://www.youtube.com/embed/xGEZCzbn8Rw",
          "https://www.youtube.com/embed/KBxxv2zftZ0",
        ],
        references: [
          "http://ly.yishihui.net/12931.htm",
          "https://www.guoyi360.com/64gua06/xj/1022.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4109.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-6.html",
        ],
      };
    case "讼九四":
      return {
        gua: "讼",
        guaCi: "有孚, 窒惕, 中吉. 终凶. 利见大人, 不利涉大川.",
        yao: "九四",
        yaoCi: "复即命, 渝安贞; 不失也.",
        origin: "不克讼, 复即命, 渝安贞, 吉.",
        meaning: "不再起诉 安于现状 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/PyzmelpqTsQ",
          "https://www.youtube.com/embed/pMDRsP5eEPM",
          "https://www.youtube.com/embed/KFL3fWs5vJQ",
          "https://www.youtube.com/embed/39uhZsS9xE",
          "https://www.youtube.com/embed/eo6pO9YNbiI",
          "https://www.youtube.com/embed/xGEZCzbn8Rw",
          "https://www.youtube.com/embed/KBxxv2zftZ0",
        ],
        references: [
          "http://ly.yishihui.net/12925.htm",
          "https://www.guoyi360.com/64gua06/xj/1023.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4109.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-6.html",
        ],
      };
    case "讼九五":
      return {
        gua: "讼",
        guaCi: "有孚, 窒惕, 中吉. 终凶. 利见大人, 不利涉大川.",
        yao: "九五",
        yaoCi: "讼, 元吉, 以中正也.",
        origin: "讼, 元吉.",
        meaning: "官司得到了公正的判决 最好的吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/PyzmelpqTsQ",
          "https://www.youtube.com/embed/pMDRsP5eEPM",
          "https://www.youtube.com/embed/KFL3fWs5vJQ",
          "https://www.youtube.com/embed/39uhZsS9xE",
          "https://www.youtube.com/embed/eo6pO9YNbiI",
          "https://www.youtube.com/embed/xGEZCzbn8Rw",
          "https://www.youtube.com/embed/KBxxv2zftZ0",
        ],
        references: [
          "http://ly.yishihui.net/12927.htm",
          "https://www.guoyi360.com/64gua06/xj/1024.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4109.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-6.html",
        ],
      };
    case "讼上九":
      return {
        gua: "讼",
        guaCi: "有孚, 窒惕, 中吉. 终凶. 利见大人, 不利涉大川.",
        yao: "上九",
        yaoCi: "以讼受福, 亦不足敬也.",
        origin: "或锡之鞶带, 终朝三褫之.",
        meaning: "得到官位 但一天之内会多次失去",
        videoUrls: [
          "https://www.youtube.com/embed/PyzmelpqTsQ",
          "https://www.youtube.com/embed/pMDRsP5eEPM",
          "https://www.youtube.com/embed/KFL3fWs5vJQ",
          "https://www.youtube.com/embed/39uhZsS9xE",
          "https://www.youtube.com/embed/eo6pO9YNbiI",
          "https://www.youtube.com/embed/xGEZCzbn8Rw",
          "https://www.youtube.com/embed/KBxxv2zftZ0",
        ],
        references: [
          "http://ly.yishihui.net/12923.htm",
          "https://www.guoyi360.com/64gua06/xj/1025.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4109.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-6.html",
        ],
      };
    case "师初六":
      return {
        gua: "师",
        guaCi: "贞, 丈人吉, 无咎.",
        yao: "初六",
        yaoCi: "师出以律, 失律凶也.",
        origin: "师出以律, 否臧凶.",
        meaning: "军纪严明 否则有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/XQFom8sDlZo",
          "https://www.youtube.com/embed/ggXNNGP5bd8",
          "https://www.youtube.com/embed/yklfL49CN1k",
          "https://www.youtube.com/embed/NyAwr3r2o18",
          "https://www.youtube.com/embed/q9JB72S9KNM",
          "https://www.youtube.com/embed/BvJt3bIQo0A",
          "https://www.youtube.com/embed/TuP1hv_0nMk",
        ],
        references: [
          "http://ly.yishihui.net/12988.htm",
          "https://www.guoyi360.com/64gua07/xj/1028.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4110.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-7.html",
        ],
      };
    case "师九二":
      return {
        gua: "师",
        guaCi: "贞, 丈人吉, 无咎.",
        yao: "九二",
        yaoCi: "在师中吉, 承天宠也. 王三锡命, 怀万邦也.",
        origin: "在师中，吉无咎，王三锡命.",
        meaning: "率军出征 正固 不偏不倚 可获吉祥 无灾祸 君王会多次嘉奖",
        videoUrls: [
          "https://www.youtube.com/embed/XQFom8sDlZo",
          "https://www.youtube.com/embed/ggXNNGP5bd8",
          "https://www.youtube.com/embed/yklfL49CN1k",
          "https://www.youtube.com/embed/NyAwr3r2o18",
          "https://www.youtube.com/embed/q9JB72S9KNM",
          "https://www.youtube.com/embed/BvJt3bIQo0A",
          "https://www.youtube.com/embed/TuP1hv_0nMk",
        ],
        references: [
          "http://ly.yishihui.net/12986.htm",
          "https://www.guoyi360.com/64gua07/xj/1029.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4110.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-7.html",
        ],
      };
    case "师六三":
      return {
        gua: "师",
        guaCi: "贞, 丈人吉, 无咎.",
        yao: "六三",
        yaoCi: "师或舆尸, 大无功也.",
        origin: "师或舆尸, 凶.",
        meaning: "士兵从战场上运辉尸体 凶险",
        videoUrls: [
          "https://www.youtube.com/embed/XQFom8sDlZo",
          "https://www.youtube.com/embed/ggXNNGP5bd8",
          "https://www.youtube.com/embed/yklfL49CN1k",
          "https://www.youtube.com/embed/NyAwr3r2o18",
          "https://www.youtube.com/embed/q9JB72S9KNM",
          "https://www.youtube.com/embed/BvJt3bIQo0A",
          "https://www.youtube.com/embed/TuP1hv_0nMk",
        ],
        references: [
          "http://ly.yishihui.net/12984.htm",
          "https://www.guoyi360.com/64gua07/xj/1030.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4110.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-7.html",
        ],
      };
    case "师六四":
      return {
        gua: "师",
        guaCi: "贞, 丈人吉, 无咎.",
        yao: "六四",
        yaoCi: "左次无咎, 未失常也.",
        origin: "师左次, 无咎.",
        meaning: "率军及时撤退 可避祸",
        videoUrls: [
          "https://www.youtube.com/embed/XQFom8sDlZo",
          "https://www.youtube.com/embed/ggXNNGP5bd8",
          "https://www.youtube.com/embed/yklfL49CN1k",
          "https://www.youtube.com/embed/NyAwr3r2o18",
          "https://www.youtube.com/embed/q9JB72S9KNM",
          "https://www.youtube.com/embed/BvJt3bIQo0A",
          "https://www.youtube.com/embed/TuP1hv_0nMk",
        ],
        references: [
          "http://ly.yishihui.net/12982.htm",
          "https://www.guoyi360.com/64gua07/xj/1031.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4110.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-7.html",
        ],
      };
    case "师六五":
      return {
        gua: "师",
        guaCi: "贞, 丈人吉, 无咎.",
        yao: "六五",
        yaoCi: "长子帅师, 以中行也. 弟子舆师, 使不当也.",
        origin: "田有禽, 利执言, 无咎. 长子帅师, 弟子舆尸, 贞凶.",
        meaning:
          "田间有动物 象征着有利于发表观点 无灾祸 有德的人可统帅军队 无德的人会战败 即使正固也有凶相",
        videoUrls: [
          "https://www.youtube.com/embed/XQFom8sDlZo",
          "https://www.youtube.com/embed/ggXNNGP5bd8",
          "https://www.youtube.com/embed/yklfL49CN1k",
          "https://www.youtube.com/embed/NyAwr3r2o18",
          "https://www.youtube.com/embed/q9JB72S9KNM",
          "https://www.youtube.com/embed/BvJt3bIQo0A",
          "https://www.youtube.com/embed/TuP1hv_0nMk",
        ],
        references: [
          "http://ly.yishihui.net/12980.htm",
          "https://www.guoyi360.com/64gua07/xj/1032.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4110.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-7.html",
        ],
      };
    case "师上六":
      return {
        gua: "师",
        guaCi: "贞, 丈人吉, 无咎.",
        yao: "上六",
        yaoCi: "大君有命, 以正功也. 小人勿用, 必乱邦也.",
        origin: "大君有命, 开国承家, 小人勿用.",
        meaning: "天子颁布诏命 论功封爵 需要重用君子远离小人",
        videoUrls: [
          "https://www.youtube.com/embed/XQFom8sDlZo",
          "https://www.youtube.com/embed/ggXNNGP5bd8",
          "https://www.youtube.com/embed/yklfL49CN1k",
          "https://www.youtube.com/embed/NyAwr3r2o18",
          "https://www.youtube.com/embed/q9JB72S9KNM",
          "https://www.youtube.com/embed/BvJt3bIQo0A",
          "https://www.youtube.com/embed/TuP1hv_0nMk",
        ],
        references: [
          "http://ly.yishihui.net/12978.htm",
          "https://www.guoyi360.com/64gua07/xj/1033.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4110.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-7.html",
        ],
      };
    case "比初六":
      return {
        gua: "比",
        guaCi: "吉. 原筮, 元永贞, 无咎. 不宁方来, 后夫凶.",
        yao: "初六",
        yaoCi: "比之初六, 有它吉也.",
        origin: "有孚比之, 无咎. 有孚盈缶, 终来有它吉.",
        meaning: "以诚待人 会得到更多的朋友 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/GBZas8k7mRs",
          "https://www.youtube.com/embed/Ivzhda1-prw",
          "https://www.youtube.com/embed/fUGXz8WW3mM",
          "https://www.youtube.com/embed/mHZ_cfpzXZ0",
          "https://www.youtube.com/embed/kr_puPdkwM0",
          "https://www.youtube.com/embed/Nz5FF7pYQlw",
          "https://www.youtube.com/embed/6J6HNvqCutc",
        ],
        references: [
          "http://ly.yishihui.net/12976.htm",
          "https://www.guoyi360.com/64gua08/xj/1068.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4111.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-8.html",
        ],
      };
    case "比六二":
      return {
        gua: "比",
        guaCi: "吉. 原筮, 元永贞, 无咎. 不宁方来, 后夫凶.",
        yao: "六二",
        yaoCi: "比之自内, 不自失也.",
        origin: "比之自内, 贞吉.",
        meaning: "加强内部团结 来辅佐君主 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/GBZas8k7mRs",
          "https://www.youtube.com/embed/Ivzhda1-prw",
          "https://www.youtube.com/embed/fUGXz8WW3mM",
          "https://www.youtube.com/embed/mHZ_cfpzXZ0",
          "https://www.youtube.com/embed/kr_puPdkwM0",
          "https://www.youtube.com/embed/Nz5FF7pYQlw",
          "https://www.youtube.com/embed/6J6HNvqCutc",
        ],
        references: [
          "http://ly.yishihui.net/12974.htm",
          "https://www.guoyi360.com/64gua08/xj/1069.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4111.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-8.html",
        ],
      };
    case "比六三":
      return {
        gua: "比",
        guaCi: "吉. 原筮, 元永贞, 无咎. 不宁方来, 后夫凶.",
        yao: "六三",
        yaoCi: "比之匪人, 不亦伤乎?",
        origin: "比之匪人.",
        meaning: "亲附了不该亲附的人",
        videoUrls: [
          "https://www.youtube.com/embed/GBZas8k7mRs",
          "https://www.youtube.com/embed/Ivzhda1-prw",
          "https://www.youtube.com/embed/fUGXz8WW3mM",
          "https://www.youtube.com/embed/mHZ_cfpzXZ0",
          "https://www.youtube.com/embed/kr_puPdkwM0",
          "https://www.youtube.com/embed/Nz5FF7pYQlw",
          "https://www.youtube.com/embed/6J6HNvqCutc",
        ],
        references: [
          "http://ly.yishihui.net/12972.htm",
          "https://www.guoyi360.com/64gua08/xj/1070.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4111.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-8.html",
        ],
      };
    case "比六四":
      return {
        gua: "比",
        guaCi: "吉. 原筮, 元永贞, 无咎. 不宁方来, 后夫凶.",
        yao: "六四",
        yaoCi: "外比于贤, 以从上也.",
        origin: "外比之, 贞吉.",
        meaning: "交往中相互信任 加强团结 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/GBZas8k7mRs",
          "https://www.youtube.com/embed/Ivzhda1-prw",
          "https://www.youtube.com/embed/fUGXz8WW3mM",
          "https://www.youtube.com/embed/mHZ_cfpzXZ0",
          "https://www.youtube.com/embed/kr_puPdkwM0",
          "https://www.youtube.com/embed/Nz5FF7pYQlw",
          "https://www.youtube.com/embed/6J6HNvqCutc",
        ],
        references: [
          "http://ly.yishihui.net/12970.htm",
          "https://www.guoyi360.com/64gua08/xj/1071.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4111.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-8.html",
        ],
      };
    case "比九五":
      return {
        gua: "比",
        guaCi: "吉. 原筮, 元永贞, 无咎. 不宁方来, 后夫凶.",
        yao: "九五",
        yaoCi: "显比之吉, 位正中也. 舍逆取顺, 失前禽也. 邑人不诫, 上使中也.",
        origin: "显比, 王用三驱, 失前禽. 邑人不诫, 吉.",
        meaning:
          "光明正大交往 君王用三面包围的方式狩猎 失去前面的禽兽 老百姓不害怕君王 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/GBZas8k7mRs",
          "https://www.youtube.com/embed/Ivzhda1-prw",
          "https://www.youtube.com/embed/fUGXz8WW3mM",
          "https://www.youtube.com/embed/mHZ_cfpzXZ0",
          "https://www.youtube.com/embed/kr_puPdkwM0",
          "https://www.youtube.com/embed/Nz5FF7pYQlw",
          "https://www.youtube.com/embed/6J6HNvqCutc",
        ],
        references: [
          "http://ly.yishihui.net/12968.htm",
          "https://www.guoyi360.com/64gua08/xj/1072.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4111.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-8.html",
        ],
      };
    case "比上六":
      return {
        gua: "比",
        guaCi: "吉. 原筮, 元永贞, 无咎. 不宁方来, 后夫凶.",
        yao: "上六",
        yaoCi: "比之无首, 无所终也.",
        origin: "比之无首, 凶.",
        meaning: "结交不到首领 凶相",
        videoUrls: [
          "https://www.youtube.com/embed/GBZas8k7mRs",
          "https://www.youtube.com/embed/Ivzhda1-prw",
          "https://www.youtube.com/embed/fUGXz8WW3mM",
          "https://www.youtube.com/embed/mHZ_cfpzXZ0",
          "https://www.youtube.com/embed/kr_puPdkwM0",
          "https://www.youtube.com/embed/Nz5FF7pYQlw",
          "https://www.youtube.com/embed/6J6HNvqCutc",
        ],
        references: [
          "http://ly.yishihui.net/12966.htm",
          "https://www.guoyi360.com/64gua08/xj/1073.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4111.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-8.html",
        ],
      };
    case "小畜初九":
      return {
        gua: "小畜",
        guaCi: "亨. 密云不雨, 自我西郊.",
        yao: "初九",
        yaoCi: "复自道, 其义吉也.",
        origin: "复自道, 何其咎? 吉.",
        meaning: "重复自己的做事风格 无灾且吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/R5QnvJ_ZTcQ",
          "https://www.youtube.com/embed/YXaQjSFBWRQ",
          "https://www.youtube.com/embed/6N1oRKrX4zM",
          "https://www.youtube.com/embed/supq39Qc4Ig",
          "https://www.youtube.com/embed/gHsW3EtGy9Q",
          "https://www.youtube.com/embed/8LfU4tAYqUE",
          "https://www.youtube.com/embed/qCH1i8_UIlY",
        ],
        references: [
          "http://ly.yishihui.net/12964.htm",
          "https://www.guoyi360.com/64gua09/xj/1076.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4112.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-9.html",
        ],
      };
    case "小畜九二":
      return {
        gua: "小畜",
        guaCi: "亨. 密云不雨, 自我西郊.",
        yao: "九二",
        yaoCi: "牵复在中, 亦不自失也.",
        origin: "牵复, 吉.",
        meaning: "被牵连而返回本位 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/R5QnvJ_ZTcQ",
          "https://www.youtube.com/embed/YXaQjSFBWRQ",
          "https://www.youtube.com/embed/6N1oRKrX4zM",
          "https://www.youtube.com/embed/supq39Qc4Ig",
          "https://www.youtube.com/embed/gHsW3EtGy9Q",
          "https://www.youtube.com/embed/8LfU4tAYqUE",
          "https://www.youtube.com/embed/qCH1i8_UIlY",
        ],
        references: [
          "http://ly.yishihui.net/12962.htm",
          "https://www.guoyi360.com/64gua09/xj/1077.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4112.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-9.html",
        ],
      };
    case "小畜九三":
      return {
        gua: "小畜",
        guaCi: "亨. 密云不雨, 自我西郊.",
        yao: "九三",
        yaoCi: "夫妻反目, 不能正室也.",
        origin: "舆说辐, 夫妻反目.",
        meaning: "大车脱落了辐条 夫妻反目失和",
        videoUrls: [
          "https://www.youtube.com/embed/R5QnvJ_ZTcQ",
          "https://www.youtube.com/embed/YXaQjSFBWRQ",
          "https://www.youtube.com/embed/6N1oRKrX4zM",
          "https://www.youtube.com/embed/supq39Qc4Ig",
          "https://www.youtube.com/embed/gHsW3EtGy9Q",
          "https://www.youtube.com/embed/8LfU4tAYqUE",
          "https://www.youtube.com/embed/qCH1i8_UIlY",
        ],
        references: [
          "http://ly.yishihui.net/12960.htm",
          "https://www.guoyi360.com/64gua09/xj/1078.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4112.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-9.html",
        ],
      };
    case "小畜六四":
      return {
        gua: "小畜",
        guaCi: "亨. 密云不雨, 自我西郊.",
        yao: "六四",
        yaoCi: "有孚惕出, 上合志也.",
        origin: "有孚, 血去惕出, 无咎.",
        meaning: "有诚信 不再忧虑 从恐惧中走出来 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/R5QnvJ_ZTcQ",
          "https://www.youtube.com/embed/YXaQjSFBWRQ",
          "https://www.youtube.com/embed/6N1oRKrX4zM",
          "https://www.youtube.com/embed/supq39Qc4Ig",
          "https://www.youtube.com/embed/gHsW3EtGy9Q",
          "https://www.youtube.com/embed/8LfU4tAYqUE",
          "https://www.youtube.com/embed/qCH1i8_UIlY",
        ],
        references: [
          "http://ly.yishihui.net/12958.htm",
          "https://www.guoyi360.com/64gua09/xj/1079.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4112.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-9.html",
        ],
      };
    case "小畜九五":
      return {
        gua: "小畜",
        guaCi: "亨. 密云不雨, 自我西郊.",
        yao: "九五",
        yaoCi: "有孚挛如, 不独富也.",
        origin: "有孚挛如, 富以其邻.",
        meaning: "诚信相连 与邻居共享富裕",
        videoUrls: [
          "https://www.youtube.com/embed/R5QnvJ_ZTcQ",
          "https://www.youtube.com/embed/YXaQjSFBWRQ",
          "https://www.youtube.com/embed/6N1oRKrX4zM",
          "https://www.youtube.com/embed/supq39Qc4Ig",
          "https://www.youtube.com/embed/gHsW3EtGy9Q",
          "https://www.youtube.com/embed/8LfU4tAYqUE",
          "https://www.youtube.com/embed/qCH1i8_UIlY",
        ],
        references: [
          "http://ly.yishihui.net/12955.htm",
          "https://www.guoyi360.com/64gua09/xj/1080.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4112.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-9.html",
        ],
      };
    case "小畜上九":
      return {
        gua: "小畜",
        guaCi: "亨. 密云不雨, 自我西郊.",
        yao: "上九",
        yaoCi: "既雨既处, 德积载也. 君子征凶, 有所疑也.",
        origin: "既雨既处, 尚德载. 妇贞厉. 月几望, 君子征凶.",
        meaning:
          "所需雨水已积满要下雨了 最终可以安居 积德满载 妇女正固会有危险 月亮快要满盈 有德行的人远行凶险",
        videoUrls: [
          "https://www.youtube.com/embed/R5QnvJ_ZTcQ",
          "https://www.youtube.com/embed/YXaQjSFBWRQ",
          "https://www.youtube.com/embed/6N1oRKrX4zM",
          "https://www.youtube.com/embed/supq39Qc4Ig",
          "https://www.youtube.com/embed/gHsW3EtGy9Q",
          "https://www.youtube.com/embed/8LfU4tAYqUE",
          "https://www.youtube.com/embed/qCH1i8_UIlY",
        ],
        references: [
          "http://ly.yishihui.net/12947.htm",
          "https://www.guoyi360.com/64gua09/xj/1081.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4112.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-9.html",
        ],
      };
    case "履初九":
      return {
        gua: "履",
        guaCi: "履虎尾, 不咥人, 亨.",
        yao: "初九",
        yaoCi: "素履之往, 独行愿也.",
        origin: "素履, 往无咎.",
        meaning: "衣着朴实无华 向前走无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/Kto-2bfj650",
          "https://www.youtube.com/embed/K_QmYuca9r4",
          "https://www.youtube.com/embed/ih3SWXfgaGI",
          "https://www.youtube.com/embed/rcN1gVZvkP4",
          "https://www.youtube.com/embed/e7npKDcRe1Q",
          "https://www.youtube.com/embed/nDPJOFMdVVU",
          "https://www.youtube.com/embed/Zhz2oZql9dg",
          "https://www.youtube.com/embed/OKyGS7NFL04",
        ],
        references: [
          "http://ly.yishihui.net/13026.htm",
          "https://www.guoyi360.com/64gua10/xj/1120.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4113.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-10.html",
        ],
      };
    case "履九二":
      return {
        gua: "履",
        guaCi: "履虎尾, 不咥人, 亨.",
        yao: "九二",
        yaoCi: "幽人贞吉, 中不自乱也.",
        origin: "履道坦坦, 幽人贞吉.",
        meaning: "走在平坦的大道上 安然的人占问此卦吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/Kto-2bfj650",
          "https://www.youtube.com/embed/K_QmYuca9r4",
          "https://www.youtube.com/embed/ih3SWXfgaGI",
          "https://www.youtube.com/embed/rcN1gVZvkP4",
          "https://www.youtube.com/embed/e7npKDcRe1Q",
          "https://www.youtube.com/embed/nDPJOFMdVVU",
          "https://www.youtube.com/embed/Zhz2oZql9dg",
          "https://www.youtube.com/embed/OKyGS7NFL04",
        ],
        references: [
          "http://ly.yishihui.net/13024.htm",
          "https://www.guoyi360.com/64gua10/xj/1121.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4113.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-10.html",
        ],
      };
    case "履六三":
      return {
        gua: "履",
        guaCi: "履虎尾, 不咥人, 亨.",
        yao: "六三",
        yaoCi:
          "眇能视, 不足以, 有明也. 跛能履, 不足以与行也. 咥人之凶, 位不当也. 武人为于大君, 志刚也.",
        origin: "眇能视, 跛能履. 履虎尾, 咥人, 凶. 武人为于大君.",
        meaning:
          "眼睛快要瞎了 但勉强能看到一点点 腿跛了 但勉强能走几步 不小心踩在老虎尾巴上 老虎回头就咬人 凶险 勇敢的武士要竭力为君主效劳",
        videoUrls: [
          "https://www.youtube.com/embed/Kto-2bfj650",
          "https://www.youtube.com/embed/K_QmYuca9r4",
          "https://www.youtube.com/embed/ih3SWXfgaGI",
          "https://www.youtube.com/embed/rcN1gVZvkP4",
          "https://www.youtube.com/embed/e7npKDcRe1Q",
          "https://www.youtube.com/embed/nDPJOFMdVVU",
          "https://www.youtube.com/embed/Zhz2oZql9dg",
          "https://www.youtube.com/embed/OKyGS7NFL04",
        ],
        references: [
          "http://ly.yishihui.net/13022.htm",
          "https://www.guoyi360.com/64gua10/xj/1122.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4113.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-10.html",
        ],
      };
    case "履九四":
      return {
        gua: "履",
        guaCi: "履虎尾, 不咥人, 亨.",
        yao: "九四",
        yaoCi: "愬愬终吉, 志行也.",
        origin: "履虎尾, 愬愬, 终吉.",
        meaning: "踩在老虎尾巴上 恐惧最后退去 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/Kto-2bfj650",
          "https://www.youtube.com/embed/K_QmYuca9r4",
          "https://www.youtube.com/embed/ih3SWXfgaGI",
          "https://www.youtube.com/embed/rcN1gVZvkP4",
          "https://www.youtube.com/embed/e7npKDcRe1Q",
          "https://www.youtube.com/embed/nDPJOFMdVVU",
          "https://www.youtube.com/embed/Zhz2oZql9dg",
          "https://www.youtube.com/embed/OKyGS7NFL04",
        ],
        references: [
          "http://ly.yishihui.net/13020.htm",
          "https://www.guoyi360.com/64gua10/xj/1123.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4113.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-10.html",
        ],
      };
    case "履九五":
      return {
        gua: "履",
        guaCi: "履虎尾, 不咥人, 亨.",
        yao: "九五",
        yaoCi: "夬履贞厉, 位正当也.",
        origin: "夬履，贞厉.",
        meaning: "奋不顾身 冒然前行 占卜此卦者 凶",
        videoUrls: [
          "https://www.youtube.com/embed/Kto-2bfj650",
          "https://www.youtube.com/embed/K_QmYuca9r4",
          "https://www.youtube.com/embed/ih3SWXfgaGI",
          "https://www.youtube.com/embed/rcN1gVZvkP4",
          "https://www.youtube.com/embed/e7npKDcRe1Q",
          "https://www.youtube.com/embed/nDPJOFMdVVU",
          "https://www.youtube.com/embed/Zhz2oZql9dg",
          "https://www.youtube.com/embed/OKyGS7NFL04",
        ],
        references: [
          "http://ly.yishihui.net/13006.htm",
          "https://www.guoyi360.com/64gua10/xj/1124.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4113.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-10.html",
        ],
      };
    case "履上九":
      return {
        gua: "履",
        guaCi: "履虎尾, 不咥人, 亨.",
        yao: "上九",
        yaoCi: "元吉在上, 大有庆也.",
        origin: "视履考祥, 其旋元吉.",
        meaning: "不断反思审视自己的所作所为 最终吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/Kto-2bfj650",
          "https://www.youtube.com/embed/K_QmYuca9r4",
          "https://www.youtube.com/embed/ih3SWXfgaGI",
          "https://www.youtube.com/embed/rcN1gVZvkP4",
          "https://www.youtube.com/embed/e7npKDcRe1Q",
          "https://www.youtube.com/embed/nDPJOFMdVVU",
          "https://www.youtube.com/embed/Zhz2oZql9dg",
          "https://www.youtube.com/embed/OKyGS7NFL04",
        ],
        references: [
          "http://ly.yishihui.net/13002.htm",
          "https://www.guoyi360.com/64gua10/xj/1125.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4113.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-10.html",
        ],
      };
    case "泰初九":
      return {
        gua: "泰",
        guaCi: "小往大来, 吉亨.",
        yao: "初九",
        yaoCi: "拔茅征吉, 志在外也.",
        origin: "拔茅茹, 以其汇, 征吉.",
        meaning: "拔出的茅草离开地面向上是吉利征兆 出门远行吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/AUl97v7Kg3Y",
          "https://www.youtube.com/embed/w5f_COVB2jQ",
          "https://www.youtube.com/embed/t9KncBp8jhE",
          "https://www.youtube.com/embed/-iXbDYcNn5g",
          "https://www.youtube.com/embed/A6PMV_5h6fc",
          "https://www.youtube.com/embed/-EY3m5xVjGU",
          "https://www.youtube.com/embed/T6X-rj_TcvU",
        ],
        references: [
          "http://ly.yishihui.net/13000.htm",
          "https://www.guoyi360.com/64gua11/xj/1168.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4126.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-11.html",
        ],
      };
    case "泰九二":
      return {
        gua: "泰",
        guaCi: "小往大来, 吉亨.",
        yao: "九二",
        yaoCi: "包荒, 得尚于中行, 以光大也.",
        origin: "包荒, 用冯河, 不遐遗, 朋亡, 得尚于中行.",
        meaning:
          "有包容大川似的宽广胸怀 可以徒步涉过大河急流 礼贤下士 对远方的贤德之人也不遗弃 不结成小团体 不结党营私 能够辅佐公正有道德的君主",
        videoUrls: [
          "https://www.youtube.com/embed/AUl97v7Kg3Y",
          "https://www.youtube.com/embed/w5f_COVB2jQ",
          "https://www.youtube.com/embed/t9KncBp8jhE",
          "https://www.youtube.com/embed/-iXbDYcNn5g",
          "https://www.youtube.com/embed/A6PMV_5h6fc",
          "https://www.youtube.com/embed/-EY3m5xVjGU",
          "https://www.youtube.com/embed/T6X-rj_TcvU",
        ],
        references: [
          "http://ly.yishihui.net/12998.htm",
          "https://www.guoyi360.com/64gua11/xj/1169.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4126.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-11.html",
        ],
      };
    case "泰九三":
      return {
        gua: "泰",
        guaCi: "小往大来, 吉亨.",
        yao: "九三",
        yaoCi: "无往不复, 天地际也.",
        origin: "无平不陂, 无往不复; 艰贞无咎, 勿恤其孚, 于食有福.",
        meaning:
          "处境艰难 正固 没有灾祸 不要怕不能取信于人 在饮食方面有口福之吉",
        videoUrls: [
          "https://www.youtube.com/embed/AUl97v7Kg3Y",
          "https://www.youtube.com/embed/w5f_COVB2jQ",
          "https://www.youtube.com/embed/t9KncBp8jhE",
          "https://www.youtube.com/embed/-iXbDYcNn5g",
          "https://www.youtube.com/embed/A6PMV_5h6fc",
          "https://www.youtube.com/embed/-EY3m5xVjGU",
          "https://www.youtube.com/embed/T6X-rj_TcvU",
        ],
        references: [
          "https://www.guoyi360.com/64gua11/xj/1170.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4126.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-11.html",
        ],
      };
    case "泰六四":
      return {
        gua: "泰",
        guaCi: "小往大来, 吉亨.",
        yao: "六四",
        yaoCi: "翩翩不富, 皆失实也. 不戒以孚, 中心愿也.",
        origin: "翩翩不富, 以其邻, 不戒以孚.",
        meaning: "轻松而不靠财富就能得到邻居的支持 由于诚信而不加戒备",
        videoUrls: [
          "https://www.youtube.com/embed/AUl97v7Kg3Y",
          "https://www.youtube.com/embed/w5f_COVB2jQ",
          "https://www.youtube.com/embed/t9KncBp8jhE",
          "https://www.youtube.com/embed/-iXbDYcNn5g",
          "https://www.youtube.com/embed/A6PMV_5h6fc",
          "https://www.youtube.com/embed/-EY3m5xVjGU",
          "https://www.youtube.com/embed/T6X-rj_TcvU",
        ],
        references: [
          "http://ly.yishihui.net/12994.htm",
          "https://www.guoyi360.com/64gua11/xj/1171.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4126.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-11.html",
        ],
      };
    case "泰六五":
      return {
        gua: "泰",
        guaCi: "小往大来, 吉亨.",
        yao: "六五",
        yaoCi: "以祉元吉, 中以行愿也.",
        origin: "帝乙归妹, 以祉元吉.",
        meaning: "帝乙嫁女 因此而获得福泽 最为吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/AUl97v7Kg3Y",
          "https://www.youtube.com/embed/w5f_COVB2jQ",
          "https://www.youtube.com/embed/t9KncBp8jhE",
          "https://www.youtube.com/embed/-iXbDYcNn5g",
          "https://www.youtube.com/embed/A6PMV_5h6fc",
          "https://www.youtube.com/embed/-EY3m5xVjGU",
          "https://www.youtube.com/embed/T6X-rj_TcvU",
        ],
        references: [
          "http://ly.yishihui.net/12990.htm",
          "https://www.guoyi360.com/64gua11/xj/1172.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4126.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-11.html",
        ],
      };
    case "泰上六":
      return {
        gua: "泰",
        guaCi: "小往大来, 吉亨.",
        yao: "上六",
        yaoCi: "城复于隍, 其命乱也.",
        origin: "城复于隍, 勿用师. 自邑告命, 贞吝.",
        meaning: "城墙倒塌在城壕里 不宜用兵 在城邑中祷告天命 占问必艰难之兆",
        videoUrls: [
          "https://www.youtube.com/embed/AUl97v7Kg3Y",
          "https://www.youtube.com/embed/w5f_COVB2jQ",
          "https://www.youtube.com/embed/t9KncBp8jhE",
          "https://www.youtube.com/embed/-iXbDYcNn5g",
          "https://www.youtube.com/embed/A6PMV_5h6fc",
          "https://www.youtube.com/embed/-EY3m5xVjGU",
          "https://www.youtube.com/embed/T6X-rj_TcvU",
        ],
        references: [
          "http://ly.yishihui.net/12992.htm",
          "https://www.guoyi360.com/64gua11/xj/1173.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4126.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-11.html",
        ],
      };
    case "否初六":
      return {
        gua: "否",
        guaCi: "否之匪人, 不利君子贞, 大往小来.",
        yao: "初六",
        yaoCi: "拔茅贞吉, 志在君也.",
        origin: "拔茅茹, 以其汇, 贞吉, 亨.",
        meaning: "拔出的茅草离开地面向上 吉利征兆 通达",
        videoUrls: [
          "https://www.youtube.com/embed/R5W3ZhXqW5A",
          "https://www.youtube.com/embed/Vr575L3AOYQ",
          "https://www.youtube.com/embed/6066UG8NqIk",
          "https://www.youtube.com/embed/Tbw3f-ae3hY",
          "https://www.youtube.com/embed/4LcF5e9Uq3w",
          "https://www.youtube.com/embed/E0LZdn8Bh0M",
          "https://www.youtube.com/embed/7JPDw_uOV64",
        ],
        references: [
          "http://ly.yishihui.net/12945.htm",
          "https://www.guoyi360.com/64gua12/xj/2457.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4127.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-12.html",
        ],
      };
    case "否六二":
      return {
        gua: "否",
        guaCi: "否之匪人, 不利君子贞, 大往小来.",
        yao: "六二",
        yaoCi: "大人否, 亨, 不乱群也.",
        origin: "包承, 小人吉; 大人否, 亨.",
        meaning: "包容成灾 小人吉祥 君子闭塞 通达",
        videoUrls: [
          "https://www.youtube.com/embed/R5W3ZhXqW5A",
          "https://www.youtube.com/embed/Vr575L3AOYQ",
          "https://www.youtube.com/embed/6066UG8NqIk",
          "https://www.youtube.com/embed/Tbw3f-ae3hY",
          "https://www.youtube.com/embed/4LcF5e9Uq3w",
          "https://www.youtube.com/embed/E0LZdn8Bh0M",
          "https://www.youtube.com/embed/7JPDw_uOV64",
        ],
        references: [
          "http://ly.yishihui.net/12943.htm",
          "https://www.guoyi360.com/64gua12/xj/2458.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4127.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-12.html",
        ],
      };
    case "否六三":
      return {
        gua: "否",
        guaCi: "否之匪人, 不利君子贞, 大往小来.",
        yao: "六三",
        yaoCi: "包羞, 位不当也.",
        origin: "包羞.",
        meaning: "被包容而居于下位 最终招致羞辱",
        videoUrls: [
          "https://www.youtube.com/embed/R5W3ZhXqW5A",
          "https://www.youtube.com/embed/Vr575L3AOYQ",
          "https://www.youtube.com/embed/6066UG8NqIk",
          "https://www.youtube.com/embed/Tbw3f-ae3hY",
          "https://www.youtube.com/embed/4LcF5e9Uq3w",
          "https://www.youtube.com/embed/E0LZdn8Bh0M",
          "https://www.youtube.com/embed/7JPDw_uOV64",
        ],
        references: [
          "http://ly.yishihui.net/12941.htm",
          "https://www.guoyi360.com/64gua12/xj/2459.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4127.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-12.html",
        ],
      };
    case "否九四":
      return {
        gua: "否",
        guaCi: "否之匪人, 不利君子贞, 大往小来.",
        yao: "九四",
        yaoCi: "有命无咎, 志行也.",
        origin: "有命无咎, 畴离祉.",
        meaning: "得到君王授命 没有灾祸 众人依附 共享福禄",
        videoUrls: [
          "https://www.youtube.com/embed/R5W3ZhXqW5A",
          "https://www.youtube.com/embed/Vr575L3AOYQ",
          "https://www.youtube.com/embed/6066UG8NqIk",
          "https://www.youtube.com/embed/Tbw3f-ae3hY",
          "https://www.youtube.com/embed/4LcF5e9Uq3w",
          "https://www.youtube.com/embed/E0LZdn8Bh0M",
          "https://www.youtube.com/embed/7JPDw_uOV64",
        ],
        references: [
          "http://ly.yishihui.net/12939.htm",
          "https://www.guoyi360.com/64gua12/xj/2460.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4127.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-12.html",
        ],
      };
    case "否九五":
      return {
        gua: "否",
        guaCi: "否之匪人, 不利君子贞, 大往小来.",
        yao: "九五",
        yaoCi: "大人之吉, 位正当也.",
        origin: "休否, 大人吉; 其亡其亡, 系于苞桑.",
        meaning:
          "君子不用躲避 君子可获吉祥 将要灭亡 将要灭亡 白自己拴在大桑树上 就会安然无恙",
        videoUrls: [
          "https://www.youtube.com/embed/R5W3ZhXqW5A",
          "https://www.youtube.com/embed/Vr575L3AOYQ",
          "https://www.youtube.com/embed/6066UG8NqIk",
          "https://www.youtube.com/embed/Tbw3f-ae3hY",
          "https://www.youtube.com/embed/4LcF5e9Uq3w",
          "https://www.youtube.com/embed/E0LZdn8Bh0M",
          "https://www.youtube.com/embed/7JPDw_uOV64",
        ],
        references: [
          "http://ly.yishihui.net/12937.htm",
          "https://www.guoyi360.com/64gua12/xj/2461.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4127.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-12.html",
        ],
      };
    case "否上九":
      return {
        gua: "否",
        guaCi: "否之匪人, 不利君子贞, 大往小来.",
        yao: "上九",
        yaoCi: "否终则倾, 何可长也.",
        origin: "倾否, 先否后喜.",
        meaning: "苦尽甘来 皆大欢喜",
        videoUrls: [
          "https://www.youtube.com/embed/R5W3ZhXqW5A",
          "https://www.youtube.com/embed/Vr575L3AOYQ",
          "https://www.youtube.com/embed/6066UG8NqIk",
          "https://www.youtube.com/embed/Tbw3f-ae3hY",
          "https://www.youtube.com/embed/4LcF5e9Uq3w",
          "https://www.youtube.com/embed/E0LZdn8Bh0M",
          "https://www.youtube.com/embed/7JPDw_uOV64",
        ],
        references: [
          "http://ly.yishihui.net/12935.htm",
          "https://www.guoyi360.com/64gua12/xj/2462.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4127.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-12.html",
        ],
      };
    case "同人初九":
      return {
        gua: "同人",
        guaCi: "同人于野, 亨. 利涉大川, 利君子贞.",
        yao: "初九",
        yaoCi: "出门同人, 又谁咎也.",
        origin: "同人于门, 无咎.",
        meaning: "走出大门 与人亲近 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/2nuX-Zgrlfk",
          "https://www.youtube.com/embed/TrmYjufoOSo",
          "https://www.youtube.com/embed/ZTblo6_Ke2Q",
          "https://www.youtube.com/embed/0CGQphBuWAc",
          "https://www.youtube.com/embed/UKCIfcEMcEI",
          "https://www.youtube.com/embed/XGOGX17gPBw",
          "https://www.youtube.com/embed/beS0QySXqXk",
        ],
        references: [
          "http://ly.yishihui.net/12921.htm",
          "https://www.guoyi360.com/64gua13/xj/2489.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4140.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-13.html",
        ],
      };
    case "同人六二":
      return {
        gua: "同人",
        guaCi: "同人于野, 亨. 利涉大川, 利君子贞.",
        yao: "六二",
        yaoCi: "同人于宗, 吝道也.",
        origin: "同人于宗, 吝.",
        meaning: "亲近同族的人 必然艰难",
        videoUrls: [
          "https://www.youtube.com/embed/2nuX-Zgrlfk",
          "https://www.youtube.com/embed/TrmYjufoOSo",
          "https://www.youtube.com/embed/ZTblo6_Ke2Q",
          "https://www.youtube.com/embed/0CGQphBuWAc",
          "https://www.youtube.com/embed/UKCIfcEMcEI",
          "https://www.youtube.com/embed/XGOGX17gPBw",
          "https://www.youtube.com/embed/beS0QySXqXk",
        ],
        references: [
          "http://ly.yishihui.net/12921.htm",
          "https://www.guoyi360.com/64gua13/xj/2490.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4140.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-13.html",
        ],
      };
    case "同人九三":
      return {
        gua: "同人",
        guaCi: "同人于野, 亨. 利涉大川, 利君子贞.",
        yao: "九三",
        yaoCi: "伏戎于莽, 敌刚也. 三岁不兴, 安行也.",
        origin: "伏戎于莽, 升其高陵, 三岁不兴.",
        meaning: "在草丛中设好伏兵 登高望远 三年不能发动战争",
        videoUrls: [
          "https://www.youtube.com/embed/2nuX-Zgrlfk",
          "https://www.youtube.com/embed/TrmYjufoOSo",
          "https://www.youtube.com/embed/ZTblo6_Ke2Q",
          "https://www.youtube.com/embed/0CGQphBuWAc",
          "https://www.youtube.com/embed/UKCIfcEMcEI",
          "https://www.youtube.com/embed/XGOGX17gPBw",
          "https://www.youtube.com/embed/beS0QySXqXk",
        ],
        references: [
          "http://ly.yishihui.net/12917.htm",
          "https://www.guoyi360.com/64gua13/xj/2491.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4140.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-13.html",
        ],
      };
    case "同人九四":
      return {
        gua: "同人",
        guaCi: "同人于野, 亨. 利涉大川, 利君子贞.",
        yao: "九四",
        yaoCi: "乘其墉, 义弗克也, 其吉, 则困而反则也.",
        origin: "乘其墉, 弗克攻, 吉.",
        meaning: "占据城头之上 自行退兵而不进攻 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/2nuX-Zgrlfk",
          "https://www.youtube.com/embed/TrmYjufoOSo",
          "https://www.youtube.com/embed/ZTblo6_Ke2Q",
          "https://www.youtube.com/embed/0CGQphBuWAc",
          "https://www.youtube.com/embed/UKCIfcEMcEI",
          "https://www.youtube.com/embed/XGOGX17gPBw",
          "https://www.youtube.com/embed/beS0QySXqXk",
        ],
        references: [
          "http://ly.yishihui.net/12915.htm",
          "https://www.guoyi360.com/64gua13/xj/2492.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4140.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-13.html",
        ],
      };
    case "同人九五":
      return {
        gua: "同人",
        guaCi: "同人于野, 亨. 利涉大川, 利君子贞.",
        yao: "九五",
        yaoCi: "同人之先, 以中直也. 大师相遇, 言相克也.",
        origin: "同人, 先号咷而后笑, 大师克相遇.",
        meaning: "与人同心同德 先哭后笑 大军会师 庆祝胜利",
        videoUrls: [
          "https://www.youtube.com/embed/2nuX-Zgrlfk",
          "https://www.youtube.com/embed/TrmYjufoOSo",
          "https://www.youtube.com/embed/ZTblo6_Ke2Q",
          "https://www.youtube.com/embed/0CGQphBuWAc",
          "https://www.youtube.com/embed/UKCIfcEMcEI",
          "https://www.youtube.com/embed/XGOGX17gPBw",
          "https://www.youtube.com/embed/beS0QySXqXk",
        ],
        references: [
          "http://ly.yishihui.net/12913.htm",
          "https://www.guoyi360.com/64gua13/xj/2493.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4140.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-13.html",
        ],
      };
    case "同人上九":
      return {
        gua: "同人",
        guaCi: "同人于野, 亨. 利涉大川, 利君子贞.",
        yao: "上九",
        yaoCi: "同人于郊, 志未得也.",
        origin: "同人于郊, 无悔.",
        meaning: "与人在郊外亲善和睦 不会有困厄",
        videoUrls: [
          "https://www.youtube.com/embed/2nuX-Zgrlfk",
          "https://www.youtube.com/embed/TrmYjufoOSo",
          "https://www.youtube.com/embed/ZTblo6_Ke2Q",
          "https://www.youtube.com/embed/0CGQphBuWAc",
          "https://www.youtube.com/embed/UKCIfcEMcEI",
          "https://www.youtube.com/embed/XGOGX17gPBw",
          "https://www.youtube.com/embed/beS0QySXqXk",
        ],
        references: [
          "http://ly.yishihui.net/12911.htm",
          "https://www.guoyi360.com/64gua13/xj/2494.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4140.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-13.html",
        ],
      };
    case "大有初九":
      return {
        gua: "大有",
        guaCi: "元亨.",
        yao: "初九",
        yaoCi: "大有初九, 无交害也.",
        origin: "无交害, 匪咎; 艰则无咎.",
        meaning:
          "有人交往 不涉及利害 自然不会招致灾祸 须知 需要经历艰辛 才可避免灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/r4LmwhY5RQY",
          "https://www.youtube.com/embed/Kp2zUkY4y5k",
          "https://www.youtube.com/embed/QfQALI3g7Lk",
          "https://www.youtube.com/embed/_FqHxAdRQ7M",
          "https://www.youtube.com/embed/FT6sa_bBWbw",
          "https://www.youtube.com/embed/4aCf--MbQ3k",
          "https://www.youtube.com/embed/bZY50cMEL8o",
        ],
        references: [
          "http://ly.yishihui.net/13375.htm",
          "https://www.guoyi360.com/64gua14/xj/2506.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4141.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-14.html",
        ],
      };
    case "大有九二":
      return {
        gua: "大有",
        guaCi: "元亨.",
        yao: "九二",
        yaoCi: "大车以载, 积中不败也.",
        origin: "大车以载, 有攸往, 无咎.",
        meaning: "用大车载物 无论去哪里 都不会有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/r4LmwhY5RQY",
          "https://www.youtube.com/embed/Kp2zUkY4y5k",
          "https://www.youtube.com/embed/QfQALI3g7Lk",
          "https://www.youtube.com/embed/_FqHxAdRQ7M",
          "https://www.youtube.com/embed/FT6sa_bBWbw",
          "https://www.youtube.com/embed/4aCf--MbQ3k",
          "https://www.youtube.com/embed/bZY50cMEL8o",
        ],
        references: [
          "http://ly.yishihui.net/13373.htm",
          "https://www.guoyi360.com/64gua14/xj/2507.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4141.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-14.html",
        ],
      };
    case "大有九三":
      return {
        gua: "大有",
        guaCi: "元亨.",
        yao: "九三",
        yaoCi: "公用亨于天子, 小人害也.",
        origin: "公用亨于天子, 小人弗克.",
        meaning: "君王宴请公侯 小人不可以参与",
        videoUrls: [
          "https://www.youtube.com/embed/r4LmwhY5RQY",
          "https://www.youtube.com/embed/Kp2zUkY4y5k",
          "https://www.youtube.com/embed/QfQALI3g7Lk",
          "https://www.youtube.com/embed/_FqHxAdRQ7M",
          "https://www.youtube.com/embed/FT6sa_bBWbw",
          "https://www.youtube.com/embed/4aCf--MbQ3k",
          "https://www.youtube.com/embed/bZY50cMEL8o",
        ],
        references: [
          "http://ly.yishihui.net/13371.htm",
          "https://www.guoyi360.com/64gua14/xj/2508.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4141.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-14.html",
        ],
      };
    case "大有九四":
      return {
        gua: "大有",
        guaCi: "元亨.",
        yao: "九四",
        yaoCi: "匪其彭, 无咎, 明辨晰也.",
        origin: "匪其彭, 无咎.",
        meaning: "不骄不躁 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/r4LmwhY5RQY",
          "https://www.youtube.com/embed/Kp2zUkY4y5k",
          "https://www.youtube.com/embed/QfQALI3g7Lk",
          "https://www.youtube.com/embed/_FqHxAdRQ7M",
          "https://www.youtube.com/embed/FT6sa_bBWbw",
          "https://www.youtube.com/embed/4aCf--MbQ3k",
          "https://www.youtube.com/embed/bZY50cMEL8o",
        ],
        references: [
          "http://ly.yishihui.net/13369.htm",
          "https://www.guoyi360.com/64gua14/xj/2509.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4141.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-14.html",
        ],
      };
    case "大有六五":
      return {
        gua: "大有",
        guaCi: "元亨.",
        yao: "六五",
        yaoCi: "厥孚交如, 信以发志也. 威如之吉, 易而无备也.",
        origin: "厥孚交如, 威如, 吉.",
        meaning: "胸怀坦荡 上下以诚相待 威严自显 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/r4LmwhY5RQY",
          "https://www.youtube.com/embed/Kp2zUkY4y5k",
          "https://www.youtube.com/embed/QfQALI3g7Lk",
          "https://www.youtube.com/embed/_FqHxAdRQ7M",
          "https://www.youtube.com/embed/FT6sa_bBWbw",
          "https://www.youtube.com/embed/4aCf--MbQ3k",
          "https://www.youtube.com/embed/bZY50cMEL8o",
        ],
        references: [
          "http://ly.yishihui.net/13367.htm",
          "https://www.guoyi360.com/64gua14/xj/2510.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4141.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-14.html",
        ],
      };
    case "大有上九":
      return {
        gua: "大有",
        guaCi: "元亨.",
        yao: "上九",
        yaoCi: "大有上吉, 自天佑也.",
        origin: "自天祐之, 吉无不利.",
        meaning: "会得到上天的帮助 吉祥而无不利",
        videoUrls: [
          "https://www.youtube.com/embed/r4LmwhY5RQY",
          "https://www.youtube.com/embed/Kp2zUkY4y5k",
          "https://www.youtube.com/embed/QfQALI3g7Lk",
          "https://www.youtube.com/embed/_FqHxAdRQ7M",
          "https://www.youtube.com/embed/FT6sa_bBWbw",
          "https://www.youtube.com/embed/4aCf--MbQ3k",
          "https://www.youtube.com/embed/bZY50cMEL8o",
        ],
        references: [
          "http://ly.yishihui.net/13365.htm",
          "https://www.guoyi360.com/64gua14/xj/2511.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4141.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-14.html",
        ],
      };
    case "谦初六":
      return {
        gua: "谦",
        guaCi: "亨, 君子有终.",
        yao: "初六",
        yaoCi: "谦谦君子, 卑以自牧也.",
        origin: "谦谦君子, 用涉大川. 吉.",
        meaning: "谦虚而富有美德的君子 梵语大江大河 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/ehKEoYdCqnY",
          "https://www.youtube.com/embed/oRQ_gnhh9c4",
          "https://www.youtube.com/embed/hWaU5nxtT6M",
          "https://www.youtube.com/embed/YdfRGlm9CLM",
          "https://www.youtube.com/embed/ZtqtGiFCR_M",
          "https://www.youtube.com/embed/6QVYJqAwQ6s",
          "https://www.youtube.com/embed/fijI9YrVPi0",
        ],
        references: [
          "http://ly.yishihui.net/13363.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4142.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-15.html",
        ],
      };
    case "谦六二":
      return {
        gua: "谦",
        guaCi: "亨, 君子有终.",
        yao: "六二",
        yaoCi: "鸣谦贞吉, 中心得也.",
        origin: "鸣谦, 贞吉",
        meaning: "谦虚之名传扬外界 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/ehKEoYdCqnY",
          "https://www.youtube.com/embed/oRQ_gnhh9c4",
          "https://www.youtube.com/embed/hWaU5nxtT6M",
          "https://www.youtube.com/embed/YdfRGlm9CLM",
          "https://www.youtube.com/embed/ZtqtGiFCR_M",
          "https://www.youtube.com/embed/6QVYJqAwQ6s",
          "https://www.youtube.com/embed/fijI9YrVPi0",
        ],
        references: [
          "http://ly.yishihui.net/13345.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4142.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-15.html",
        ],
      };
    case "谦九三":
      return {
        gua: "谦",
        guaCi: "亨, 君子有终.",
        yao: "九三",
        yaoCi: "劳谦君子, 万民服也.",
        origin: "劳谦君子, 有终吉",
        meaning: "有功而谦虚 君子保持谦逊 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/ehKEoYdCqnY",
          "https://www.youtube.com/embed/oRQ_gnhh9c4",
          "https://www.youtube.com/embed/hWaU5nxtT6M",
          "https://www.youtube.com/embed/YdfRGlm9CLM",
          "https://www.youtube.com/embed/ZtqtGiFCR_M",
          "https://www.youtube.com/embed/6QVYJqAwQ6s",
          "https://www.youtube.com/embed/fijI9YrVPi0",
        ],
        references: [
          "http://ly.yishihui.net/13341.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4142.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-15.html",
        ],
      };
    case "谦六四":
      return {
        gua: "谦",
        guaCi: "亨, 君子有终.",
        yao: "六四",
        yaoCi: "无不利, 㧑谦, 不违则也.",
        origin: "无不利, 撝谦",
        meaning: "发扬谦逊美德 行事无往不利",
        videoUrls: [
          "https://www.youtube.com/embed/ehKEoYdCqnY",
          "https://www.youtube.com/embed/oRQ_gnhh9c4",
          "https://www.youtube.com/embed/hWaU5nxtT6M",
          "https://www.youtube.com/embed/YdfRGlm9CLM",
          "https://www.youtube.com/embed/ZtqtGiFCR_M",
          "https://www.youtube.com/embed/6QVYJqAwQ6s",
          "https://www.youtube.com/embed/fijI9YrVPi0",
        ],
        references: [
          "http://ly.yishihui.net/13339.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4142.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-15.html",
        ],
      };
    case "谦六五":
      return {
        gua: "谦",
        guaCi: "亨, 君子有终.",
        yao: "六五",
        yaoCi: "利用侵伐, 征不服也.",
        origin: "不富以其邻, 利用侵伐, 无不利",
        meaning: "与邻国同遭侵略 则需共同应战 如此无往不利",
        videoUrls: [
          "https://www.youtube.com/embed/ehKEoYdCqnY",
          "https://www.youtube.com/embed/oRQ_gnhh9c4",
          "https://www.youtube.com/embed/hWaU5nxtT6M",
          "https://www.youtube.com/embed/YdfRGlm9CLM",
          "https://www.youtube.com/embed/ZtqtGiFCR_M",
          "https://www.youtube.com/embed/6QVYJqAwQ6s",
          "https://www.youtube.com/embed/fijI9YrVPi0",
        ],
        references: [
          "http://ly.yishihui.net/13337.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4142.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-15.html",
        ],
      };
    case "谦上六":
      return {
        gua: "谦",
        guaCi: "亨, 君子有终.",
        yao: "上六",
        yaoCi: "鸣谦, 志未得也. 可用行师, 征邑国也.",
        origin: "鸣谦, 利用行师, 征邑国",
        meaning: "谦虚之名传扬外界 利于兴兵征伐 占领新的领地",
        videoUrls: [
          "https://www.youtube.com/embed/ehKEoYdCqnY",
          "https://www.youtube.com/embed/oRQ_gnhh9c4",
          "https://www.youtube.com/embed/hWaU5nxtT6M",
          "https://www.youtube.com/embed/YdfRGlm9CLM",
          "https://www.youtube.com/embed/ZtqtGiFCR_M",
          "https://www.youtube.com/embed/6QVYJqAwQ6s",
          "https://www.youtube.com/embed/fijI9YrVPi0",
        ],
        references: [
          "http://ly.yishihui.net/13335.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4142.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-15.html",
        ],
      };
    case "豫初六":
      return {
        gua: "豫",
        guaCi: "利建侯行师.",
        yao: "初六",
        yaoCi: "初六鸣豫, 志穷凶也.",
        origin: "鸣豫, 凶",
        meaning: "响应愉悦的态度 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/hEwqpStCXpA",
          "https://www.youtube.com/embed/kgzcDaHOTMU",
          "https://www.youtube.com/embed/GvEcQvgOJBk",
          "https://www.youtube.com/embed/RdX69AWBzMM",
          "https://www.youtube.com/embed/7hsYB0vXcs4",
          "https://www.youtube.com/embed/wqu3kJNf6Zw",
          "https://www.youtube.com/embed/lW9UM0cmoDM",
          "https://www.youtube.com/embed/A9wimI_Yiek",
        ],
        references: [
          "http://ly.yishihui.net/13331.htm",
          "https://www.guoyi360.com/64gua16/xj/2566.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4143.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-16.html",
        ],
      };
    case "豫六二":
      return {
        gua: "豫",
        guaCi: "利建侯行师.",
        yao: "六二",
        yaoCi: "不终日, 贞吉, 以中正也.",
        origin: "介于石, 不终日, 贞吉",
        meaning: "德行坚贞胜过磐石 不浪费生命 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/hEwqpStCXpA",
          "https://www.youtube.com/embed/kgzcDaHOTMU",
          "https://www.youtube.com/embed/GvEcQvgOJBk",
          "https://www.youtube.com/embed/RdX69AWBzMM",
          "https://www.youtube.com/embed/7hsYB0vXcs4",
          "https://www.youtube.com/embed/wqu3kJNf6Zw",
          "https://www.youtube.com/embed/lW9UM0cmoDM",
          "https://www.youtube.com/embed/A9wimI_Yiek",
        ],
        references: [
          "http://ly.yishihui.net/13329.htm",
          "https://www.guoyi360.com/64gua16/xj/2567.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4143.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-16.html",
        ],
      };
    case "豫六三":
      return {
        gua: "豫",
        guaCi: "利建侯行师.",
        yao: "六三",
        yaoCi: "盱豫有悔, 位不当也.",
        origin: "盱豫, 悔. 迟有悔.",
        meaning: "小人媚上以逸乐惑主 会有忧悔 悔恨太迟会更后悔",
        videoUrls: [
          "https://www.youtube.com/embed/hEwqpStCXpA",
          "https://www.youtube.com/embed/kgzcDaHOTMU",
          "https://www.youtube.com/embed/GvEcQvgOJBk",
          "https://www.youtube.com/embed/RdX69AWBzMM",
          "https://www.youtube.com/embed/7hsYB0vXcs4",
          "https://www.youtube.com/embed/wqu3kJNf6Zw",
          "https://www.youtube.com/embed/lW9UM0cmoDM",
          "https://www.youtube.com/embed/A9wimI_Yiek",
        ],
        references: [
          "http://ly.yishihui.net/13333.htm",
          "https://www.guoyi360.com/64gua16/xj/2568.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4143.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-16.html",
        ],
      };
    case "豫九四":
      return {
        gua: "豫",
        guaCi: "利建侯行师.",
        yao: "九四",
        yaoCi: "由豫大有得, 志大行也.",
        origin: "由豫, 大有得, 勿疑, 朋盍簪.",
        meaning:
          "喜乐自来 会有大的收获 不比猜疑 像簪子聚拢头发一样将朋友们聚集在一起",
        videoUrls: [
          "https://www.youtube.com/embed/hEwqpStCXpA",
          "https://www.youtube.com/embed/kgzcDaHOTMU",
          "https://www.youtube.com/embed/GvEcQvgOJBk",
          "https://www.youtube.com/embed/RdX69AWBzMM",
          "https://www.youtube.com/embed/7hsYB0vXcs4",
          "https://www.youtube.com/embed/wqu3kJNf6Zw",
          "https://www.youtube.com/embed/lW9UM0cmoDM",
          "https://www.youtube.com/embed/A9wimI_Yiek",
        ],
        references: [
          "http://ly.yishihui.net/13327.htm",
          "https://www.guoyi360.com/64gua16/xj/2569.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4143.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-16.html",
        ],
      };
    case "豫六五":
      return {
        gua: "豫",
        guaCi: "利建侯行师.",
        yao: "六五",
        yaoCi: "六五贞疾, 乘刚也. 恒不死, 中未亡也.",
        origin: "贞疾, 恒不死.",
        meaning: "占问疫病吉凶 得此卦者 会病期长 但不会死亡",
        videoUrls: [
          "https://www.youtube.com/embed/hEwqpStCXpA",
          "https://www.youtube.com/embed/kgzcDaHOTMU",
          "https://www.youtube.com/embed/GvEcQvgOJBk",
          "https://www.youtube.com/embed/RdX69AWBzMM",
          "https://www.youtube.com/embed/7hsYB0vXcs4",
          "https://www.youtube.com/embed/wqu3kJNf6Zw",
          "https://www.youtube.com/embed/lW9UM0cmoDM",
          "https://www.youtube.com/embed/A9wimI_Yiek",
        ],
        references: [
          "http://ly.yishihui.net/13325.htm",
          "https://www.guoyi360.com/64gua16/xj/2570.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4143.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-16.html",
        ],
      };
    case "豫上六":
      return {
        gua: "豫",
        guaCi: "利建侯行师.",
        yao: "上六",
        yaoCi: "冥豫在上, 何可长也?",
        origin: "冥豫, 成有渝, 无咎.",
        meaning:
          "已处在天昏地暗的局面 去沉溺于寻欢作乐 十分危险 若改弦更张 可避免灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/hEwqpStCXpA",
          "https://www.youtube.com/embed/kgzcDaHOTMU",
          "https://www.youtube.com/embed/GvEcQvgOJBk",
          "https://www.youtube.com/embed/RdX69AWBzMM",
          "https://www.youtube.com/embed/7hsYB0vXcs4",
          "https://www.youtube.com/embed/wqu3kJNf6Zw",
          "https://www.youtube.com/embed/lW9UM0cmoDM",
          "https://www.youtube.com/embed/A9wimI_Yiek",
        ],
        references: [
          "http://ly.yishihui.net/13323.htm",
          "https://www.guoyi360.com/64gua16/xj/2571.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4143.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-16.html",
        ],
      };
    case "随初九":
      return {
        gua: "随",
        guaCi: "元亨利贞, 无咎.",
        yao: "初九",
        yaoCi: "官有渝, 从正吉也. 出门交有功, 不失也.",
        origin: "官有渝, 贞吉. 出门交有功.",
        meaning: "官位有变动 正固吉祥 出门交友不会有过失",
        videoUrls: [
          "https://www.youtube.com/embed/scD68gSpPvQ",
          "https://www.youtube.com/embed/_54dk67-vrU",
          "https://www.youtube.com/embed/6EUMgvTfP_o",
          "https://www.youtube.com/embed/l_05EkmKE9g",
          "https://www.youtube.com/embed/kRwYZR9lASU",
          "https://www.youtube.com/embed/J3jpTXn8T9s",
          "https://www.youtube.com/embed/i7E9orecGGk",
        ],
        references: [
          "http://ly.yishihui.net/13321.htm",
          "https://www.guoyi360.com/64gua17/xj/2650.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4144.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-17.html",
        ],
      };
    case "随六二":
      return {
        gua: "随",
        guaCi: "元亨利贞, 无咎.",
        yao: "六二",
        yaoCi: "系小子, 弗兼与也.",
        origin: "系小子, 失丈夫.",
        meaning: "依附小人会失去德高望重的人",
        videoUrls: [
          "https://www.youtube.com/embed/scD68gSpPvQ",
          "https://www.youtube.com/embed/_54dk67-vrU",
          "https://www.youtube.com/embed/6EUMgvTfP_o",
          "https://www.youtube.com/embed/l_05EkmKE9g",
          "https://www.youtube.com/embed/kRwYZR9lASU",
          "https://www.youtube.com/embed/J3jpTXn8T9s",
          "https://www.youtube.com/embed/i7E9orecGGk",
        ],
        references: [
          "http://ly.yishihui.net/13319.htm",
          "https://www.guoyi360.com/64gua17/xj/2651.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4144.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-17.html",
        ],
      };
    case "随六三":
      return {
        gua: "随",
        guaCi: "元亨利贞, 无咎.",
        yao: "六三",
        yaoCi: "系丈夫, 志舍下也.",
        origin: "系丈夫, 失小子. 随有求得, 利居贞.",
        meaning: "依附德高望重的人会失去小人 跟随有追求的人会有所得 利于正固",
        videoUrls: [
          "https://www.youtube.com/embed/scD68gSpPvQ",
          "https://www.youtube.com/embed/_54dk67-vrU",
          "https://www.youtube.com/embed/6EUMgvTfP_o",
          "https://www.youtube.com/embed/l_05EkmKE9g",
          "https://www.youtube.com/embed/kRwYZR9lASU",
          "https://www.youtube.com/embed/J3jpTXn8T9s",
          "https://www.youtube.com/embed/i7E9orecGGk",
        ],
        references: [
          "http://ly.yishihui.net/13317.htm",
          "https://www.guoyi360.com/64gua17/xj/2652.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4144.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-17.html",
        ],
      };
    case "随九四":
      return {
        gua: "随",
        guaCi: "元亨利贞, 无咎.",
        yao: "九四",
        yaoCi: "随有获, 其义凶也. 有孚在道, 明功也.",
        origin: "随有获, 贞凶. 有孚在道, 以明, 何咎.",
        meaning:
          "跟随别人去获得利益 即便守正道 也是凶 有诚信的做事 光明磊落 怎么会有错",
        videoUrls: [
          "https://www.youtube.com/embed/scD68gSpPvQ",
          "https://www.youtube.com/embed/_54dk67-vrU",
          "https://www.youtube.com/embed/6EUMgvTfP_o",
          "https://www.youtube.com/embed/l_05EkmKE9g",
          "https://www.youtube.com/embed/kRwYZR9lASU",
          "https://www.youtube.com/embed/J3jpTXn8T9s",
          "https://www.youtube.com/embed/i7E9orecGGk",
        ],
        references: [
          "http://ly.yishihui.net/13315.htm",
          "https://www.guoyi360.com/64gua17/xj/2653.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4144.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-17.html",
        ],
      };
    case "随九五":
      return {
        gua: "随",
        guaCi: "元亨利贞, 无咎.",
        yao: "九五",
        yaoCi: "孚于嘉吉, 位正中也.",
        origin: "孚于嘉, 吉.",
        meaning: "真诚的随从嘉言善行 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/scD68gSpPvQ",
          "https://www.youtube.com/embed/_54dk67-vrU",
          "https://www.youtube.com/embed/6EUMgvTfP_o",
          "https://www.youtube.com/embed/l_05EkmKE9g",
          "https://www.youtube.com/embed/kRwYZR9lASU",
          "https://www.youtube.com/embed/J3jpTXn8T9s",
          "https://www.youtube.com/embed/i7E9orecGGk",
        ],
        references: [
          "http://ly.yishihui.net/13313.htm",
          "https://www.guoyi360.com/64gua17/xj/2654.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4144.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-17.html",
        ],
      };
    case "随上六":
      return {
        gua: "随",
        guaCi: "元亨利贞, 无咎.",
        yao: "上六",
        yaoCi: "拘系之, 上穷也.",
        origin: "拘系之, 乃从维之. 王用亨于西山.",
        meaning: "先拘押起来 后又捆绑起来 成为君王在西山祭祀的牺牲品",
        videoUrls: [
          "https://www.youtube.com/embed/scD68gSpPvQ",
          "https://www.youtube.com/embed/_54dk67-vrU",
          "https://www.youtube.com/embed/6EUMgvTfP_o",
          "https://www.youtube.com/embed/l_05EkmKE9g",
          "https://www.youtube.com/embed/kRwYZR9lASU",
          "https://www.youtube.com/embed/J3jpTXn8T9s",
          "https://www.youtube.com/embed/i7E9orecGGk",
        ],
        references: [
          "http://ly.yishihui.net/13311.htm",
          "https://www.guoyi360.com/64gua17/xj/2655.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4144.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-17.html",
        ],
      };
    case "蛊初六":
      return {
        gua: "蛊",
        guaCi: "元亨, 利涉大川. 先甲三日, 后甲三日.",
        yao: "初六",
        yaoCi: "干父之蛊, 意承考也.",
        origin: "干父之蛊, 有子, 考无咎. 厉, 终吉.",
        meaning:
          "改正父亲的过失 有了这样的儿子 父辈以及父辈以上可避免灾祸 即使开始会有危险 最后可获得吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/hmqa9BywpfM",
          "https://www.youtube.com/embed/sW9BSNhJHdE",
          "https://www.youtube.com/embed/4ESYPbIhlo8",
          "https://www.youtube.com/embed/RpX5NUVzAyQ",
          "https://www.youtube.com/embed/Q70rXeYlv74",
          "https://www.youtube.com/embed/IE4gGrr_jvI",
          "https://www.youtube.com/embed/CfjiUM1iZJk",
        ],
        references: [
          "http://ly.yishihui.net/13309.htm",
          "https://www.guoyi360.com/64gua18/xj/2697.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4145.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "蛊九二":
      return {
        gua: "蛊",
        guaCi: "元亨, 利涉大川. 先甲三日, 后甲三日.",
        yao: "九二",
        yaoCi: "干母之蛊, 得中道也.",
        origin: "干母之蛊, 不可贞.",
        meaning: "改正母亲的过失 不能固守专断",
        videoUrls: [
          "https://www.youtube.com/embed/hmqa9BywpfM",
          "https://www.youtube.com/embed/sW9BSNhJHdE",
          "https://www.youtube.com/embed/4ESYPbIhlo8",
          "https://www.youtube.com/embed/RpX5NUVzAyQ",
          "https://www.youtube.com/embed/Q70rXeYlv74",
          "https://www.youtube.com/embed/IE4gGrr_jvI",
          "https://www.youtube.com/embed/CfjiUM1iZJk",
        ],
        references: [
          "http://ly.yishihui.net/13307.htm",
          "https://www.guoyi360.com/64gua18/xj/2698.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4145.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "蛊九三":
      return {
        gua: "蛊",
        guaCi: "元亨, 利涉大川. 先甲三日, 后甲三日.",
        yao: "九三",
        yaoCi: "干父之蛊, 终无咎也.",
        origin: "干父之蛊, 小有悔, 无大咎.",
        meaning: "改正父亲的过失 即便遭遇小困难 但无大灾",
        videoUrls: [
          "https://www.youtube.com/embed/hmqa9BywpfM",
          "https://www.youtube.com/embed/sW9BSNhJHdE",
          "https://www.youtube.com/embed/4ESYPbIhlo8",
          "https://www.youtube.com/embed/RpX5NUVzAyQ",
          "https://www.youtube.com/embed/Q70rXeYlv74",
          "https://www.youtube.com/embed/IE4gGrr_jvI",
          "https://www.youtube.com/embed/CfjiUM1iZJk",
        ],
        references: [
          "http://ly.yishihui.net/13305.htm",
          "https://www.guoyi360.com/64gua18/xj/2699.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4145.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "蛊六四":
      return {
        gua: "蛊",
        guaCi: "元亨, 利涉大川. 先甲三日, 后甲三日.",
        yao: "六四",
        yaoCi: "裕父之蛊, 往未得也.",
        origin: "裕父之蛊, 往见吝.",
        meaning: "姑息纵容父亲的过错 往往出现艰难",
        videoUrls: [
          "https://www.youtube.com/embed/hmqa9BywpfM",
          "https://www.youtube.com/embed/sW9BSNhJHdE",
          "https://www.youtube.com/embed/4ESYPbIhlo8",
          "https://www.youtube.com/embed/RpX5NUVzAyQ",
          "https://www.youtube.com/embed/Q70rXeYlv74",
          "https://www.youtube.com/embed/IE4gGrr_jvI",
          "https://www.youtube.com/embed/CfjiUM1iZJk",
        ],
        references: [
          "http://ly.yishihui.net/13303.htm",
          "https://www.guoyi360.com/64gua18/xj/2700.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4145.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "蛊六五":
      return {
        gua: "蛊",
        guaCi: "元亨, 利涉大川. 先甲三日, 后甲三日.",
        yao: "六五",
        yaoCi: "干父用誉, 承以德也.",
        origin: "干父之蛊, 用誉.",
        meaning: "改正父亲的过失 会得到赞誉",
        videoUrls: [
          "https://www.youtube.com/embed/hmqa9BywpfM",
          "https://www.youtube.com/embed/sW9BSNhJHdE",
          "https://www.youtube.com/embed/4ESYPbIhlo8",
          "https://www.youtube.com/embed/RpX5NUVzAyQ",
          "https://www.youtube.com/embed/Q70rXeYlv74",
          "https://www.youtube.com/embed/IE4gGrr_jvI",
          "https://www.youtube.com/embed/CfjiUM1iZJk",
        ],
        references: [
          "http://ly.yishihui.net/13293.htm",
          "https://www.guoyi360.com/64gua18/xj/2701.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4145.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "蛊上九":
      return {
        gua: "蛊",
        guaCi: "元亨, 利涉大川. 先甲三日, 后甲三日.",
        yao: "上九",
        yaoCi: "不事王侯, 志可则也.",
        origin: "不事王侯, 高尚其事.",
        meaning: "不侍奉王侯 专注于自己的事业",
        videoUrls: [
          "https://www.youtube.com/embed/hmqa9BywpfM",
          "https://www.youtube.com/embed/sW9BSNhJHdE",
          "https://www.youtube.com/embed/4ESYPbIhlo8",
          "https://www.youtube.com/embed/RpX5NUVzAyQ",
          "https://www.youtube.com/embed/Q70rXeYlv74",
          "https://www.youtube.com/embed/IE4gGrr_jvI",
          "https://www.youtube.com/embed/CfjiUM1iZJk",
        ],
        references: [
          "http://ly.yishihui.net/13287.htm",
          "https://www.guoyi360.com/64gua18/xj/2702.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4145.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "临初九":
      return {
        gua: "临",
        guaCi: "元, 亨, 利, 贞. 至于八月有凶.",
        yao: "初九",
        yaoCi: "咸临, 贞吉, 志行正也.",
        origin: "咸临, 贞吉.",
        meaning: "心怀感化之心降临到民众 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/XBgf37CIkk0",
          "https://www.youtube.com/embed/-9F5PBUiL8s",
          "https://www.youtube.com/embed/nexMSaSkWlo",
          "https://www.youtube.com/embed/QYWqWqQFu2Q",
          "https://www.youtube.com/embed/fbNgx5C4kVA",
          "https://www.youtube.com/embed/MJ9ZGbrKc50",
          "https://www.youtube.com/embed/UW4ujluJLCA",
        ],
        references: [
          "http://ly.yishihui.net/13285.htm",
          "https://www.guoyi360.com/64gua19/xj/2753.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4146.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "临九二":
      return {
        gua: "临",
        guaCi: "元, 亨, 利, 贞. 至于八月有凶.",
        yao: "九二",
        yaoCi: "咸临, 吉, 无不利, 未顺命也.",
        origin: "咸临, 吉, 无不利.",
        meaning: "心怀感化之心降临到民众 吉祥 无所不利",
        videoUrls: [
          "https://www.youtube.com/embed/XBgf37CIkk0",
          "https://www.youtube.com/embed/-9F5PBUiL8s",
          "https://www.youtube.com/embed/nexMSaSkWlo",
          "https://www.youtube.com/embed/QYWqWqQFu2Q",
          "https://www.youtube.com/embed/fbNgx5C4kVA",
          "https://www.youtube.com/embed/MJ9ZGbrKc50",
          "https://www.youtube.com/embed/UW4ujluJLCA",
        ],
        references: [
          "http://ly.yishihui.net/13283.htm",
          "https://www.guoyi360.com/64gua19/xj/2754.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4146.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "临六三":
      return {
        gua: "临",
        guaCi: "元, 亨, 利, 贞. 至于八月有凶.",
        yao: "六三",
        yaoCi: "甘临, 位不当也. 既忧之, 咎不长也.",
        origin: "甘临, 无攸利. 既忧之, 无咎.",
        meaning: "用钳制的政策治理民众 无益处 已然知晓自己的过失 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/XBgf37CIkk0",
          "https://www.youtube.com/embed/-9F5PBUiL8s",
          "https://www.youtube.com/embed/nexMSaSkWlo",
          "https://www.youtube.com/embed/QYWqWqQFu2Q",
          "https://www.youtube.com/embed/fbNgx5C4kVA",
          "https://www.youtube.com/embed/MJ9ZGbrKc50",
          "https://www.youtube.com/embed/UW4ujluJLCA",
        ],
        references: [
          "http://ly.yishihui.net/13281.htm",
          "https://www.guoyi360.com/64gua19/xj/2755.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4146.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "临六四":
      return {
        gua: "临",
        guaCi: "元, 亨, 利, 贞. 至于八月有凶.",
        yao: "六四",
        yaoCi: "至临无咎, 位当也.",
        origin: "至临, 无咎.",
        meaning: "亲子体察民情 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/XBgf37CIkk0",
          "https://www.youtube.com/embed/-9F5PBUiL8s",
          "https://www.youtube.com/embed/nexMSaSkWlo",
          "https://www.youtube.com/embed/QYWqWqQFu2Q",
          "https://www.youtube.com/embed/fbNgx5C4kVA",
          "https://www.youtube.com/embed/MJ9ZGbrKc50",
          "https://www.youtube.com/embed/UW4ujluJLCA",
        ],
        references: [
          "http://ly.yishihui.net/13279.htm",
          "https://www.guoyi360.com/64gua19/xj/2756.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4146.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "临六五":
      return {
        gua: "临",
        guaCi: "元, 亨, 利, 贞. 至于八月有凶.",
        yao: "六五",
        yaoCi: "大君之宜, 行中之谓也.",
        origin: "知临, 大君之宜, 吉.",
        meaning: "以聪明才智实行督导 可以视为王道 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/XBgf37CIkk0",
          "https://www.youtube.com/embed/-9F5PBUiL8s",
          "https://www.youtube.com/embed/nexMSaSkWlo",
          "https://www.youtube.com/embed/QYWqWqQFu2Q",
          "https://www.youtube.com/embed/fbNgx5C4kVA",
          "https://www.youtube.com/embed/MJ9ZGbrKc50",
          "https://www.youtube.com/embed/UW4ujluJLCA",
        ],
        references: [
          "http://ly.yishihui.net/13277.htm",
          "https://www.guoyi360.com/64gua19/xj/2757.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4146.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "临上六":
      return {
        gua: "临",
        guaCi: "元, 亨, 利, 贞. 至于八月有凶.",
        yao: "上六",
        yaoCi: "敦临之吉, 志在内也.",
        origin: "敦临, 吉, 无咎.",
        meaning: "敦厚宽仁 体察民情 可获吉祥 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/XBgf37CIkk0",
          "https://www.youtube.com/embed/-9F5PBUiL8s",
          "https://www.youtube.com/embed/nexMSaSkWlo",
          "https://www.youtube.com/embed/QYWqWqQFu2Q",
          "https://www.youtube.com/embed/fbNgx5C4kVA",
          "https://www.youtube.com/embed/MJ9ZGbrKc50",
          "https://www.youtube.com/embed/UW4ujluJLCA",
        ],
        references: [
          "http://ly.yishihui.net/13275.htm",
          "https://www.guoyi360.com/64gua19/xj/2758.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4146.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-18.html",
        ],
      };
    case "观初六":
      return {
        gua: "观",
        guaCi: "盥而不荐, 有孚颙若.",
        yao: "初六",
        yaoCi: "初六童观, 小人道也.",
        origin: "童观, 小人无咎, 君子吝.",
        meaning: "以孩童的视角观察事物 小人没有灾祸 君子会有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/Z_b6ZuOwjbQ",
          "https://www.youtube.com/embed/WOov5rxmVL8",
          "https://www.youtube.com/embed/Yy_iV5Td8IU",
          "https://www.youtube.com/embed/N4Yf7BNw5sc",
          "https://www.youtube.com/embed/JHe0V9-1g54",
          "https://www.youtube.com/embed/YBXspOje5vU",
          "https://www.youtube.com/embed/tlmsgx45LiM",
        ],
        references: [
          "http://ly.yishihui.net/13273.htm",
          "https://www.guoyi360.com/64gua20/xj/2841.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4147.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-20.html",
        ],
      };
    case "观六二":
      return {
        gua: "观",
        guaCi: "盥而不荐, 有孚颙若.",
        yao: "六二",
        yaoCi: "窥观女贞, 亦可丑也.",
        origin: "窥观, 利女贞.",
        meaning: "暗中窥探观察 适宜女子正固",
        videoUrls: [
          "https://www.youtube.com/embed/Z_b6ZuOwjbQ",
          "https://www.youtube.com/embed/WOov5rxmVL8",
          "https://www.youtube.com/embed/Yy_iV5Td8IU",
          "https://www.youtube.com/embed/N4Yf7BNw5sc",
          "https://www.youtube.com/embed/JHe0V9-1g54",
          "https://www.youtube.com/embed/YBXspOje5vU",
          "https://www.youtube.com/embed/tlmsgx45LiM",
        ],
        references: [
          "http://ly.yishihui.net/13271.htm",
          "https://www.guoyi360.com/64gua20/xj/2842.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4147.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-20.html",
        ],
      };
    case "观六三":
      return {
        gua: "观",
        guaCi: "盥而不荐, 有孚颙若.",
        yao: "六三",
        yaoCi: "观我生进退, 未失道也.",
        origin: "观我生, 进退.",
        meaning: "查醒自己的言行 审时度势 小心谨慎的决定进退",
        videoUrls: [
          "https://www.youtube.com/embed/Z_b6ZuOwjbQ",
          "https://www.youtube.com/embed/WOov5rxmVL8",
          "https://www.youtube.com/embed/Yy_iV5Td8IU",
          "https://www.youtube.com/embed/N4Yf7BNw5sc",
          "https://www.youtube.com/embed/JHe0V9-1g54",
          "https://www.youtube.com/embed/YBXspOje5vU",
          "https://www.youtube.com/embed/tlmsgx45LiM",
        ],
        references: [
          "http://ly.yishihui.net/13269.htm",
          "https://www.guoyi360.com/64gua20/xj/2843.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4147.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-20.html",
        ],
      };
    case "观六四":
      return {
        gua: "观",
        guaCi: "盥而不荐, 有孚颙若.",
        yao: "六四",
        yaoCi: "观国之光, 尚宾也.",
        origin: "观国之光, 利用宾于王.",
        meaning: "观察一个国家的风土人情 适宜用宾客之力朝见君王",
        videoUrls: [
          "https://www.youtube.com/embed/Z_b6ZuOwjbQ",
          "https://www.youtube.com/embed/WOov5rxmVL8",
          "https://www.youtube.com/embed/Yy_iV5Td8IU",
          "https://www.youtube.com/embed/N4Yf7BNw5sc",
          "https://www.youtube.com/embed/JHe0V9-1g54",
          "https://www.youtube.com/embed/YBXspOje5vU",
          "https://www.youtube.com/embed/tlmsgx45LiM",
        ],
        references: [
          "http://ly.yishihui.net/13267.htm",
          "https://www.guoyi360.com/64gua20/xj/2844.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4147.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-20.html",
        ],
      };
    case "观九五":
      return {
        gua: "观",
        guaCi: "盥而不荐, 有孚颙若.",
        yao: "九五",
        yaoCi: "观我生, 观民也.",
        origin: "观我生, 君子无咎.",
        meaning: "观察同国的民情 君子无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/Z_b6ZuOwjbQ",
          "https://www.youtube.com/embed/WOov5rxmVL8",
          "https://www.youtube.com/embed/Yy_iV5Td8IU",
          "https://www.youtube.com/embed/N4Yf7BNw5sc",
          "https://www.youtube.com/embed/JHe0V9-1g54",
          "https://www.youtube.com/embed/YBXspOje5vU",
          "https://www.youtube.com/embed/tlmsgx45LiM",
        ],
        references: [
          "http://ly.yishihui.net/13265.htm",
          "https://www.guoyi360.com/64gua20/xj/2845.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4147.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-20.html",
        ],
      };
    case "观上九":
      return {
        gua: "观",
        guaCi: "盥而不荐, 有孚颙若.",
        yao: "上九",
        yaoCi: "观其生, 志未平也.",
        origin: "观其生, 君子无咎.",
        meaning: "观察外国的民情 君子无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/Z_b6ZuOwjbQ",
          "https://www.youtube.com/embed/WOov5rxmVL8",
          "https://www.youtube.com/embed/Yy_iV5Td8IU",
          "https://www.youtube.com/embed/N4Yf7BNw5sc",
          "https://www.youtube.com/embed/JHe0V9-1g54",
          "https://www.youtube.com/embed/YBXspOje5vU",
          "https://www.youtube.com/embed/tlmsgx45LiM",
        ],
        references: [
          "http://ly.yishihui.net/13263.htm",
          "https://www.guoyi360.com/64gua20/xj/2846.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4147.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-20.html",
        ],
      };
    case "噬嗑初九":
      return {
        gua: "噬嗑",
        guaCi: "亨. 利用狱.",
        yao: "初九",
        yaoCi: "履校灭趾, 不行也.",
        origin: "屦校灭趾, 无咎.",
        meaning: "脚上带上木枷 损伤了脚趾 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/nVtcCwAT8-g",
          "https://www.youtube.com/embed/9T4KUXxgyy8",
          "https://www.youtube.com/embed/LKMaVsgFlko",
          "https://www.youtube.com/embed/AeqBFmVOOoE",
          "https://www.youtube.com/embed/6iRz-D8Dswc",
          "https://www.youtube.com/embed/jISoXGJRZOs",
          "https://www.youtube.com/embed/lJUXbh8G5Bk",
        ],
        references: [
          "http://ly.yishihui.net/13261.htm",
          "https://www.guoyi360.com/64gua21/xj/2910.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4148.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-21.html",
        ],
      };
    case "噬嗑六二":
      return {
        gua: "噬嗑",
        guaCi: "亨. 利用狱.",
        yao: "六二",
        yaoCi: "噬肤灭鼻, 乘刚也.",
        origin: "噬肤灭鼻, 无咎.",
        meaning: "咬食肥肉 使鼻子陷入肉中 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/nVtcCwAT8-g",
          "https://www.youtube.com/embed/9T4KUXxgyy8",
          "https://www.youtube.com/embed/LKMaVsgFlko",
          "https://www.youtube.com/embed/AeqBFmVOOoE",
          "https://www.youtube.com/embed/6iRz-D8Dswc",
          "https://www.youtube.com/embed/jISoXGJRZOs",
          "https://www.youtube.com/embed/lJUXbh8G5Bk",
        ],
        references: [
          "http://ly.yishihui.net/13259.htm",
          "https://www.guoyi360.com/64gua21/xj/2911.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4148.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-21.html",
        ],
      };
    case "噬嗑六三":
      return {
        gua: "噬嗑",
        guaCi: "亨. 利用狱.",
        yao: "六三",
        yaoCi: "遇毒, 位不当也.",
        origin: "噬腊肉, 遇毒. 小吝, 无咎.",
        meaning: "咬腊肉干 中了毒 小有不顺 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/nVtcCwAT8-g",
          "https://www.youtube.com/embed/9T4KUXxgyy8",
          "https://www.youtube.com/embed/LKMaVsgFlko",
          "https://www.youtube.com/embed/AeqBFmVOOoE",
          "https://www.youtube.com/embed/6iRz-D8Dswc",
          "https://www.youtube.com/embed/jISoXGJRZOs",
          "https://www.youtube.com/embed/lJUXbh8G5Bk",
        ],
        references: [
          "http://ly.yishihui.net/13257.htm",
          "https://www.guoyi360.com/64gua21/xj/2912.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4148.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-21.html",
        ],
      };
    case "噬嗑九四":
      return {
        gua: "噬嗑",
        guaCi: "亨. 利用狱.",
        yao: "九四",
        yaoCi: "利艰贞吉, 未光也.",
        origin: "噬干胏, 得金矢. 利艰贞, 吉.",
        meaning: "啃吃骨头 发现骨头中有金属箭头 卜问艰难之事 结果是吉利的",
        videoUrls: [
          "https://www.youtube.com/embed/nVtcCwAT8-g",
          "https://www.youtube.com/embed/9T4KUXxgyy8",
          "https://www.youtube.com/embed/LKMaVsgFlko",
          "https://www.youtube.com/embed/AeqBFmVOOoE",
          "https://www.youtube.com/embed/6iRz-D8Dswc",
          "https://www.youtube.com/embed/jISoXGJRZOs",
          "https://www.youtube.com/embed/lJUXbh8G5Bk",
        ],
        references: [
          "http://ly.yishihui.net/13248.htm",
          "https://www.guoyi360.com/64gua21/xj/2913.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4148.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-21.html",
        ],
      };
    case "噬嗑六五":
      return {
        gua: "噬嗑",
        guaCi: "亨. 利用狱.",
        yao: "六五",
        yaoCi: "贞厉无咎, 得当也.",
        origin: "噬干肉, 得黄金. 贞厉, 无咎.",
        meaning: "吃风干的肉 得到黄金 正固思危 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/nVtcCwAT8-g",
          "https://www.youtube.com/embed/9T4KUXxgyy8",
          "https://www.youtube.com/embed/LKMaVsgFlko",
          "https://www.youtube.com/embed/AeqBFmVOOoE",
          "https://www.youtube.com/embed/6iRz-D8Dswc",
          "https://www.youtube.com/embed/jISoXGJRZOs",
          "https://www.youtube.com/embed/lJUXbh8G5Bk",
        ],
        references: [
          "http://ly.yishihui.net/13241.htm",
          "https://www.guoyi360.com/64gua21/xj/2914.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4148.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-21.html",
        ],
      };
    case "噬嗑上九":
      return {
        gua: "噬嗑",
        guaCi: "亨. 利用狱.",
        yao: "上九",
        yaoCi: "何校灭耳, 聪不明也.",
        origin: "何校灭耳, 凶.",
        meaning: "肩带木枷遮住耳朵 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/nVtcCwAT8-g",
          "https://www.youtube.com/embed/9T4KUXxgyy8",
          "https://www.youtube.com/embed/LKMaVsgFlko",
          "https://www.youtube.com/embed/AeqBFmVOOoE",
          "https://www.youtube.com/embed/6iRz-D8Dswc",
          "https://www.youtube.com/embed/jISoXGJRZOs",
          "https://www.youtube.com/embed/lJUXbh8G5Bk",
        ],
        references: [
          "http://ly.yishihui.net/13239.htm",
          "https://www.guoyi360.com/64gua21/xj/2915.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4148.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-21.html",
        ],
      };
    case "贲初九":
      return {
        gua: "贲",
        guaCi: "亨. 小利有攸往.",
        yao: "初九",
        yaoCi: "舍车而徒, 义弗乘也.",
        origin: "贲其趾, 舍车而徒.",
        meaning: "修饰脚趾弃车步行而走",
        videoUrls: [
          "https://www.youtube.com/embed/YDdFOCjnAWE",
          "https://www.youtube.com/embed/rJpvLBn_a_k",
          "https://www.youtube.com/embed/aM6Mwc1-QGc",
          "https://www.youtube.com/embed/wax3sYmQxPU",
          "https://www.youtube.com/embed/-SHA1eKSKCs",
          "https://www.youtube.com/embed/OrzxhM5LtEA",
          "https://www.youtube.com/embed/EzAi53TIjkk",
        ],
        references: [
          "http://ly.yishihui.net/13237.htm",
          "https://www.guoyi360.com/64gua22/xj/3190.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4149.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-22.html",
        ],
      };
    case "贲六二":
      return {
        gua: "贲",
        guaCi: "亨. 小利有攸往.",
        yao: "六二",
        yaoCi: "贲其须, 与上兴也.",
        origin: "贲其须.",
        meaning: "修饰自己的胡须 帮助君王振兴国家",
        videoUrls: [
          "https://www.youtube.com/embed/YDdFOCjnAWE",
          "https://www.youtube.com/embed/rJpvLBn_a_k",
          "https://www.youtube.com/embed/aM6Mwc1-QGc",
          "https://www.youtube.com/embed/wax3sYmQxPU",
          "https://www.youtube.com/embed/-SHA1eKSKCs",
          "https://www.youtube.com/embed/OrzxhM5LtEA",
          "https://www.youtube.com/embed/EzAi53TIjkk",
        ],
        references: [
          "http://ly.yishihui.net/13235.htm",
          "https://www.guoyi360.com/64gua22/xj/3191.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4149.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-22.html",
        ],
      };
    case "贲九三":
      return {
        gua: "贲",
        guaCi: "亨. 小利有攸往.",
        yao: "九三",
        yaoCi: "永贞之吉, 终莫之陵也.",
        origin: "贲如, 濡如, 永贞吉.",
        meaning: "修饰过后再加以润色 长期正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/YDdFOCjnAWE",
          "https://www.youtube.com/embed/rJpvLBn_a_k",
          "https://www.youtube.com/embed/aM6Mwc1-QGc",
          "https://www.youtube.com/embed/wax3sYmQxPU",
          "https://www.youtube.com/embed/-SHA1eKSKCs",
          "https://www.youtube.com/embed/OrzxhM5LtEA",
          "https://www.youtube.com/embed/EzAi53TIjkk",
        ],
        references: [
          "http://ly.yishihui.net/13233.htm",
          "https://www.guoyi360.com/64gua22/xj/3192.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4149.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-22.html",
        ],
      };
    case "贲六四":
      return {
        gua: "贲",
        guaCi: "亨. 小利有攸往.",
        yao: "六四",
        yaoCi: "六四, 当位疑也. 匪寇婚媾, 终无尤也.",
        origin: "贲如, 皤如, 白马翰如, 匪寇婚媾.",
        meaning:
          "修饰得如此雅致 骑的白马有如此纯洁无暇 不是盗寇 是来求婚的佳人",
        videoUrls: [
          "https://www.youtube.com/embed/YDdFOCjnAWE",
          "https://www.youtube.com/embed/rJpvLBn_a_k",
          "https://www.youtube.com/embed/aM6Mwc1-QGc",
          "https://www.youtube.com/embed/wax3sYmQxPU",
          "https://www.youtube.com/embed/-SHA1eKSKCs",
          "https://www.youtube.com/embed/OrzxhM5LtEA",
          "https://www.youtube.com/embed/EzAi53TIjkk",
        ],
        references: [
          "http://ly.yishihui.net/13231.htm",
          "https://www.guoyi360.com/64gua22/xj/3193.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4149.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-22.html",
        ],
      };
    case "贲六五":
      return {
        gua: "贲",
        guaCi: "亨. 小利有攸往.",
        yao: "六五",
        yaoCi: "六五之吉, 有喜也.",
        origin: "贲于丘园, 束帛戋戋, 吝, 终吉.",
        meaning: "修饰山丘园林 用了大量的布帛 艰难 但最终会获得吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/YDdFOCjnAWE",
          "https://www.youtube.com/embed/rJpvLBn_a_k",
          "https://www.youtube.com/embed/aM6Mwc1-QGc",
          "https://www.youtube.com/embed/wax3sYmQxPU",
          "https://www.youtube.com/embed/-SHA1eKSKCs",
          "https://www.youtube.com/embed/OrzxhM5LtEA",
          "https://www.youtube.com/embed/EzAi53TIjkk",
        ],
        references: [
          "http://ly.yishihui.net/13229.htm",
          "https://www.guoyi360.com/64gua22/xj/3194.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4149.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-22.html",
        ],
      };
    case "贲上九":
      return {
        gua: "贲",
        guaCi: "亨. 小利有攸往.",
        yao: "上九",
        yaoCi: "白贲无咎, 上得志也.",
        origin: "白贲, 无咎.",
        meaning: "以白色为装饰 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/YDdFOCjnAWE",
          "https://www.youtube.com/embed/rJpvLBn_a_k",
          "https://www.youtube.com/embed/aM6Mwc1-QGc",
          "https://www.youtube.com/embed/wax3sYmQxPU",
          "https://www.youtube.com/embed/-SHA1eKSKCs",
          "https://www.youtube.com/embed/OrzxhM5LtEA",
          "https://www.youtube.com/embed/EzAi53TIjkk",
        ],
        references: [
          "http://ly.yishihui.net/13227.htm",
          "https://www.guoyi360.com/64gua22/xj/3195.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4149.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-22.html",
        ],
      };
    case "剥初六":
      return {
        gua: "剥",
        guaCi: "不利有攸往.",
        yao: "初六",
        yaoCi: "剥床以足, 以灭下也.",
        origin: "剥床以足, 蔑贞, 凶.",
        meaning: "剥落床体从床脚开始 致使床腿损坏 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/yUu8eRR_vbw",
          "https://www.youtube.com/embed/Y-gNaNHoSGE",
          "https://www.youtube.com/embed/xny5zmI18To",
          "https://www.youtube.com/embed/Hz5DjIi-hes",
          "https://www.youtube.com/embed/Kzfpgrg-EF4",
          "https://www.youtube.com/embed/wCC5wviW6eA",
          "https://www.youtube.com/embed/7b6hmFkMRDk",
        ],
        references: [
          "http://ly.yishihui.net/13225.htm",
          "https://www.guoyi360.com/64gua23/xj/3545.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4150.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-23.html",
        ],
      };
    case "剥六二":
      return {
        gua: "剥",
        guaCi: "不利有攸往.",
        yao: "六二",
        yaoCi: "剥床以辨, 未有与也.",
        origin: "剥床以辨, 蔑贞, 凶.",
        meaning: "剥落床体从床头开始 致使床头损坏 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/yUu8eRR_vbw",
          "https://www.youtube.com/embed/Y-gNaNHoSGE",
          "https://www.youtube.com/embed/xny5zmI18To",
          "https://www.youtube.com/embed/Hz5DjIi-hes",
          "https://www.youtube.com/embed/Kzfpgrg-EF4",
          "https://www.youtube.com/embed/wCC5wviW6eA",
          "https://www.youtube.com/embed/7b6hmFkMRDk",
        ],
        references: [
          "http://ly.yishihui.net/13223.htm",
          "https://www.guoyi360.com/64gua23/xj/3546.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4150.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-23.html",
        ],
      };
    case "剥六三":
      return {
        gua: "剥",
        guaCi: "不利有攸往.",
        yao: "六三",
        yaoCi: "剥之无咎, 失上下也.",
        origin: "剥之, 无咎.",
        meaning: "剥落 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/yUu8eRR_vbw",
          "https://www.youtube.com/embed/Y-gNaNHoSGE",
          "https://www.youtube.com/embed/xny5zmI18To",
          "https://www.youtube.com/embed/Hz5DjIi-hes",
          "https://www.youtube.com/embed/Kzfpgrg-EF4",
          "https://www.youtube.com/embed/wCC5wviW6eA",
          "https://www.youtube.com/embed/7b6hmFkMRDk",
        ],
        references: [
          "http://ly.yishihui.net/13221.htm",
          "https://www.guoyi360.com/64gua23/xj/3547.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4150.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-23.html",
        ],
      };
    case "剥六四":
      return {
        gua: "剥",
        guaCi: "不利有攸往.",
        yao: "六四",
        yaoCi: "剥床以肤, 切近灾也.",
        origin: "剥床以肤, 凶.",
        meaning: "剥蚀到床板 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/yUu8eRR_vbw",
          "https://www.youtube.com/embed/Y-gNaNHoSGE",
          "https://www.youtube.com/embed/xny5zmI18To",
          "https://www.youtube.com/embed/Hz5DjIi-hes",
          "https://www.youtube.com/embed/Kzfpgrg-EF4",
          "https://www.youtube.com/embed/wCC5wviW6eA",
          "https://www.youtube.com/embed/7b6hmFkMRDk",
        ],
        references: [
          "http://ly.yishihui.net/13219.htm",
          "https://www.guoyi360.com/64gua23/xj/3548.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4150.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-23.html",
        ],
      };
    case "剥六五":
      return {
        gua: "剥",
        guaCi: "不利有攸往.",
        yao: "六五",
        yaoCi: "以宫人宠, 终无尤也.",
        origin: "贯鱼, 以宫人宠, 无不利.",
        meaning: "像鱼鲜排成一行一样 以宫人的身份受到宠幸 无往不利",
        videoUrls: [
          "https://www.youtube.com/embed/yUu8eRR_vbw",
          "https://www.youtube.com/embed/Y-gNaNHoSGE",
          "https://www.youtube.com/embed/xny5zmI18To",
          "https://www.youtube.com/embed/Hz5DjIi-hes",
          "https://www.youtube.com/embed/Kzfpgrg-EF4",
          "https://www.youtube.com/embed/wCC5wviW6eA",
          "https://www.youtube.com/embed/7b6hmFkMRDk",
        ],
        references: [
          "http://ly.yishihui.net/13217.htm",
          "https://www.guoyi360.com/64gua23/xj/3549.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4150.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-23.html",
        ],
      };
    case "剥上九":
      return {
        gua: "剥",
        guaCi: "不利有攸往.",
        yao: "上九",
        yaoCi: "君子得舆, 民所载也. 小人剥庐, 终不可用也.",
        origin: "硕果不食, 君子得舆, 小人剥庐.",
        meaning: "不吃硕大的果子 君子得到民众的拥戴 小人遭到覆巢之灾",
        videoUrls: [
          "https://www.youtube.com/embed/yUu8eRR_vbw",
          "https://www.youtube.com/embed/Y-gNaNHoSGE",
          "https://www.youtube.com/embed/xny5zmI18To",
          "https://www.youtube.com/embed/Hz5DjIi-hes",
          "https://www.youtube.com/embed/Kzfpgrg-EF4",
          "https://www.youtube.com/embed/wCC5wviW6eA",
          "https://www.youtube.com/embed/7b6hmFkMRDk",
        ],
        references: [
          "http://ly.yishihui.net/13210.htm",
          "https://www.guoyi360.com/64gua23/xj/3550.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4150.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-23.html",
        ],
      };
    case "复初九":
      return {
        gua: "复",
        guaCi: "亨. 出入无疾, 朋来无咎. 反复其道, 七日来复, 利有攸往.",
        yao: "初九",
        yaoCi: "不远之复, 以修身也.",
        origin: "不远复, 无衹悔, 元吉.",
        meaning: "行而未远就适时而返 没有造成很大的悔意 大吉大利",
        videoUrls: [
          "https://www.youtube.com/embed/AT_tZwbRG3I",
          "https://www.youtube.com/embed/EkA8BnIV1II",
          "https://www.youtube.com/embed/PF15xR7uZ0c",
          "https://www.youtube.com/embed/3LmuU1dKC9A",
          "https://www.youtube.com/embed/rbYU-GOwbK0",
          "https://www.youtube.com/embed/ayD8sg1Eulw",
          "https://www.youtube.com/embed/CI53XgsHMNI",
        ],
        references: [
          "http://ly.yishihui.net/13208.htm",
          "https://www.guoyi360.com/64gua24/xj/3907.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4152.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-24.html",
        ],
      };
    case "复六二":
      return {
        gua: "复",
        guaCi: "亨. 出入无疾, 朋来无咎. 反复其道, 七日来复, 利有攸往.",
        yao: "六二",
        yaoCi: "休复之吉, 以下仁也.",
        origin: "休复, 吉.",
        meaning: "停止返回 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/AT_tZwbRG3I",
          "https://www.youtube.com/embed/EkA8BnIV1II",
          "https://www.youtube.com/embed/PF15xR7uZ0c",
          "https://www.youtube.com/embed/3LmuU1dKC9A",
          "https://www.youtube.com/embed/rbYU-GOwbK0",
          "https://www.youtube.com/embed/ayD8sg1Eulw",
          "https://www.youtube.com/embed/CI53XgsHMNI",
        ],
        references: [
          "http://ly.yishihui.net/13206.htm",
          "https://www.guoyi360.com/64gua24/xj/3908.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4152.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-24.html",
        ],
      };
    case "复六三":
      return {
        gua: "复",
        guaCi: "亨. 出入无疾, 朋来无咎. 反复其道, 七日来复, 利有攸往.",
        yao: "六三",
        yaoCi: "频复之厉, 义无咎也.",
        origin: "频复, 厉, 无咎.",
        meaning: "频繁的返回 艰难 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/AT_tZwbRG3I",
          "https://www.youtube.com/embed/EkA8BnIV1II",
          "https://www.youtube.com/embed/PF15xR7uZ0c",
          "https://www.youtube.com/embed/3LmuU1dKC9A",
          "https://www.youtube.com/embed/rbYU-GOwbK0",
          "https://www.youtube.com/embed/ayD8sg1Eulw",
          "https://www.youtube.com/embed/CI53XgsHMNI",
        ],
        references: [
          "http://ly.yishihui.net/13204.htm",
          "https://www.guoyi360.com/64gua24/xj/3909.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4152.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-24.html",
        ],
      };
    case "复六四":
      return {
        gua: "复",
        guaCi: "亨. 出入无疾, 朋来无咎. 反复其道, 七日来复, 利有攸往.",
        yao: "六四",
        yaoCi: "中行独复, 以从道也.",
        origin: "中行独复.",
        meaning: "中途独自返回",
        videoUrls: [
          "https://www.youtube.com/embed/AT_tZwbRG3I",
          "https://www.youtube.com/embed/EkA8BnIV1II",
          "https://www.youtube.com/embed/PF15xR7uZ0c",
          "https://www.youtube.com/embed/3LmuU1dKC9A",
          "https://www.youtube.com/embed/rbYU-GOwbK0",
          "https://www.youtube.com/embed/ayD8sg1Eulw",
          "https://www.youtube.com/embed/CI53XgsHMNI",
        ],
        references: [
          "http://ly.yishihui.net/13202.htm",
          "https://www.guoyi360.com/64gua24/xj/3910.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4152.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-24.html",
        ],
      };
    case "复六五":
      return {
        gua: "复",
        guaCi: "亨. 出入无疾, 朋来无咎. 反复其道, 七日来复, 利有攸往.",
        yao: "六五",
        yaoCi: "敦复无悔, 中以自考也.",
        origin: "敦复，无悔.",
        meaning: "敦厚笃诚的返回 没有悔恨",
        videoUrls: [
          "https://www.youtube.com/embed/AT_tZwbRG3I",
          "https://www.youtube.com/embed/EkA8BnIV1II",
          "https://www.youtube.com/embed/PF15xR7uZ0c",
          "https://www.youtube.com/embed/3LmuU1dKC9A",
          "https://www.youtube.com/embed/rbYU-GOwbK0",
          "https://www.youtube.com/embed/ayD8sg1Eulw",
          "https://www.youtube.com/embed/CI53XgsHMNI",
        ],
        references: [
          "http://ly.yishihui.net/13200.htm",
          "https://www.guoyi360.com/64gua24/xj/3911.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4152.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-24.html",
        ],
      };
    case "复上六":
      return {
        gua: "复",
        guaCi: "亨. 出入无疾, 朋来无咎. 反复其道, 七日来复, 利有攸往.",
        yao: "上六",
        yaoCi: "迷复之凶, 反君道也.",
        origin:
          "迷复, 凶, 有灾眚. 用行师, 终有大败, 以其国君凶, 至于十年不克征.",
        meaning:
          "迷失在返回的途中 有凶险 会有灾难 出兵打仗 最终惨败凶险来自于国君 十年不可以出战",
        videoUrls: [
          "https://www.youtube.com/embed/AT_tZwbRG3I",
          "https://www.youtube.com/embed/EkA8BnIV1II",
          "https://www.youtube.com/embed/PF15xR7uZ0c",
          "https://www.youtube.com/embed/3LmuU1dKC9A",
          "https://www.youtube.com/embed/rbYU-GOwbK0",
          "https://www.youtube.com/embed/ayD8sg1Eulw",
          "https://www.youtube.com/embed/CI53XgsHMNI",
        ],
        references: [
          "http://ly.yishihui.net/13198.htm",
          "https://www.guoyi360.com/64gua24/xj/3912.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4152.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-24.html",
        ],
      };
    case "无妄初九":
      return {
        gua: "无妄",
        guaCi: "元亨利贞. 其匪正有眚, 不利有攸往.",
        yao: "初九",
        yaoCi: "无妄之往, 得志也.",
        origin: "无妄, 往吉.",
        meaning: "不妄为 按照自己的心志 前行吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/x1hz0zTk_0g",
          "https://www.youtube.com/embed/R-wUnp-itc8",
          "https://www.youtube.com/embed/cKou4Oxsj98",
          "https://www.youtube.com/embed/U2eDxTGGUHU",
          "https://www.youtube.com/embed/xMn7kR1Nskk",
          "https://www.youtube.com/embed/sd2u5-anb38",
          "https://www.youtube.com/embed/vWW4caKcVtM",
        ],
        references: [
          "http://ly.yishihui.net/13196.htm",
          "https://www.guoyi360.com/64gua25/xj/5188.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4153.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-25.html",
        ],
      };
    case "无妄六二":
      return {
        gua: "无妄",
        guaCi: "元亨利贞. 其匪正有眚, 不利有攸往.",
        yao: "六二",
        yaoCi: "不耕获, 未富也.",
        origin: "不耕获, 不菑畲, 则利有攸往.",
        meaning: "不耕耘却有收获 不开荒却有良田 则有利于有所作为",
        videoUrls: [
          "https://www.youtube.com/embed/x1hz0zTk_0g",
          "https://www.youtube.com/embed/R-wUnp-itc8",
          "https://www.youtube.com/embed/cKou4Oxsj98",
          "https://www.youtube.com/embed/U2eDxTGGUHU",
          "https://www.youtube.com/embed/xMn7kR1Nskk",
          "https://www.youtube.com/embed/sd2u5-anb38",
          "https://www.youtube.com/embed/vWW4caKcVtM",
        ],
        references: [
          "http://ly.yishihui.net/13194.htm",
          "https://www.guoyi360.com/64gua25/xj/5189.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4153.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-25.html",
        ],
      };
    case "无妄六三":
      return {
        gua: "无妄",
        guaCi: "元亨利贞. 其匪正有眚, 不利有攸往.",
        yao: "六三",
        yaoCi: "行人得牛, 邑人灾也.",
        origin: "无妄之灾. 或系之牛, 行人之得, 邑人之灾.",
        meaning: "意想不到的灾祸到来 路人牵走被绳子拴住的耕牛 城里人有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/x1hz0zTk_0g",
          "https://www.youtube.com/embed/R-wUnp-itc8",
          "https://www.youtube.com/embed/cKou4Oxsj98",
          "https://www.youtube.com/embed/U2eDxTGGUHU",
          "https://www.youtube.com/embed/xMn7kR1Nskk",
          "https://www.youtube.com/embed/sd2u5-anb38",
          "https://www.youtube.com/embed/vWW4caKcVtM",
        ],
        references: [
          "http://ly.yishihui.net/13192.htm",
          "https://www.guoyi360.com/64gua25/xj/5190.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4153.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-25.html",
        ],
      };
    case "无妄九四":
      return {
        gua: "无妄",
        guaCi: "元亨利贞. 其匪正有眚, 不利有攸往.",
        yao: "九四",
        yaoCi: "可贞无咎, 固有之也.",
        origin: "可贞, 无咎.",
        meaning: "可以正固 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/x1hz0zTk_0g",
          "https://www.youtube.com/embed/R-wUnp-itc8",
          "https://www.youtube.com/embed/cKou4Oxsj98",
          "https://www.youtube.com/embed/U2eDxTGGUHU",
          "https://www.youtube.com/embed/xMn7kR1Nskk",
          "https://www.youtube.com/embed/sd2u5-anb38",
          "https://www.youtube.com/embed/vWW4caKcVtM",
        ],
        references: [
          "http://ly.yishihui.net/13190.htm",
          "https://www.guoyi360.com/64gua25/xj/5191.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4153.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-25.html",
        ],
      };
    case "无妄九五":
      return {
        gua: "无妄",
        guaCi: "元亨利贞. 其匪正有眚, 不利有攸往.",
        yao: "九五",
        yaoCi: "无妄之药, 不可试也.",
        origin: "无妄之疾, 勿药有喜.",
        meaning: "得了意想不到的疾病 不比用药治疗 自会痊愈",
        videoUrls: [
          "https://www.youtube.com/embed/x1hz0zTk_0g",
          "https://www.youtube.com/embed/R-wUnp-itc8",
          "https://www.youtube.com/embed/cKou4Oxsj98",
          "https://www.youtube.com/embed/U2eDxTGGUHU",
          "https://www.youtube.com/embed/xMn7kR1Nskk",
          "https://www.youtube.com/embed/sd2u5-anb38",
          "https://www.youtube.com/embed/vWW4caKcVtM",
        ],
        references: [
          "http://ly.yishihui.net/13188.htm",
          "https://www.guoyi360.com/64gua25/xj/5192.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4153.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-25.html",
        ],
      };
    case "无妄上九":
      return {
        gua: "无妄",
        guaCi: "元亨利贞. 其匪正有眚, 不利有攸往.",
        yao: "上九",
        yaoCi: "无妄之行, 穷之灾也.",
        origin: "无妄, 行有眚, 无攸利.",
        meaning: "切勿妄为 将有灾祸 无益处",
        videoUrls: [
          "https://www.youtube.com/embed/x1hz0zTk_0g",
          "https://www.youtube.com/embed/R-wUnp-itc8",
          "https://www.youtube.com/embed/cKou4Oxsj98",
          "https://www.youtube.com/embed/U2eDxTGGUHU",
          "https://www.youtube.com/embed/xMn7kR1Nskk",
          "https://www.youtube.com/embed/sd2u5-anb38",
          "https://www.youtube.com/embed/vWW4caKcVtM",
        ],
        references: [
          "http://ly.yishihui.net/13186.htm",
          "https://www.guoyi360.com/64gua25/xj/5193.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4153.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-25.html",
        ],
      };
    case "大畜初九":
      return {
        gua: "大畜",
        guaCi: "利贞, 不家食吉, 利涉大川.",
        yao: "初九",
        yaoCi: "有厉利已, 不犯灾也.",
        origin: "有厉, 利已.",
        meaning: "有危险 适宜停止",
        videoUrls: [
          "https://www.youtube.com/embed/Td5fwwQ7120",
          "https://www.youtube.com/embed/3VTXqU49y8U",
          "https://www.youtube.com/embed/l42Zw2OKYVQ",
          "https://www.youtube.com/embed/5heodI7CAcE",
          "https://www.youtube.com/embed/-cT8ijOtWtA",
          "https://www.youtube.com/embed/vKgo1xDePQo",
          "https://www.youtube.com/embed/BBmuD_diAnM",
        ],
        references: [
          "https://www.guoyi360.com/64gua26/xj/5314.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4159.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-26.html",
        ],
      };
    case "大畜九二":
      return {
        gua: "大畜",
        guaCi: "利贞, 不家食吉, 利涉大川.",
        yao: "九二",
        yaoCi: "舆说辐, 中无尤也.",
        origin: "舆说輹.",
        meaning: "车身与车轴相分离",
        videoUrls: [
          "https://www.youtube.com/embed/Td5fwwQ7120",
          "https://www.youtube.com/embed/3VTXqU49y8U",
          "https://www.youtube.com/embed/l42Zw2OKYVQ",
          "https://www.youtube.com/embed/5heodI7CAcE",
          "https://www.youtube.com/embed/-cT8ijOtWtA",
          "https://www.youtube.com/embed/vKgo1xDePQo",
          "https://www.youtube.com/embed/BBmuD_diAnM",
        ],
        references: [
          "https://www.guoyi360.com/64gua26/xj/5315.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4159.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-26.html",
        ],
      };
    case "大畜九三":
      return {
        gua: "大畜",
        guaCi: "利贞, 不家食吉, 利涉大川.",
        yao: "九三",
        yaoCi: "利有攸往, 上合志也.",
        origin: "良马逐, 利艰贞. 曰闲舆卫, 利有攸往.",
        meaning: "骏马互相追逐 有利于艰难中正固 每日演练战车防卫 适宜有所作为",
        videoUrls: [
          "https://www.youtube.com/embed/Td5fwwQ7120",
          "https://www.youtube.com/embed/3VTXqU49y8U",
          "https://www.youtube.com/embed/l42Zw2OKYVQ",
          "https://www.youtube.com/embed/5heodI7CAcE",
          "https://www.youtube.com/embed/-cT8ijOtWtA",
          "https://www.youtube.com/embed/vKgo1xDePQo",
          "https://www.youtube.com/embed/BBmuD_diAnM",
        ],
        references: [
          "https://www.guoyi360.com/64gua26/xj/5316.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4159.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-26.html",
        ],
      };
    case "大畜六四":
      return {
        gua: "大畜",
        guaCi: "利贞, 不家食吉, 利涉大川.",
        yao: "六四",
        yaoCi: "六四元吉, 有喜也.",
        origin: "童牛之牿, 元吉.",
        meaning: "在牛的角上拴上一根木头 大吉大利",
        videoUrls: [
          "https://www.youtube.com/embed/Td5fwwQ7120",
          "https://www.youtube.com/embed/3VTXqU49y8U",
          "https://www.youtube.com/embed/l42Zw2OKYVQ",
          "https://www.youtube.com/embed/5heodI7CAcE",
          "https://www.youtube.com/embed/-cT8ijOtWtA",
          "https://www.youtube.com/embed/vKgo1xDePQo",
          "https://www.youtube.com/embed/BBmuD_diAnM",
        ],
        references: [
          "https://www.guoyi360.com/64gua26/xj/5317.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4159.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-26.html",
        ],
      };
    case "大畜六五":
      return {
        gua: "大畜",
        guaCi: "利贞, 不家食吉, 利涉大川.",
        yao: "六五",
        yaoCi: "六五之吉, 有庆也.",
        origin: "豮豕之牙, 吉.",
        meaning: "是烈性的猪长出牙齿 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/Td5fwwQ7120",
          "https://www.youtube.com/embed/3VTXqU49y8U",
          "https://www.youtube.com/embed/l42Zw2OKYVQ",
          "https://www.youtube.com/embed/5heodI7CAcE",
          "https://www.youtube.com/embed/-cT8ijOtWtA",
          "https://www.youtube.com/embed/vKgo1xDePQo",
          "https://www.youtube.com/embed/BBmuD_diAnM",
        ],
        references: [
          "https://www.guoyi360.com/64gua26/xj/5319.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4159.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-26.html",
        ],
      };
    case "大畜上九":
      return {
        gua: "大畜",
        guaCi: "利贞, 不家食吉, 利涉大川.",
        yao: "上九",
        yaoCi: "何天之衢, 道大行也.",
        origin: "何天之衢, 亨.",
        meaning: "四通八达的道路 亨通顺畅",
        videoUrls: [
          "https://www.youtube.com/embed/Td5fwwQ7120",
          "https://www.youtube.com/embed/3VTXqU49y8U",
          "https://www.youtube.com/embed/l42Zw2OKYVQ",
          "https://www.youtube.com/embed/5heodI7CAcE",
          "https://www.youtube.com/embed/-cT8ijOtWtA",
          "https://www.youtube.com/embed/vKgo1xDePQo",
          "https://www.youtube.com/embed/BBmuD_diAnM",
        ],
        references: [
          "https://www.guoyi360.com/64gua26/xj/5320.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4159.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-26.html",
        ],
      };
    case "颐初九":
      return {
        gua: "颐",
        guaCi: "贞吉. 观颐, 自求口实.",
        yao: "初九",
        yaoCi: "观我朵颐, 亦不足贵也.",
        origin: "舍尔灵龟, 观我朵颐, 凶.",
        meaning: "自己储藏着大量的财宝 还要羡嫉人家的财物 必遭凶险之事",
        videoUrls: [
          "https://www.youtube.com/embed/ETMTxDJiFR4",
          "https://www.youtube.com/embed/lqfaYUtpPMg",
          "https://www.youtube.com/embed/kXY8duigZrs",
          "https://www.youtube.com/embed/jltUAHydfg4",
          "https://www.youtube.com/embed/X_jxEhKd3XM",
          "https://www.youtube.com/embed/b9AClcDL4dM",
          "https://www.youtube.com/embed/Nzz9gUk1jeU",
        ],
        references: [
          "http://ly.yishihui.net/13849.htm",
          "https://www.guoyi360.com/64gua27/xj/5323.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4164.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-27.html",
        ],
      };
    case "颐六二":
      return {
        gua: "颐",
        guaCi: "贞吉. 观颐, 自求口实.",
        yao: "六二",
        yaoCi: "六二征凶, 行失类也.",
        origin: "颠颐, 拂经; 于丘颐, 征凶.",
        meaning:
          "为了糊口 就得在山坡上开荒种地 为了生计而去抢劫别人 这是凶险之事",
        videoUrls: [
          "https://www.youtube.com/embed/ETMTxDJiFR4",
          "https://www.youtube.com/embed/lqfaYUtpPMg",
          "https://www.youtube.com/embed/kXY8duigZrs",
          "https://www.youtube.com/embed/jltUAHydfg4",
          "https://www.youtube.com/embed/X_jxEhKd3XM",
          "https://www.youtube.com/embed/b9AClcDL4dM",
          "https://www.youtube.com/embed/Nzz9gUk1jeU",
        ],
        references: [
          "http://ly.yishihui.net/13851.htm",
          "https://www.guoyi360.com/64gua27/xj/5324.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4164.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-27.html",
        ],
      };
    case "颐六三":
      return {
        gua: "颐",
        guaCi: "贞吉. 观颐, 自求口实.",
        yao: "六三",
        yaoCi: "十年勿用, 道大悖也.",
        origin: "拂颐, 贞凶. 十年勿用, 无攸利.",
        meaning: "违反颐精养气之道 即使正固也有凶险 十年内不能施展才能 无益处",
        videoUrls: [
          "https://www.youtube.com/embed/ETMTxDJiFR4",
          "https://www.youtube.com/embed/lqfaYUtpPMg",
          "https://www.youtube.com/embed/kXY8duigZrs",
          "https://www.youtube.com/embed/jltUAHydfg4",
          "https://www.youtube.com/embed/X_jxEhKd3XM",
          "https://www.youtube.com/embed/b9AClcDL4dM",
          "https://www.youtube.com/embed/Nzz9gUk1jeU",
        ],
        references: [
          "http://ly.yishihui.net/13854.htm",
          "https://www.guoyi360.com/64gua27/xj/5325.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4164.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-27.html",
        ],
      };
    case "颐六四":
      return {
        gua: "颐",
        guaCi: "贞吉. 观颐, 自求口实.",
        yao: "六四",
        yaoCi: "颠颐之吉, 上施光也.",
        origin: "颠颐, 吉. 虎视眈眈, 其欲逐逐, 无咎.",
        meaning:
          "所求不过糊口 害人之心不可存 吉利 虎视眈眈 防人之心不可无 这样就可以安享天年 悠然自得 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/ETMTxDJiFR4",
          "https://www.youtube.com/embed/lqfaYUtpPMg",
          "https://www.youtube.com/embed/kXY8duigZrs",
          "https://www.youtube.com/embed/jltUAHydfg4",
          "https://www.youtube.com/embed/X_jxEhKd3XM",
          "https://www.youtube.com/embed/b9AClcDL4dM",
          "https://www.youtube.com/embed/Nzz9gUk1jeU",
        ],
        references: [
          "http://ly.yishihui.net/13856.htm",
          "https://www.guoyi360.com/64gua27/xj/5326.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4164.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-27.html",
        ],
      };
    case "颐六五":
      return {
        gua: "颐",
        guaCi: "贞吉. 观颐, 自求口实.",
        yao: "六五",
        yaoCi: "居贞之吉, 顺以从上也.",
        origin: "拂经, 居贞吉. 不可涉大川.",
        meaning: "违反规律 在家正固 可获吉祥 不可以跨越大江大河",
        videoUrls: [
          "https://www.youtube.com/embed/ETMTxDJiFR4",
          "https://www.youtube.com/embed/lqfaYUtpPMg",
          "https://www.youtube.com/embed/kXY8duigZrs",
          "https://www.youtube.com/embed/jltUAHydfg4",
          "https://www.youtube.com/embed/X_jxEhKd3XM",
          "https://www.youtube.com/embed/b9AClcDL4dM",
          "https://www.youtube.com/embed/Nzz9gUk1jeU",
        ],
        references: [
          "http://ly.yishihui.net/13858.htm",
          "https://www.guoyi360.com/64gua27/xj/5327.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4164.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-27.html",
        ],
      };
    case "颐上九":
      return {
        gua: "颐",
        guaCi: "贞吉. 观颐, 自求口实.",
        yao: "上九",
        yaoCi: "由颐厉吉, 大有庆也.",
        origin: "由颐, 厉吉. 利涉大川.",
        meaning: "遵循生活正道 先艰难而终吉利 筮遇此爻 有利于涉水渡河",
        videoUrls: [
          "https://www.youtube.com/embed/ETMTxDJiFR4",
          "https://www.youtube.com/embed/lqfaYUtpPMg",
          "https://www.youtube.com/embed/kXY8duigZrs",
          "https://www.youtube.com/embed/jltUAHydfg4",
          "https://www.youtube.com/embed/X_jxEhKd3XM",
          "https://www.youtube.com/embed/b9AClcDL4dM",
          "https://www.youtube.com/embed/Nzz9gUk1jeU",
        ],
        references: [
          "http://ly.yishihui.net/13860.htm",
          "https://www.guoyi360.com/64gua27/xj/5328.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4164.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-27.html",
        ],
      };
    case "大过初六":
      return {
        gua: "大过",
        guaCi: "栋桡, 利有攸往, 亨.",
        yao: "初六",
        yaoCi: "藉用白茅, 柔在下也.",
        origin: "藉用白茅, 无咎.",
        meaning: "用洁净的茅草铺地以陈设祭品 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/ENDIi0PFR90",
          "https://www.youtube.com/embed/vLv7UTd7bDo",
          "https://www.youtube.com/embed/i29vKgrkwuI",
          "https://www.youtube.com/embed/RWNQ_9phUTk",
          "https://www.youtube.com/embed/rxo7GSarTyE",
          "https://www.youtube.com/embed/QU-7BqtYNbM",
          "https://www.youtube.com/embed/7wTNcrtBQeQ",
        ],
        references: [
          "http://ly.yishihui.net/13862.htm",
          "https://www.guoyi360.com/64gua28/xj/5331.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4167.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-28.html",
        ],
      };
    case "大过九二":
      return {
        gua: "大过",
        guaCi: "栋桡, 利有攸往, 亨.",
        yao: "九二",
        yaoCi: "老夫女妻, 过以相与也.",
        origin: "枯杨生稊, 老夫得其女妻, 无不利.",
        meaning: "枯树发芽 老翁娶新妻 无所不利",
        videoUrls: [
          "https://www.youtube.com/embed/ENDIi0PFR90",
          "https://www.youtube.com/embed/vLv7UTd7bDo",
          "https://www.youtube.com/embed/i29vKgrkwuI",
          "https://www.youtube.com/embed/RWNQ_9phUTk",
          "https://www.youtube.com/embed/rxo7GSarTyE",
          "https://www.youtube.com/embed/QU-7BqtYNbM",
          "https://www.youtube.com/embed/7wTNcrtBQeQ",
        ],
        references: [
          "http://ly.yishihui.net/13864.htm",
          "https://www.guoyi360.com/64gua28/xj/5332.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4167.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-28.html",
        ],
      };
    case "大过九三":
      return {
        gua: "大过",
        guaCi: "栋桡, 利有攸往, 亨.",
        yao: "九三",
        yaoCi: "栋桡之凶, 不可以有辅也.",
        origin: "栋桡, 凶.",
        meaning: "房梁弯曲 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/ENDIi0PFR90",
          "https://www.youtube.com/embed/vLv7UTd7bDo",
          "https://www.youtube.com/embed/i29vKgrkwuI",
          "https://www.youtube.com/embed/RWNQ_9phUTk",
          "https://www.youtube.com/embed/rxo7GSarTyE",
          "https://www.youtube.com/embed/QU-7BqtYNbM",
          "https://www.youtube.com/embed/7wTNcrtBQeQ",
        ],
        references: [
          "http://ly.yishihui.net/13866.htm",
          "https://www.guoyi360.com/64gua28/xj/5333.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4167.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-28.html",
        ],
      };
    case "大过九四":
      return {
        gua: "大过",
        guaCi: "栋桡, 利有攸往, 亨.",
        yao: "九四",
        yaoCi: "栋隆之吉, 不桡乎下也.",
        origin: "栋隆, 吉. 有它吝.",
        meaning: "房梁隆起 可获吉祥 如果有意外发生 则行事艰难",
        videoUrls: [
          "https://www.youtube.com/embed/ENDIi0PFR90",
          "https://www.youtube.com/embed/vLv7UTd7bDo",
          "https://www.youtube.com/embed/i29vKgrkwuI",
          "https://www.youtube.com/embed/RWNQ_9phUTk",
          "https://www.youtube.com/embed/rxo7GSarTyE",
          "https://www.youtube.com/embed/QU-7BqtYNbM",
          "https://www.youtube.com/embed/7wTNcrtBQeQ",
        ],
        references: [
          "http://ly.yishihui.net/13868.htm",
          "https://www.guoyi360.com/64gua28/xj/5334.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4167.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-28.html",
        ],
      };
    case "大过九五":
      return {
        gua: "大过",
        guaCi: "栋桡, 利有攸往, 亨.",
        yao: "九五",
        yaoCi: "枯杨生华, 何可久也? 老妇士夫, 亦可丑也.",
        origin: "枯杨生华, 老妇得其士夫, 无咎无誉.",
        meaning: "枯树开花 老妇与少男结合 无灾祸 无赞誉",
        videoUrls: [
          "https://www.youtube.com/embed/ENDIi0PFR90",
          "https://www.youtube.com/embed/vLv7UTd7bDo",
          "https://www.youtube.com/embed/i29vKgrkwuI",
          "https://www.youtube.com/embed/RWNQ_9phUTk",
          "https://www.youtube.com/embed/rxo7GSarTyE",
          "https://www.youtube.com/embed/QU-7BqtYNbM",
          "https://www.youtube.com/embed/7wTNcrtBQeQ",
        ],
        references: [
          "http://ly.yishihui.net/13870.htm",
          "https://www.guoyi360.com/64gua28/xj/5335.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4167.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-28.html",
        ],
      };
    case "大过上六":
      return {
        gua: "大过",
        guaCi: "栋桡, 利有攸往, 亨.",
        yao: "上六",
        yaoCi: "过涉之凶, 不可咎也.",
        origin: "过涉灭顶, 凶, 无咎.",
        meaning: "徒步过河 被水淹灭了 头顶 有凶险 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/ENDIi0PFR90",
          "https://www.youtube.com/embed/vLv7UTd7bDo",
          "https://www.youtube.com/embed/i29vKgrkwuI",
          "https://www.youtube.com/embed/RWNQ_9phUTk",
          "https://www.youtube.com/embed/rxo7GSarTyE",
          "https://www.youtube.com/embed/QU-7BqtYNbM",
          "https://www.youtube.com/embed/7wTNcrtBQeQ",
        ],
        references: [
          "http://ly.yishihui.net/13872.htm",
          "https://www.guoyi360.com/64gua28/xj/5336.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4167.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-28.html",
        ],
      };
    case "坎初六":
      return {
        gua: "坎",
        guaCi: "习坎, 有孚, 维心亨. 行有尚.",
        yao: "初六",
        yaoCi: "习坎入坎, 失道凶也.",
        origin: "习坎, 入于坎窞, 凶.",
        meaning: "在重重险阻之中 掉入陷阱 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/NocLlveOsS0",
          "https://www.youtube.com/embed/KyGffNvo_Gs",
          "https://www.youtube.com/embed/oAVNTsigPAA",
          "https://www.youtube.com/embed/YuZ14XNYwxo",
          "https://www.youtube.com/embed/Zqguy4EZ2go",
          "https://www.youtube.com/embed/HEtuzxuUHFw",
          "https://www.youtube.com/embed/WzJJa0gpxxc",
        ],
        references: [
          "http://ly.yishihui.net/13874.htm",
          "https://www.guoyi360.com/64gua29/xj/5339.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4168.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-29.html",
        ],
      };
    case "坎九二":
      return {
        gua: "坎",
        guaCi: "习坎, 有孚, 维心亨. 行有尚.",
        yao: "九二",
        yaoCi: "求小得, 未出中也.",
        origin: "坎有险, 求小得.",
        meaning: "在陷阱中经历危险 谋求小事 会有获得",
        videoUrls: [
          "https://www.youtube.com/embed/NocLlveOsS0",
          "https://www.youtube.com/embed/KyGffNvo_Gs",
          "https://www.youtube.com/embed/oAVNTsigPAA",
          "https://www.youtube.com/embed/YuZ14XNYwxo",
          "https://www.youtube.com/embed/Zqguy4EZ2go",
          "https://www.youtube.com/embed/HEtuzxuUHFw",
          "https://www.youtube.com/embed/WzJJa0gpxxc",
        ],
        references: [
          "http://ly.yishihui.net/13876.htm",
          "https://www.guoyi360.com/64gua29/xj/5340.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4168.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-29.html",
        ],
      };
    case "坎六三":
      return {
        gua: "坎",
        guaCi: "习坎, 有孚, 维心亨. 行有尚.",
        yao: "六三",
        yaoCi: "来之坎坎, 终无功也.",
        origin: "来之坎坎, 险且枕, 入于坎窞, 勿用.",
        meaning:
          "来来回回都处于险难之中 陷穴既险也深 一旦落入陷阱之中 暂时无法施展才能",
        videoUrls: [
          "https://www.youtube.com/embed/NocLlveOsS0",
          "https://www.youtube.com/embed/KyGffNvo_Gs",
          "https://www.youtube.com/embed/oAVNTsigPAA",
          "https://www.youtube.com/embed/YuZ14XNYwxo",
          "https://www.youtube.com/embed/Zqguy4EZ2go",
          "https://www.youtube.com/embed/HEtuzxuUHFw",
          "https://www.youtube.com/embed/WzJJa0gpxxc",
        ],
        references: [
          "http://ly.yishihui.net/13878.htm",
          "https://www.guoyi360.com/64gua29/xj/5341.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4168.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-29.html",
        ],
      };
    case "坎六四":
      return {
        gua: "坎",
        guaCi: "习坎, 有孚, 维心亨. 行有尚.",
        yao: "六四",
        yaoCi: "樽酒簋贰, 刚柔际也.",
        origin: "樽酒簋贰, 用缶, 纳约自牖, 终无咎.",
        meaning:
          "将一杯薄酒 两盘供品 用瓦罐装起来 从窗户送进简约的祭品 最后无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/NocLlveOsS0",
          "https://www.youtube.com/embed/KyGffNvo_Gs",
          "https://www.youtube.com/embed/oAVNTsigPAA",
          "https://www.youtube.com/embed/YuZ14XNYwxo",
          "https://www.youtube.com/embed/Zqguy4EZ2go",
          "https://www.youtube.com/embed/HEtuzxuUHFw",
          "https://www.youtube.com/embed/WzJJa0gpxxc",
        ],
        references: [
          "http://ly.yishihui.net/13880.htm",
          "https://www.guoyi360.com/64gua29/xj/5342.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4168.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-29.html",
        ],
      };
    case "坎九五":
      return {
        gua: "坎",
        guaCi: "习坎, 有孚, 维心亨. 行有尚.",
        yao: "九五",
        yaoCi: "坎不盈, 中未大也.",
        origin: "坎不盈, 衹既平, 无咎.",
        meaning: "陷穴尚未满溢 到需要稳定时则艰难自平 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/NocLlveOsS0",
          "https://www.youtube.com/embed/KyGffNvo_Gs",
          "https://www.youtube.com/embed/oAVNTsigPAA",
          "https://www.youtube.com/embed/YuZ14XNYwxo",
          "https://www.youtube.com/embed/Zqguy4EZ2go",
          "https://www.youtube.com/embed/HEtuzxuUHFw",
          "https://www.youtube.com/embed/WzJJa0gpxxc",
        ],
        references: [
          "http://ly.yishihui.net/13882.htm",
          "https://www.guoyi360.com/64gua29/xj/5343.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4168.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-29.html",
        ],
      };
    case "坎上六":
      return {
        gua: "坎",
        guaCi: "习坎, 有孚, 维心亨. 行有尚.",
        yao: "上六",
        yaoCi: "上六失道, 凶三岁也.",
        origin: "系用徽纆, 寘于丛棘, 三岁不得, 凶.",
        meaning: "用绳索将犯人捆绑起来放入荆棘草丛之中 三年不让解脱 比有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/NocLlveOsS0",
          "https://www.youtube.com/embed/KyGffNvo_Gs",
          "https://www.youtube.com/embed/oAVNTsigPAA",
          "https://www.youtube.com/embed/YuZ14XNYwxo",
          "https://www.youtube.com/embed/Zqguy4EZ2go",
          "https://www.youtube.com/embed/HEtuzxuUHFw",
          "https://www.youtube.com/embed/WzJJa0gpxxc",
        ],
        references: [
          "http://ly.yishihui.net/13884.htm",
          "https://www.guoyi360.com/64gua29/xj/5344.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4168.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-29.html",
        ],
      };
    case "离初九":
      return {
        gua: "离",
        guaCi: "利贞, 亨. 畜牝牛, 吉.",
        yao: "初九",
        yaoCi: "履错之敬, 以辟咎也.",
        origin: "履错然, 敬之, 无咎.",
        meaning: "步子错乱 但保持谨慎恭敬 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/oKcxqSrz9r8",
          "https://www.youtube.com/embed/_VVCD5OnilU",
          "https://www.youtube.com/embed/vX3lJKM4Utk",
          "https://www.youtube.com/embed/EMNhIrtZRgo",
          "https://www.youtube.com/embed/EQxvtkDYIDg",
          "https://www.youtube.com/embed/SjKIhLjeUX0",
          "https://www.youtube.com/embed/PBPR8JbhpeY",
        ],
        references: [
          "http://ly.yishihui.net/13928.htm",
          "https://www.guoyi360.com/64gua30/xj/6058.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4169.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-30.html",
        ],
      };
    case "离六二":
      return {
        gua: "离",
        guaCi: "利贞, 亨. 畜牝牛, 吉.",
        yao: "六二",
        yaoCi: "黄离元吉, 得中道也.",
        origin: "黄离, 元吉.",
        meaning: "有黄色附于物 大吉大利",
        videoUrls: [
          "https://www.youtube.com/embed/oKcxqSrz9r8",
          "https://www.youtube.com/embed/_VVCD5OnilU",
          "https://www.youtube.com/embed/vX3lJKM4Utk",
          "https://www.youtube.com/embed/EMNhIrtZRgo",
          "https://www.youtube.com/embed/EQxvtkDYIDg",
          "https://www.youtube.com/embed/SjKIhLjeUX0",
          "https://www.youtube.com/embed/PBPR8JbhpeY",
        ],
        references: [
          "http://ly.yishihui.net/13930.htm",
          "https://www.guoyi360.com/64gua30/xj/6059.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4169.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-30.html",
        ],
      };
    case "离九三":
      return {
        gua: "离",
        guaCi: "利贞, 亨. 畜牝牛, 吉.",
        yao: "九三",
        yaoCi: "日昃之离, 何可久也.",
        origin: "日昃之离, 不鼓缶而歌, 则大耋之嗟, 凶.",
        meaning:
          "太阳快要落山 如果不能边打击瓦罐边唱歌 就会发出垂老之人的哀叹 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/oKcxqSrz9r8",
          "https://www.youtube.com/embed/_VVCD5OnilU",
          "https://www.youtube.com/embed/vX3lJKM4Utk",
          "https://www.youtube.com/embed/EMNhIrtZRgo",
          "https://www.youtube.com/embed/EQxvtkDYIDg",
          "https://www.youtube.com/embed/SjKIhLjeUX0",
          "https://www.youtube.com/embed/PBPR8JbhpeY",
        ],
        references: [
          "http://ly.yishihui.net/13932.htm",
          "https://www.guoyi360.com/64gua30/xj/6060.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4169.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-30.html",
        ],
      };
    case "离九四":
      return {
        gua: "离",
        guaCi: "利贞, 亨. 畜牝牛, 吉.",
        yao: "九四",
        yaoCi: "突如其来如, 无所容也.",
        origin: "突如其来如, 焚如, 死如, 弃如.",
        meaning: "突如其来 如同火焰熊熊燃烧 会有生命危险 会被抛弃",
        videoUrls: [
          "https://www.youtube.com/embed/oKcxqSrz9r8",
          "https://www.youtube.com/embed/_VVCD5OnilU",
          "https://www.youtube.com/embed/vX3lJKM4Utk",
          "https://www.youtube.com/embed/EMNhIrtZRgo",
          "https://www.youtube.com/embed/EQxvtkDYIDg",
          "https://www.youtube.com/embed/SjKIhLjeUX0",
          "https://www.youtube.com/embed/PBPR8JbhpeY",
        ],
        references: [
          "http://ly.yishihui.net/13934.htm",
          "https://www.guoyi360.com/64gua30/xj/6061.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4169.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-30.html",
        ],
      };
    case "离六五":
      return {
        gua: "离",
        guaCi: "利贞, 亨. 畜牝牛, 吉.",
        yao: "六五",
        yaoCi: "六五之吉, 离王公也.",
        origin: "出涕沱若, 戚嗟若, 吉.",
        meaning: "眼泪涌出的样子 悲戚哀叹的样子 然后可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/oKcxqSrz9r8",
          "https://www.youtube.com/embed/_VVCD5OnilU",
          "https://www.youtube.com/embed/vX3lJKM4Utk",
          "https://www.youtube.com/embed/EMNhIrtZRgo",
          "https://www.youtube.com/embed/EQxvtkDYIDg",
          "https://www.youtube.com/embed/SjKIhLjeUX0",
          "https://www.youtube.com/embed/PBPR8JbhpeY",
        ],
        references: [
          "http://ly.yishihui.net/13936.htm",
          "https://www.guoyi360.com/64gua30/xj/6062.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4169.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-30.html",
        ],
      };
    case "离上九":
      return {
        gua: "离",
        guaCi: "利贞, 亨. 畜牝牛, 吉.",
        yao: "上九",
        yaoCi: "王用出征, 以正邦也.",
        origin: "王用出征, 有嘉. 折首, 获匪其丑, 无咎.",
        meaning:
          "君王用贤人出门远行 对能够斩杀敌方首领的人给予嘉奖 不俘获一般的随从 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/oKcxqSrz9r8",
          "https://www.youtube.com/embed/_VVCD5OnilU",
          "https://www.youtube.com/embed/vX3lJKM4Utk",
          "https://www.youtube.com/embed/EMNhIrtZRgo",
          "https://www.youtube.com/embed/EQxvtkDYIDg",
          "https://www.youtube.com/embed/SjKIhLjeUX0",
          "https://www.youtube.com/embed/PBPR8JbhpeY",
        ],
        references: [
          "http://ly.yishihui.net/13938.htm",
          "https://www.guoyi360.com/64gua30/xj/6063.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4169.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-30.html",
        ],
      };
    case "咸初六":
      return {
        gua: "咸",
        guaCi: "亨, 利贞. 取女吉.",
        yao: "初六",
        yaoCi: "咸其拇, 志在外也.",
        origin: "咸其拇.",
        meaning: "感应发生在脚上的大拇指 因势而动",
        videoUrls: [
          "https://www.youtube.com/embed/EHvKYtz_2UI",
          "https://www.youtube.com/embed/b2VlmAoDgg4",
          "https://www.youtube.com/embed/9asiKewKcqc",
          "https://www.youtube.com/embed/RflhrnwdXYs",
          "https://www.youtube.com/embed/BByGRI_Cggs",
          "https://www.youtube.com/embed/qwZPXP04inI",
          "https://www.youtube.com/embed/YrLtqncDi3o",
        ],
        references: [
          "http://ly.yishihui.net/13940.htm",
          "https://www.guoyi360.com/64gua31/xj/5347.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4170.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-31.html",
        ],
      };
    case "咸六二":
      return {
        gua: "咸",
        guaCi: "亨, 利贞. 取女吉.",
        yao: "六二",
        yaoCi: "虽凶居吉, 顺不害也.",
        origin: "咸其腓, 凶, 居吉.",
        meaning: "感应发生在小腿肚 有凶险 在家里不出来 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/EHvKYtz_2UI",
          "https://www.youtube.com/embed/b2VlmAoDgg4",
          "https://www.youtube.com/embed/9asiKewKcqc",
          "https://www.youtube.com/embed/RflhrnwdXYs",
          "https://www.youtube.com/embed/BByGRI_Cggs",
          "https://www.youtube.com/embed/qwZPXP04inI",
          "https://www.youtube.com/embed/YrLtqncDi3o",
        ],
        references: [
          "http://ly.yishihui.net/13942.htm",
          "https://www.guoyi360.com/64gua31/xj/5348.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4170.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-31.html",
        ],
      };
    case "咸九三":
      return {
        gua: "咸",
        guaCi: "亨, 利贞. 取女吉.",
        yao: "九三",
        yaoCi: "咸其股, 亦不处也. 志在随人, 所执下也.",
        origin: "咸其股, 执其随, 往吝.",
        meaning: "感应发生在大腿 执迷于盲目追随别人 步履维艰",
        videoUrls: [
          "https://www.youtube.com/embed/EHvKYtz_2UI",
          "https://www.youtube.com/embed/b2VlmAoDgg4",
          "https://www.youtube.com/embed/9asiKewKcqc",
          "https://www.youtube.com/embed/RflhrnwdXYs",
          "https://www.youtube.com/embed/BByGRI_Cggs",
          "https://www.youtube.com/embed/qwZPXP04inI",
          "https://www.youtube.com/embed/YrLtqncDi3o",
        ],
        references: [
          "http://ly.yishihui.net/13944.htm",
          "https://www.guoyi360.com/64gua31/xj/5349.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4170.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-31.html",
        ],
      };
    case "咸九四":
      return {
        gua: "咸",
        guaCi: "亨, 利贞. 取女吉.",
        yao: "九四",
        yaoCi: "贞吉悔亡, 未感害也. 憧憧往来, 未光大也.",
        origin: "贞吉悔亡, 憧憧往来, 朋从尔思.",
        meaning:
          "可获吉祥 危难窘境会消失 即使心意不安 思绪不绝 朋友最后会顺从你的意愿",
        videoUrls: [
          "https://www.youtube.com/embed/EHvKYtz_2UI",
          "https://www.youtube.com/embed/b2VlmAoDgg4",
          "https://www.youtube.com/embed/9asiKewKcqc",
          "https://www.youtube.com/embed/RflhrnwdXYs",
          "https://www.youtube.com/embed/BByGRI_Cggs",
          "https://www.youtube.com/embed/qwZPXP04inI",
          "https://www.youtube.com/embed/YrLtqncDi3o",
        ],
        references: [
          "http://ly.yishihui.net/13946.htm",
          "https://www.guoyi360.com/64gua31/xj/5350.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4170.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-31.html",
        ],
      };
    case "咸九五":
      return {
        gua: "咸",
        guaCi: "亨, 利贞. 取女吉.",
        yao: "九五",
        yaoCi: "咸其脢, 志末也.",
        origin: "咸其脢，无悔.",
        meaning: "感应发生在脊背上 不会有后悔",
        videoUrls: [
          "https://www.youtube.com/embed/EHvKYtz_2UI",
          "https://www.youtube.com/embed/b2VlmAoDgg4",
          "https://www.youtube.com/embed/9asiKewKcqc",
          "https://www.youtube.com/embed/RflhrnwdXYs",
          "https://www.youtube.com/embed/BByGRI_Cggs",
          "https://www.youtube.com/embed/qwZPXP04inI",
          "https://www.youtube.com/embed/YrLtqncDi3o",
        ],
        references: [
          "http://ly.yishihui.net/13948.htm",
          "https://www.guoyi360.com/64gua31/xj/5351.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4170.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-31.html",
        ],
      };
    case "咸上六":
      return {
        gua: "咸",
        guaCi: "亨, 利贞. 取女吉.",
        yao: "上六",
        yaoCi: "咸其辅, 颊, 舌, 滕口说也.",
        origin: "咸其辅, 颊, 舌.",
        meaning: "感应发生在 口舌 牙床 面颊 都会因势而动",
        videoUrls: [
          "https://www.youtube.com/embed/EHvKYtz_2UI",
          "https://www.youtube.com/embed/b2VlmAoDgg4",
          "https://www.youtube.com/embed/9asiKewKcqc",
          "https://www.youtube.com/embed/RflhrnwdXYs",
          "https://www.youtube.com/embed/BByGRI_Cggs",
          "https://www.youtube.com/embed/qwZPXP04inI",
          "https://www.youtube.com/embed/YrLtqncDi3o",
        ],
        references: [
          "http://ly.yishihui.net/13950.htm",
          "https://www.guoyi360.com/64gua31/xj/5352.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4170.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-31.html",
        ],
      };
    case "恒初六":
      return {
        gua: "恒",
        guaCi: "亨, 无咎, 利贞. 利有攸往.",
        yao: "初六",
        yaoCi: "浚恒之凶, 始求深也.",
        origin: "浚恒, 贞凶, 无攸利.",
        meaning: "有所追求 持续追求过于长 即使正固也有凶险 无益处",
        videoUrls: [
          "https://www.youtube.com/embed/bxbSfyoW9Hg",
          "https://www.youtube.com/embed/ClPSxK4zeMo",
          "https://www.youtube.com/embed/gGZxv7cKbKM",
          "https://www.youtube.com/embed/tYAn-Q0_vWc",
          "https://www.youtube.com/embed/TIszoKASlGQ",
          "https://www.youtube.com/embed/ZVrUPmoiCqM",
          "https://www.youtube.com/embed/M-YcfvD6r14",
        ],
        references: [
          "http://ly.yishihui.net/13952.htm",
          "https://www.guoyi360.com/64gua32/xj/5367.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4171.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-32.html",
        ],
      };
    case "恒九二":
      return {
        gua: "恒",
        guaCi: "亨, 无咎, 利贞. 利有攸往.",
        yao: "九二",
        yaoCi: "九二悔亡, 能久中也.",
        origin: "悔亡.",
        meaning: "窘境会消失",
        videoUrls: [
          "https://www.youtube.com/embed/bxbSfyoW9Hg",
          "https://www.youtube.com/embed/ClPSxK4zeMo",
          "https://www.youtube.com/embed/gGZxv7cKbKM",
          "https://www.youtube.com/embed/tYAn-Q0_vWc",
          "https://www.youtube.com/embed/TIszoKASlGQ",
          "https://www.youtube.com/embed/ZVrUPmoiCqM",
          "https://www.youtube.com/embed/M-YcfvD6r14",
        ],
        references: [
          "http://ly.yishihui.net/13954.htm",
          "https://www.guoyi360.com/64gua32/xj/5368.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4171.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-32.html",
        ],
      };
    case "恒九三":
      return {
        gua: "恒",
        guaCi: "亨, 无咎, 利贞. 利有攸往.",
        yao: "九三",
        yaoCi: "不恒其德, 无所容也.",
        origin: "不恒其德, 或承之羞, 贞吝.",
        meaning: "不能长期保持美德 有时会蒙受羞辱 行事艰难",
        videoUrls: [
          "https://www.youtube.com/embed/bxbSfyoW9Hg",
          "https://www.youtube.com/embed/ClPSxK4zeMo",
          "https://www.youtube.com/embed/gGZxv7cKbKM",
          "https://www.youtube.com/embed/tYAn-Q0_vWc",
          "https://www.youtube.com/embed/TIszoKASlGQ",
          "https://www.youtube.com/embed/ZVrUPmoiCqM",
          "https://www.youtube.com/embed/M-YcfvD6r14",
        ],
        references: [
          "http://ly.yishihui.net/13956.htm",
          "https://www.guoyi360.com/64gua32/xj/5369.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4171.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-32.html",
        ],
      };
    case "恒九四":
      return {
        gua: "恒",
        guaCi: "亨, 无咎, 利贞. 利有攸往.",
        yao: "九四",
        yaoCi: "久非其位, 安得禽也?",
        origin: "田无禽.",
        meaning: "田间没有禽兽",
        videoUrls: [
          "https://www.youtube.com/embed/bxbSfyoW9Hg",
          "https://www.youtube.com/embed/ClPSxK4zeMo",
          "https://www.youtube.com/embed/gGZxv7cKbKM",
          "https://www.youtube.com/embed/tYAn-Q0_vWc",
          "https://www.youtube.com/embed/TIszoKASlGQ",
          "https://www.youtube.com/embed/ZVrUPmoiCqM",
          "https://www.youtube.com/embed/M-YcfvD6r14",
        ],
        references: [
          "http://ly.yishihui.net/13958.htm",
          "https://www.guoyi360.com/64gua32/xj/5370.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4171.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-32.html",
        ],
      };
    case "恒六五":
      return {
        gua: "恒",
        guaCi: "亨, 无咎, 利贞. 利有攸往.",
        yao: "六五",
        yaoCi: "妇人贞吉, 从一而终也. 夫子制义, 从妇凶也",
        origin: "恒其德, 贞. 妇人吉, 夫子凶.",
        meaning: "长久的保持美德正固 女人可获得吉祥 男人会处境凶险",
        videoUrls: [
          "https://www.youtube.com/embed/bxbSfyoW9Hg",
          "https://www.youtube.com/embed/ClPSxK4zeMo",
          "https://www.youtube.com/embed/gGZxv7cKbKM",
          "https://www.youtube.com/embed/tYAn-Q0_vWc",
          "https://www.youtube.com/embed/TIszoKASlGQ",
          "https://www.youtube.com/embed/ZVrUPmoiCqM",
          "https://www.youtube.com/embed/M-YcfvD6r14",
        ],
        references: [
          "http://ly.yishihui.net/13960.htm",
          "https://www.guoyi360.com/64gua32/xj/5371.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4171.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-32.html",
        ],
      };
    case "恒上六":
      return {
        gua: "恒",
        guaCi: "亨, 无咎, 利贞. 利有攸往.",
        yao: "上六",
        yaoCi: "振恒在上, 大无功也.",
        origin: "振恒, 凶.",
        meaning: "震动不安 不能持之以恒 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/bxbSfyoW9Hg",
          "https://www.youtube.com/embed/ClPSxK4zeMo",
          "https://www.youtube.com/embed/gGZxv7cKbKM",
          "https://www.youtube.com/embed/tYAn-Q0_vWc",
          "https://www.youtube.com/embed/TIszoKASlGQ",
          "https://www.youtube.com/embed/ZVrUPmoiCqM",
          "https://www.youtube.com/embed/M-YcfvD6r14",
        ],
        references: [
          "http://ly.yishihui.net/13962.htm",
          "https://www.guoyi360.com/64gua32/xj/5372.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4171.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-32.html",
        ],
      };
    case "遁初六":
      return {
        gua: "遁",
        guaCi: "亨. 小利贞.",
        yao: "初六",
        yaoCi: "遁尾之厉, 不往何灾也.",
        origin: "遁尾, 厉. 勿用有攸往.",
        meaning: "退避不及 落在后面 有凶险 暂时不宜作为 施展才能",
        videoUrls: [
          "https://www.youtube.com/embed/C6_vDUGYBkI",
          "https://www.youtube.com/embed/y8fFRrl-Wps",
          "https://www.youtube.com/embed/6FwY2kXm0t4",
          "https://www.youtube.com/embed/uH1kAakYzmU",
          "https://www.youtube.com/embed/OQtFBXyzu48",
          "https://www.youtube.com/embed/DhshUA8YKr0",
          "https://www.youtube.com/embed/RXylMJfPMc8",
        ],
        references: [
          "http://ly.yishihui.net/14003.htm",
          "https://www.guoyi360.com/64gua33/xj/5412.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4172.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-33.html",
        ],
      };
    case "遁六二":
      return {
        gua: "遁",
        guaCi: "亨. 小利贞.",
        yao: "六二",
        yaoCi: "执用黄牛, 固志也.",
        origin: "执之用黄牛之革, 莫之胜说.",
        meaning: "被黄牛皮绳捆绑 没有人能够逃脱",
        videoUrls: [
          "https://www.youtube.com/embed/C6_vDUGYBkI",
          "https://www.youtube.com/embed/y8fFRrl-Wps",
          "https://www.youtube.com/embed/6FwY2kXm0t4",
          "https://www.youtube.com/embed/uH1kAakYzmU",
          "https://www.youtube.com/embed/OQtFBXyzu48",
          "https://www.youtube.com/embed/DhshUA8YKr0",
          "https://www.youtube.com/embed/RXylMJfPMc8",
        ],
        references: [
          "http://ly.yishihui.net/14005.htm",
          "https://www.guoyi360.com/64gua33/xj/5413.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4172.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-33.html",
        ],
      };
    case "遁九三":
      return {
        gua: "遁",
        guaCi: "亨. 小利贞.",
        yao: "九三",
        yaoCi: "系遁之厉, 有疾惫也. 畜臣妾吉, 不可大事也.",
        origin: "系遁, 有疾厉. 畜臣妾, 吉.",
        meaning: "由于被牵累而难以逃脱 会生病 有危险 畜养奴仆和侍妾 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/C6_vDUGYBkI",
          "https://www.youtube.com/embed/y8fFRrl-Wps",
          "https://www.youtube.com/embed/6FwY2kXm0t4",
          "https://www.youtube.com/embed/uH1kAakYzmU",
          "https://www.youtube.com/embed/OQtFBXyzu48",
          "https://www.youtube.com/embed/DhshUA8YKr0",
          "https://www.youtube.com/embed/RXylMJfPMc8",
        ],
        references: [
          "http://ly.yishihui.net/14007.htm",
          "https://www.guoyi360.com/64gua33/xj/5414.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4172.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-33.html",
        ],
      };
    case "遁九四":
      return {
        gua: "遁",
        guaCi: "亨. 小利贞.",
        yao: "九四",
        yaoCi: "君子好遁, 小人否也.",
        origin: "好遁, 君子吉, 小人否.",
        meaning: "行事有利于逃跑时 君子可获吉祥 小人则难以挣脱",
        videoUrls: [
          "https://www.youtube.com/embed/C6_vDUGYBkI",
          "https://www.youtube.com/embed/y8fFRrl-Wps",
          "https://www.youtube.com/embed/6FwY2kXm0t4",
          "https://www.youtube.com/embed/uH1kAakYzmU",
          "https://www.youtube.com/embed/OQtFBXyzu48",
          "https://www.youtube.com/embed/DhshUA8YKr0",
          "https://www.youtube.com/embed/RXylMJfPMc8",
        ],
        references: [
          "http://ly.yishihui.net/14009.htm",
          "https://www.guoyi360.com/64gua33/xj/5415.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4172.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-33.html",
        ],
      };
    case "遁九五":
      return {
        gua: "遁",
        guaCi: "亨. 小利贞.",
        yao: "九五",
        yaoCi: "嘉遁贞吉, 以正志也.",
        origin: "嘉遁, 贞吉.",
        meaning: "选择最佳时机退出 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/C6_vDUGYBkI",
          "https://www.youtube.com/embed/y8fFRrl-Wps",
          "https://www.youtube.com/embed/6FwY2kXm0t4",
          "https://www.youtube.com/embed/uH1kAakYzmU",
          "https://www.youtube.com/embed/OQtFBXyzu48",
          "https://www.youtube.com/embed/DhshUA8YKr0",
          "https://www.youtube.com/embed/RXylMJfPMc8",
        ],
        references: [
          "http://ly.yishihui.net/14011.htm",
          "https://www.guoyi360.com/64gua33/xj/5416.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4172.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-33.html",
        ],
      };
    case "遁上九":
      return {
        gua: "遁",
        guaCi: "亨. 小利贞.",
        yao: "上九",
        yaoCi: "肥遁, 无不利, 无所疑也.",
        origin: "肥遁, 无不利.",
        meaning: "远走高飞 完全退避 无所不利",
        videoUrls: [
          "https://www.youtube.com/embed/C6_vDUGYBkI",
          "https://www.youtube.com/embed/y8fFRrl-Wps",
          "https://www.youtube.com/embed/6FwY2kXm0t4",
          "https://www.youtube.com/embed/uH1kAakYzmU",
          "https://www.youtube.com/embed/OQtFBXyzu48",
          "https://www.youtube.com/embed/DhshUA8YKr0",
          "https://www.youtube.com/embed/RXylMJfPMc8",
        ],
        references: [
          "http://ly.yishihui.net/14013.htm",
          "https://www.guoyi360.com/64gua33/xj/5417.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4172.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-33.html",
        ],
      };
    case "大壮初九":
      return {
        gua: "大壮",
        guaCi: "利贞.",
        yao: "初九",
        yaoCi: "壮于趾, 其孚穷也.",
        origin: "壮于趾, 征凶, 有孚.",
        meaning: "脚趾变粗壮 出门远行 有凶险 需要有诚信",
        videoUrls: [
          "https://www.youtube.com/embed/McNgvOh7zv0",
          "https://www.youtube.com/embed/S7-IkxhgHh4",
          "https://www.youtube.com/embed/obbkqOm5w6E",
          "https://www.youtube.com/embed/gmWhpQZkBV8",
          "https://www.youtube.com/embed/1I98u8wSrMs",
          "https://www.youtube.com/embed/DFvy-0RWo0M",
          "https://www.youtube.com/embed/6dSZU3npo68",
        ],
        references: [
          "http://ly.yishihui.net/14015.htm",
          "https://www.guoyi360.com/64gua34/xj/5420.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4173.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-34.html",
        ],
      };
    case "大壮九二":
      return {
        gua: "大壮",
        guaCi: "利贞.",
        yao: "九二",
        yaoCi: "九二贞吉, 以中也.",
        origin: "贞吉.",
        meaning: "正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/McNgvOh7zv0",
          "https://www.youtube.com/embed/S7-IkxhgHh4",
          "https://www.youtube.com/embed/obbkqOm5w6E",
          "https://www.youtube.com/embed/gmWhpQZkBV8",
          "https://www.youtube.com/embed/1I98u8wSrMs",
          "https://www.youtube.com/embed/DFvy-0RWo0M",
          "https://www.youtube.com/embed/6dSZU3npo68",
        ],
        references: [
          "http://ly.yishihui.net/14017.htm",
          "https://www.guoyi360.com/64gua34/xj/5421.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4173.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-34.html",
        ],
      };
    case "大壮九三":
      return {
        gua: "大壮",
        guaCi: "利贞.",
        yao: "九三",
        yaoCi: "小人用壮, 君子罔也.",
        origin: "小人用壮，君子用罔，贞厉。羝羊触藩，羸其角.",
        meaning: "小人靠力量 君子蔑视蛮力 正固有危险 公山羊用角顶篱笆 角被缠住",
        videoUrls: [
          "https://www.youtube.com/embed/McNgvOh7zv0",
          "https://www.youtube.com/embed/S7-IkxhgHh4",
          "https://www.youtube.com/embed/obbkqOm5w6E",
          "https://www.youtube.com/embed/gmWhpQZkBV8",
          "https://www.youtube.com/embed/1I98u8wSrMs",
          "https://www.youtube.com/embed/DFvy-0RWo0M",
          "https://www.youtube.com/embed/6dSZU3npo68",
        ],
        references: [
          "http://ly.yishihui.net/14019.htm",
          "https://www.guoyi360.com/64gua34/xj/5422.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4173.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-34.html",
        ],
      };
    case "大壮九四":
      return {
        gua: "大壮",
        guaCi: "利贞.",
        yao: "九四",
        yaoCi: "藩决不羸, 尚往也.",
        origin: "贞吉, 悔亡; 藩决不羸, 壮于大舆之輹.",
        meaning:
          "正固吉祥 忧悔消除 因为公羊冲决篱笆 摆脱了拘系 但又被车轮撞伤 不能乱冲乱撞了",
        videoUrls: [
          "https://www.youtube.com/embed/McNgvOh7zv0",
          "https://www.youtube.com/embed/S7-IkxhgHh4",
          "https://www.youtube.com/embed/obbkqOm5w6E",
          "https://www.youtube.com/embed/gmWhpQZkBV8",
          "https://www.youtube.com/embed/1I98u8wSrMs",
          "https://www.youtube.com/embed/DFvy-0RWo0M",
          "https://www.youtube.com/embed/6dSZU3npo68",
        ],
        references: [
          "http://ly.yishihui.net/14021.htm",
          "https://www.guoyi360.com/64gua34/xj/5423.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4173.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-34.html",
        ],
      };
    case "大壮六五":
      return {
        gua: "大壮",
        guaCi: "利贞.",
        yao: "六五",
        yaoCi: "丧羊于易, 位不当也.",
        origin: "丧羊于易, 无悔.",
        meaning: "在田边丢失山羊 不会有忧悔",
        videoUrls: [
          "https://www.youtube.com/embed/McNgvOh7zv0",
          "https://www.youtube.com/embed/S7-IkxhgHh4",
          "https://www.youtube.com/embed/obbkqOm5w6E",
          "https://www.youtube.com/embed/gmWhpQZkBV8",
          "https://www.youtube.com/embed/1I98u8wSrMs",
          "https://www.youtube.com/embed/DFvy-0RWo0M",
          "https://www.youtube.com/embed/6dSZU3npo68",
        ],
        references: [
          "http://ly.yishihui.net/14023.htm",
          "https://www.guoyi360.com/64gua34/xj/5424.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4173.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-34.html",
        ],
      };
    case "大壮上六":
      return {
        gua: "大壮",
        guaCi: "利贞.",
        yao: "上六",
        yaoCi: "不能退, 不能遂, 不祥也. 艰则吉, 咎不长也.",
        origin: "羝羊触藩, 不能退, 不能遂, 无攸利. 艰则吉.",
        meaning: "公山羊用角顶篱笆 不能退后 不能前进 无益处 艰难过后可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/McNgvOh7zv0",
          "https://www.youtube.com/embed/S7-IkxhgHh4",
          "https://www.youtube.com/embed/obbkqOm5w6E",
          "https://www.youtube.com/embed/gmWhpQZkBV8",
          "https://www.youtube.com/embed/1I98u8wSrMs",
          "https://www.youtube.com/embed/DFvy-0RWo0M",
          "https://www.youtube.com/embed/6dSZU3npo68",
        ],
        references: [
          "http://ly.yishihui.net/14025.htm",
          "https://www.guoyi360.com/64gua34/xj/5425.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4173.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-34.html",
        ],
      };
    case "晋初六":
      return {
        gua: "晋",
        guaCi: "康侯用锡马蕃庶, 昼日三接.",
        yao: "初六",
        yaoCi: "晋如摧如, 独行正也. 裕无咎, 未受命也.",
        origin: "晋如, 摧如, 贞吉. 罔孚, 裕, 无咎.",
        meaning: "晋升中遭遇挫折阻碍 正固吉祥 暂时没有收到信任 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/swOm6zw8WeA",
          "https://www.youtube.com/embed/Y2uHLWoiS4w",
          "https://www.youtube.com/embed/LvTrQkAAGB8",
          "https://www.youtube.com/embed/aNifiJ9Vm50",
          "https://www.youtube.com/embed/qa9thR6BtE4",
          "https://www.youtube.com/embed/qOvcHTucJms",
          "https://www.youtube.com/embed/U0Tovnr1KYE",
        ],
        references: [
          "http://ly.yishihui.net/14064.htm",
          "https://www.guoyi360.com/64gua35/xj/5433.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4174.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-35.html",
        ],
      };
    case "晋六二":
      return {
        gua: "晋",
        guaCi: "康侯用锡马蕃庶, 昼日三接.",
        yao: "六二",
        yaoCi: "受兹介福, 以中正也.",
        origin: "晋如, 愁如, 贞吉. 受兹介福, 于其王母.",
        meaning: "晋升中遭遇忧愁 正固吉祥 将会从祖母那里受到宏大的恩泽",
        videoUrls: [
          "https://www.youtube.com/embed/swOm6zw8WeA",
          "https://www.youtube.com/embed/Y2uHLWoiS4w",
          "https://www.youtube.com/embed/LvTrQkAAGB8",
          "https://www.youtube.com/embed/aNifiJ9Vm50",
          "https://www.youtube.com/embed/qa9thR6BtE4",
          "https://www.youtube.com/embed/qOvcHTucJms",
          "https://www.youtube.com/embed/U0Tovnr1KYE",
        ],
        references: [
          "http://ly.yishihui.net/14066.htm",
          "https://www.guoyi360.com/64gua35/xj/5434.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4174.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-35.html",
        ],
      };
    case "晋六三":
      return {
        gua: "晋",
        guaCi: "康侯用锡马蕃庶, 昼日三接.",
        yao: "六三",
        yaoCi: "众允之志, 上行也.",
        origin: "众允, 悔亡.",
        meaning: "获得众人的信任 忧悔消除",
        videoUrls: [
          "https://www.youtube.com/embed/swOm6zw8WeA",
          "https://www.youtube.com/embed/Y2uHLWoiS4w",
          "https://www.youtube.com/embed/LvTrQkAAGB8",
          "https://www.youtube.com/embed/aNifiJ9Vm50",
          "https://www.youtube.com/embed/qa9thR6BtE4",
          "https://www.youtube.com/embed/qOvcHTucJms",
          "https://www.youtube.com/embed/U0Tovnr1KYE",
        ],
        references: [
          "http://ly.yishihui.net/14068.htm",
          "https://www.guoyi360.com/64gua35/xj/5435.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4174.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-35.html",
        ],
      };
    case "晋九四":
      return {
        gua: "晋",
        guaCi: "康侯用锡马蕃庶, 昼日三接.",
        yao: "九四",
        yaoCi: "硕鼠贞厉, 位不当也.",
        origin: "晋如鼫鼠, 贞厉.",
        meaning: "今生如同 老鼠一样 即贪婪有没有一技之长 正固有危险",
        videoUrls: [
          "https://www.youtube.com/embed/swOm6zw8WeA",
          "https://www.youtube.com/embed/Y2uHLWoiS4w",
          "https://www.youtube.com/embed/LvTrQkAAGB8",
          "https://www.youtube.com/embed/aNifiJ9Vm50",
          "https://www.youtube.com/embed/qa9thR6BtE4",
          "https://www.youtube.com/embed/qOvcHTucJms",
          "https://www.youtube.com/embed/U0Tovnr1KYE",
        ],
        references: [
          "http://ly.yishihui.net/14070.htm",
          "https://www.guoyi360.com/64gua35/xj/5436.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4174.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-35.html",
        ],
      };
    case "晋六五":
      return {
        gua: "晋",
        guaCi: "康侯用锡马蕃庶, 昼日三接.",
        yao: "六五",
        yaoCi: "失得勿恤, 往有庆也.",
        origin: "悔亡, 失得勿恤, 往吉, 无不利.",
        meaning: "忧悔消除 无需再为得失而忧虑 有所作为可获吉祥 无所不利",
        videoUrls: [
          "https://www.youtube.com/embed/swOm6zw8WeA",
          "https://www.youtube.com/embed/Y2uHLWoiS4w",
          "https://www.youtube.com/embed/LvTrQkAAGB8",
          "https://www.youtube.com/embed/aNifiJ9Vm50",
          "https://www.youtube.com/embed/qa9thR6BtE4",
          "https://www.youtube.com/embed/qOvcHTucJms",
          "https://www.youtube.com/embed/U0Tovnr1KYE",
        ],
        references: [
          "http://ly.yishihui.net/14072.htm",
          "https://www.guoyi360.com/64gua35/xj/5437.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4174.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-35.html",
        ],
      };
    case "晋上九":
      return {
        gua: "晋",
        guaCi: "康侯用锡马蕃庶, 昼日三接.",
        yao: "上九",
        yaoCi: "维用伐邑, 道未光也.",
        origin: "晋其角, 维用伐邑, 厉吉无咎, 贞吝.",
        meaning: "晋升到了顶点 用征讨小国而建立功勋 危中有吉 无灾祸 正固有难",
        videoUrls: [
          "https://www.youtube.com/embed/swOm6zw8WeA",
          "https://www.youtube.com/embed/Y2uHLWoiS4w",
          "https://www.youtube.com/embed/LvTrQkAAGB8",
          "https://www.youtube.com/embed/aNifiJ9Vm50",
          "https://www.youtube.com/embed/qa9thR6BtE4",
          "https://www.youtube.com/embed/qOvcHTucJms",
          "https://www.youtube.com/embed/U0Tovnr1KYE",
        ],
        references: [
          "http://ly.yishihui.net/14074.htm",
          "https://www.guoyi360.com/64gua35/xj/5438.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4174.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-35.html",
        ],
      };
    case "明夷初九":
      return {
        gua: "明夷",
        guaCi: "利艰贞.",
        yao: "初九",
        yaoCi: "君子于行, 义不食也.",
        origin: "明夷于飞, 垂其翼. 君子于行, 三日不食. 有攸往, 主人有言.",
        meaning:
          "在昏暗中 就像飞鸟低垂着翅膀 惊慌飞行 君子若要退避隐藏 就是丢掉职位 三天没有吃饭 一旦有所作为 会受到主人的责备",
        videoUrls: [
          "https://www.youtube.com/embed/_H3ysGIPp8M",
          "https://www.youtube.com/embed/EpDmOzNFbmE",
          "https://www.youtube.com/embed/WmUOfrER4xc",
          "https://www.youtube.com/embed/XjzuJWqKBjI",
          "https://www.youtube.com/embed/Yz1ssq02LtI",
          "https://www.youtube.com/embed/c3_kk7nhKDU",
          "https://www.youtube.com/embed/fN3XQu8Hzn0",
          "https://www.youtube.com/embed/yR6ypUizs9M",
        ],
        references: [
          "http://ly.yishihui.net/14076.htm",
          "https://www.guoyi360.com/64gua36/xj/5441.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4175.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-36.html",
        ],
      };
    case "明夷六二":
      return {
        gua: "明夷",
        guaCi: "利艰贞.",
        yao: "六二",
        yaoCi: "六二之吉, 顺以则也.",
        origin: "明夷, 夷于左股, 用拯马壮, 吉.",
        meaning: "在昏暗中 伤到左大腿 如果有良马来救 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/_H3ysGIPp8M",
          "https://www.youtube.com/embed/EpDmOzNFbmE",
          "https://www.youtube.com/embed/WmUOfrER4xc",
          "https://www.youtube.com/embed/XjzuJWqKBjI",
          "https://www.youtube.com/embed/Yz1ssq02LtI",
          "https://www.youtube.com/embed/c3_kk7nhKDU",
          "https://www.youtube.com/embed/fN3XQu8Hzn0",
          "https://www.youtube.com/embed/yR6ypUizs9M",
        ],
        references: [
          "http://ly.yishihui.net/14078.htm",
          "https://www.guoyi360.com/64gua36/xj/5442.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4175.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-36.html",
        ],
      };
    case "明夷九三":
      return {
        gua: "明夷",
        guaCi: "利艰贞.",
        yao: "九三",
        yaoCi: "南狩之志, 乃大得也.",
        origin: "明夷于南狩, 得其大首, 不可疾, 贞.",
        meaning: "在昏暗中 去南方狩猎 想获得丰厚 不可操之过急 正固",
        videoUrls: [
          "https://www.youtube.com/embed/_H3ysGIPp8M",
          "https://www.youtube.com/embed/EpDmOzNFbmE",
          "https://www.youtube.com/embed/WmUOfrER4xc",
          "https://www.youtube.com/embed/XjzuJWqKBjI",
          "https://www.youtube.com/embed/Yz1ssq02LtI",
          "https://www.youtube.com/embed/c3_kk7nhKDU",
          "https://www.youtube.com/embed/fN3XQu8Hzn0",
          "https://www.youtube.com/embed/yR6ypUizs9M",
        ],
        references: [
          "http://ly.yishihui.net/14080.htm",
          "https://www.guoyi360.com/64gua36/xj/5443.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4175.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-36.html",
        ],
      };
    case "明夷六四":
      return {
        gua: "明夷",
        guaCi: "利艰贞.",
        yao: "六四",
        yaoCi: "入于左腹, 获心意也.",
        origin: "入于左腹, 获明夷之心, 于出门庭.",
        meaning: "进入王宫内部 洞悉昏暗的内部情况 最后离开王宫庭院", // 薇子 离开 商纣 王
        videoUrls: [
          "https://www.youtube.com/embed/_H3ysGIPp8M",
          "https://www.youtube.com/embed/EpDmOzNFbmE",
          "https://www.youtube.com/embed/WmUOfrER4xc",
          "https://www.youtube.com/embed/XjzuJWqKBjI",
          "https://www.youtube.com/embed/Yz1ssq02LtI",
          "https://www.youtube.com/embed/c3_kk7nhKDU",
          "https://www.youtube.com/embed/fN3XQu8Hzn0",
          "https://www.youtube.com/embed/yR6ypUizs9M",
        ],
        references: [
          "http://ly.yishihui.net/14082.htm",
          "https://www.guoyi360.com/64gua36/xj/5444.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4175.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-36.html",
        ],
      };
    case "明夷六五":
      return {
        gua: "明夷",
        guaCi: "利艰贞.",
        yao: "六五",
        yaoCi: "箕子之贞, 明不可息也.",
        origin: "箕子之明夷, 利贞.",
        meaning: "像箕子受难时一样 保持正固",
        videoUrls: [
          "https://www.youtube.com/embed/_H3ysGIPp8M",
          "https://www.youtube.com/embed/EpDmOzNFbmE",
          "https://www.youtube.com/embed/WmUOfrER4xc",
          "https://www.youtube.com/embed/XjzuJWqKBjI",
          "https://www.youtube.com/embed/Yz1ssq02LtI",
          "https://www.youtube.com/embed/c3_kk7nhKDU",
          "https://www.youtube.com/embed/fN3XQu8Hzn0",
          "https://www.youtube.com/embed/yR6ypUizs9M",
        ],
        references: [
          "http://ly.yishihui.net/14084.htm",
          "https://www.guoyi360.com/64gua36/xj/5445.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4175.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-36.html",
        ],
      };
    case "明夷上六":
      return {
        gua: "明夷",
        guaCi: "利艰贞.",
        yao: "上六",
        yaoCi: "初登于天, 照四国也. 后入于地, 失则也.",
        origin: "不明, 晦; 初登于天, 后入于地.",
        meaning: "不光明 晦暗 起初像天空中升起 最后又落到地上",
        videoUrls: [
          "https://www.youtube.com/embed/_H3ysGIPp8M",
          "https://www.youtube.com/embed/EpDmOzNFbmE",
          "https://www.youtube.com/embed/WmUOfrER4xc",
          "https://www.youtube.com/embed/XjzuJWqKBjI",
          "https://www.youtube.com/embed/Yz1ssq02LtI",
          "https://www.youtube.com/embed/c3_kk7nhKDU",
          "https://www.youtube.com/embed/fN3XQu8Hzn0",
          "https://www.youtube.com/embed/yR6ypUizs9M",
        ],
        references: [
          "http://ly.yishihui.net/14086.htm",
          "https://www.guoyi360.com/64gua36/xj/5446.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4175.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-36.html",
        ],
      };
    case "家人初九":
      return {
        gua: "家人",
        guaCi: "利女贞.",
        yao: "初九",
        yaoCi: "闲有家，志未变也.",
        origin: "闲有家, 悔亡.",
        meaning: "持家能够预防不测之灾 忧悔消亡",
        videoUrls: [
          "https://www.youtube.com/embed/2LgzgOmMKvE",
          "https://www.youtube.com/embed/W0MJ-MrF9Hk",
          "https://www.youtube.com/embed/xwyzVGtutLI",
          "https://www.youtube.com/embed/9KalzuOBJqQ",
          "https://www.youtube.com/embed/ReF6oFJ2E58",
          "https://www.youtube.com/embed/e6CjghGsE80",
          "https://www.youtube.com/embed/s86C8B170qQ",
        ],
        references: [
          "http://ly.yishihui.net/14088.htm",
          "https://www.guoyi360.com/64gua37/xj/5510.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4176.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-37.html",
        ],
      };
    case "家人六二":
      return {
        gua: "家人",
        guaCi: "利女贞.",
        yao: "六二",
        yaoCi: "六二之吉, 顺以巽也.",
        origin: "无攸遂, 在中馈, 贞吉.",
        meaning:
          "不可随心所欲地追求外部事业与功名 而是尽心竭力的料理家中的饮食起居 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/2LgzgOmMKvE",
          "https://www.youtube.com/embed/W0MJ-MrF9Hk",
          "https://www.youtube.com/embed/xwyzVGtutLI",
          "https://www.youtube.com/embed/9KalzuOBJqQ",
          "https://www.youtube.com/embed/ReF6oFJ2E58",
          "https://www.youtube.com/embed/e6CjghGsE80",
          "https://www.youtube.com/embed/s86C8B170qQ",
        ],
        references: [
          "http://ly.yishihui.net/14090.htm",
          "https://www.guoyi360.com/64gua37/xj/5511.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4176.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-37.html",
        ],
      };
    case "家人九三":
      return {
        gua: "家人",
        guaCi: "利女贞.",
        yao: "九三",
        yaoCi: "家人嗃嗃, 未失也. 妇子嘻嘻, 失家节也.",
        origin: "家人嗃嗃, 悔厉, 吉; 妇子嘻嘻, 终吝.",
        meaning:
          "治家过于严厉常常因为过分训斥家人而感到后悔 先凶后吉 夫人孩子嬉笑 不加约束 最后会有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/2LgzgOmMKvE",
          "https://www.youtube.com/embed/W0MJ-MrF9Hk",
          "https://www.youtube.com/embed/xwyzVGtutLI",
          "https://www.youtube.com/embed/9KalzuOBJqQ",
          "https://www.youtube.com/embed/ReF6oFJ2E58",
          "https://www.youtube.com/embed/e6CjghGsE80",
          "https://www.youtube.com/embed/s86C8B170qQ",
        ],
        references: [
          "http://ly.yishihui.net/14092.htm",
          "https://www.guoyi360.com/64gua37/xj/5512.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4176.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-37.html",
        ],
      };
    case "家人六四":
      return {
        gua: "家人",
        guaCi: "利女贞.",
        yao: "六四",
        yaoCi: "富家大吉, 顺在位也.",
        origin: "富家, 大吉.",
        meaning: "家庭富裕 大吉大利",
        videoUrls: [
          "https://www.youtube.com/embed/2LgzgOmMKvE",
          "https://www.youtube.com/embed/W0MJ-MrF9Hk",
          "https://www.youtube.com/embed/xwyzVGtutLI",
          "https://www.youtube.com/embed/9KalzuOBJqQ",
          "https://www.youtube.com/embed/ReF6oFJ2E58",
          "https://www.youtube.com/embed/e6CjghGsE80",
          "https://www.youtube.com/embed/s86C8B170qQ",
        ],
        references: [
          "http://ly.yishihui.net/14094.htm",
          "https://www.guoyi360.com/64gua37/xj/5513.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4176.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-37.html",
        ],
      };
    case "家人九五":
      return {
        gua: "家人",
        guaCi: "利女贞.",
        yao: "九五",
        yaoCi: "王假有家, 交相爱也.",
        origin: "王假有家, 勿恤, 吉.",
        meaning: "君王治国如治家一样 不必忧虑 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/2LgzgOmMKvE",
          "https://www.youtube.com/embed/W0MJ-MrF9Hk",
          "https://www.youtube.com/embed/xwyzVGtutLI",
          "https://www.youtube.com/embed/9KalzuOBJqQ",
          "https://www.youtube.com/embed/ReF6oFJ2E58",
          "https://www.youtube.com/embed/e6CjghGsE80",
          "https://www.youtube.com/embed/s86C8B170qQ",
        ],
        references: [
          "http://ly.yishihui.net/14096.htm",
          "https://www.guoyi360.com/64gua37/xj/5514.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4176.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-37.html",
        ],
      };
    case "家人上九":
      return {
        gua: "家人",
        guaCi: "利女贞.",
        yao: "上九",
        yaoCi: "威如之吉, 反身之谓也.",
        origin: "有孚威如, 终吉.",
        meaning: "心存诚信 严于持家 最后可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/2LgzgOmMKvE",
          "https://www.youtube.com/embed/W0MJ-MrF9Hk",
          "https://www.youtube.com/embed/xwyzVGtutLI",
          "https://www.youtube.com/embed/9KalzuOBJqQ",
          "https://www.youtube.com/embed/ReF6oFJ2E58",
          "https://www.youtube.com/embed/e6CjghGsE80",
          "https://www.youtube.com/embed/s86C8B170qQ",
        ],
        references: [
          "http://ly.yishihui.net/14098.htm",
          "https://www.guoyi360.com/64gua37/xj/5515.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4176.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-37.html",
        ],
      };
    case "睽初九":
      return {
        gua: "睽",
        guaCi: "小事吉.",
        yao: "初九",
        yaoCi: "见恶人, 以辟咎也.",
        origin: "悔亡, 丧马勿逐, 自复. 见恶人, 无咎.",
        meaning:
          "忧悔消除 丢失了的马 不必去追逐 马自会返回 谨慎谦虚地对待与自己对立的人 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/jPpKi62dG3A",
          "https://www.youtube.com/embed/y9hOckRkWns",
          "https://www.youtube.com/embed/9z1Ux4qITgY",
          "https://www.youtube.com/embed/QOf0Y7Oy-78",
          "https://www.youtube.com/embed/Einj0vjGiwY",
          "https://www.youtube.com/embed/iMZ7x8exCK4",
          "https://www.youtube.com/embed/KQN0qNow3oo",
        ],
        references: [
          "http://ly.yishihui.net/14100.htm",
          "https://www.guoyi360.com/64gua38/xj/5518.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4177.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-38.html",
        ],
      };
    case "睽九二":
      return {
        gua: "睽",
        guaCi: "小事吉.",
        yao: "九二",
        yaoCi: "遇主于巷, 未失道也.",
        origin: "遇主于巷, 无咎.",
        meaning: "在小巷中遇到主人 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/jPpKi62dG3A",
          "https://www.youtube.com/embed/y9hOckRkWns",
          "https://www.youtube.com/embed/9z1Ux4qITgY",
          "https://www.youtube.com/embed/QOf0Y7Oy-78",
          "https://www.youtube.com/embed/Einj0vjGiwY",
          "https://www.youtube.com/embed/iMZ7x8exCK4",
          "https://www.youtube.com/embed/KQN0qNow3oo",
        ],
        references: [
          "http://ly.yishihui.net/14102.htm",
          "https://www.guoyi360.com/64gua38/xj/5519.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4177.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-38.html",
        ],
      };
    case "睽六三":
      return {
        gua: "睽",
        guaCi: "小事吉.",
        yao: "六三",
        yaoCi: "见舆曳, 位不当也. 无初有终, 遇刚也.",
        origin: "见舆曳, 其牛掣. 其人天且劓, 无初有终.",
        meaning:
          "看见大车艰难前行 驾车的牛受到牵制无法前行 驾车的人受到了 墨刑和劓刑 虽然历经磨难 但最终会有美好结局",
        videoUrls: [
          "https://www.youtube.com/embed/jPpKi62dG3A",
          "https://www.youtube.com/embed/y9hOckRkWns",
          "https://www.youtube.com/embed/9z1Ux4qITgY",
          "https://www.youtube.com/embed/QOf0Y7Oy-78",
          "https://www.youtube.com/embed/Einj0vjGiwY",
          "https://www.youtube.com/embed/iMZ7x8exCK4",
          "https://www.youtube.com/embed/KQN0qNow3oo",
        ],
        references: [
          "http://ly.yishihui.net/14104.htm",
          "https://www.guoyi360.com/64gua38/xj/5520.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4177.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-38.html",
        ],
      };
    case "睽九四":
      return {
        gua: "睽",
        guaCi: "小事吉.",
        yao: "九四",
        yaoCi: "交孚无咎, 志行也.",
        origin: "睽孤, 遇元夫. 交孚, 厉无咎.",
        meaning: "乖离而孤独 但刚好遇到一位贵人 交往中以诚相待 有危险 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/jPpKi62dG3A",
          "https://www.youtube.com/embed/y9hOckRkWns",
          "https://www.youtube.com/embed/9z1Ux4qITgY",
          "https://www.youtube.com/embed/QOf0Y7Oy-78",
          "https://www.youtube.com/embed/Einj0vjGiwY",
          "https://www.youtube.com/embed/iMZ7x8exCK4",
          "https://www.youtube.com/embed/KQN0qNow3oo",
        ],
        references: [
          "http://ly.yishihui.net/14112.htm",
          "https://www.guoyi360.com/64gua38/xj/5521.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4177.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-38.html",
        ],
      };
    case "睽六五":
      return {
        gua: "睽",
        guaCi: "小事吉.",
        yao: "六五",
        yaoCi: "厥宗噬肤, 往有庆也.",
        origin: "悔亡, 厥宗噬肤, 往何咎.",
        meaning: "忧悔消除 与族人一起吃肉 前进的路上还会有什么灾祸呢",
        videoUrls: [
          "https://www.youtube.com/embed/jPpKi62dG3A",
          "https://www.youtube.com/embed/y9hOckRkWns",
          "https://www.youtube.com/embed/9z1Ux4qITgY",
          "https://www.youtube.com/embed/QOf0Y7Oy-78",
          "https://www.youtube.com/embed/Einj0vjGiwY",
          "https://www.youtube.com/embed/iMZ7x8exCK4",
          "https://www.youtube.com/embed/KQN0qNow3oo",
        ],
        references: [
          "http://ly.yishihui.net/14114.htm",
          "https://www.guoyi360.com/64gua38/xj/5522.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4177.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-38.html",
        ],
      };
    case "睽上九":
      return {
        gua: "睽",
        guaCi: "小事吉.",
        yao: "上九",
        yaoCi: "遇雨之吉, 群疑亡也.",
        origin:
          "睽孤, 见豕负涂, 载鬼一车. 先张之弧, 后说之弧. 匪寇婚媾, 往遇雨则吉.",
        meaning:
          "处于极其孤立的状态 恍惚之间看到一头背上涂满淤泥的猪 又看到一辆载有一车像鬼一样的人 开始想拉开弓箭准备射击 后来又放下弓箭 原来是迎亲的队伍 有所行动 遇到雨可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/jPpKi62dG3A",
          "https://www.youtube.com/embed/y9hOckRkWns",
          "https://www.youtube.com/embed/9z1Ux4qITgY",
          "https://www.youtube.com/embed/QOf0Y7Oy-78",
          "https://www.youtube.com/embed/Einj0vjGiwY",
          "https://www.youtube.com/embed/iMZ7x8exCK4",
          "https://www.youtube.com/embed/KQN0qNow3oo",
        ],
        references: [
          "http://ly.yishihui.net/14116.htm",
          "https://www.guoyi360.com/64gua38/xj/5523.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4177.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-38.html",
        ],
      };
    case "蹇初六":
      return {
        gua: "蹇",
        guaCi: "利西南, 不利东北. 利见大人, 贞吉.",
        yao: "初六",
        yaoCi: "往蹇来誉, 宜待也.",
        origin: "往蹇来誉.",
        meaning: "有所行动 尽管行事艰难 但归来满载荣誉",
        videoUrls: [
          "https://www.youtube.com/embed/YP7mPimiqbw",
          "https://www.youtube.com/embed/ILruCfCWzvk",
          "https://www.youtube.com/embed/jy5llX_TBlE",
          "https://www.youtube.com/embed/k_si0sgn1p4",
          "https://www.youtube.com/embed/hpR7EaevXRs",
          "https://www.youtube.com/embed/55bL3iJT1_U",
          "https://www.youtube.com/embed/UrinkRMgRiI",
        ],
        references: [
          "http://ly.yishihui.net/14027.htm",
          "https://www.guoyi360.com/64gua39/xj/5526.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4179.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-39.html",
        ],
      };
    case "蹇六二":
      return {
        gua: "蹇",
        guaCi: "利西南, 不利东北. 利见大人, 贞吉.",
        yao: "六二",
        yaoCi: "王臣蹇蹇, 终无尤也.",
        origin: "王臣蹇蹇, 匪躬之故.",
        meaning: "君王的臣子遇到险难 不是因为自己的缘故",
        videoUrls: [
          "https://www.youtube.com/embed/YP7mPimiqbw",
          "https://www.youtube.com/embed/ILruCfCWzvk",
          "https://www.youtube.com/embed/jy5llX_TBlE",
          "https://www.youtube.com/embed/k_si0sgn1p4",
          "https://www.youtube.com/embed/hpR7EaevXRs",
          "https://www.youtube.com/embed/55bL3iJT1_U",
          "https://www.youtube.com/embed/UrinkRMgRiI",
        ],
        references: [
          "http://ly.yishihui.net/14029.htm",
          "https://www.guoyi360.com/64gua39/xj/5527.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4179.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-39.html",
        ],
      };
    case "蹇九三":
      return {
        gua: "蹇",
        guaCi: "利西南, 不利东北. 利见大人, 贞吉.",
        yao: "九三",
        yaoCi: "往蹇来反, 内喜之也.",
        origin: "往蹇来反.",
        meaning: "在外行动会遭遇艰难 不如及早返回",
        videoUrls: [
          "https://www.youtube.com/embed/YP7mPimiqbw",
          "https://www.youtube.com/embed/ILruCfCWzvk",
          "https://www.youtube.com/embed/jy5llX_TBlE",
          "https://www.youtube.com/embed/k_si0sgn1p4",
          "https://www.youtube.com/embed/hpR7EaevXRs",
          "https://www.youtube.com/embed/55bL3iJT1_U",
          "https://www.youtube.com/embed/UrinkRMgRiI",
        ],
        references: [
          "http://ly.yishihui.net/14031.htm",
          "https://www.guoyi360.com/64gua39/xj/5528.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4179.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-39.html",
        ],
      };
    case "蹇六四":
      return {
        gua: "蹇",
        guaCi: "利西南, 不利东北. 利见大人, 贞吉.",
        yao: "六四",
        yaoCi: "往蹇来连, 当位实也.",
        origin: "往蹇来连.",
        meaning: "在外行动会遭遇艰难 返回时有车乘",
        videoUrls: [
          "https://www.youtube.com/embed/YP7mPimiqbw",
          "https://www.youtube.com/embed/ILruCfCWzvk",
          "https://www.youtube.com/embed/jy5llX_TBlE",
          "https://www.youtube.com/embed/k_si0sgn1p4",
          "https://www.youtube.com/embed/hpR7EaevXRs",
          "https://www.youtube.com/embed/55bL3iJT1_U",
          "https://www.youtube.com/embed/UrinkRMgRiI",
        ],
        references: [
          "http://ly.yishihui.net/14033.htm",
          "https://www.guoyi360.com/64gua39/xj/5529.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4179.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-39.html",
        ],
      };
    case "蹇九五":
      return {
        gua: "蹇",
        guaCi: "利西南, 不利东北. 利见大人, 贞吉.",
        yao: "九五",
        yaoCi: "大蹇朋来, 以中节也.",
        origin: "大蹇朋来.",
        meaning: "行事十分艰难 朋友们纷纷来帮助",
        videoUrls: [
          "https://www.youtube.com/embed/YP7mPimiqbw",
          "https://www.youtube.com/embed/ILruCfCWzvk",
          "https://www.youtube.com/embed/jy5llX_TBlE",
          "https://www.youtube.com/embed/k_si0sgn1p4",
          "https://www.youtube.com/embed/hpR7EaevXRs",
          "https://www.youtube.com/embed/55bL3iJT1_U",
          "https://www.youtube.com/embed/UrinkRMgRiI",
        ],
        references: [
          "http://ly.yishihui.net/14035.htm",
          "https://www.guoyi360.com/64gua39/xj/5530.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4179.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-39.html",
        ],
      };
    case "蹇上六":
      return {
        gua: "蹇",
        guaCi: "利西南, 不利东北. 利见大人, 贞吉.",
        yao: "上六",
        yaoCi: "往蹇来硕, 志在内也. 利见大人, 以从贵也.",
        origin: "往蹇来硕, 吉. 利见大人.",
        meaning: "外出遭遇艰难 归来硕果累累可获吉祥 有利于大德大才的人出现",
        videoUrls: [
          "https://www.youtube.com/embed/YP7mPimiqbw",
          "https://www.youtube.com/embed/ILruCfCWzvk",
          "https://www.youtube.com/embed/jy5llX_TBlE",
          "https://www.youtube.com/embed/k_si0sgn1p4",
          "https://www.youtube.com/embed/hpR7EaevXRs",
          "https://www.youtube.com/embed/55bL3iJT1_U",
          "https://www.youtube.com/embed/UrinkRMgRiI",
        ],
        references: [
          "http://ly.yishihui.net/14037.htm",
          "https://www.guoyi360.com/64gua39/xj/5531.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4179.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-39.html",
        ],
      };
    case "解初六":
      return {
        gua: "解",
        guaCi: "利西南, 无所往, 其来复吉. 有攸往, 夙吉.",
        yao: "初六",
        yaoCi: "刚柔之际, 义无咎也.",
        origin: "无咎.",
        meaning: "无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/O4uh_7SQ_IM",
          "https://www.youtube.com/embed/4PeoRMKNNGg",
          "https://www.youtube.com/embed/nKAfi19CP34",
          "https://www.youtube.com/embed/Icdc24QD66g",
          "https://www.youtube.com/embed/dne6ACZ2-48",
          "https://www.youtube.com/embed/n22YspN4xVY",
          "https://www.youtube.com/embed/cpnBQ3lznR4",
          "https://www.youtube.com/embed/8dOvwFDLxRQ",
        ],
        references: [
          "http://ly.yishihui.net/14405.htm",
          "https://www.guoyi360.com/64gua40/xj/5534.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4180.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-40.html",
        ],
      };
    case "解九二":
      return {
        gua: "解",
        guaCi: "利西南, 无所往, 其来复吉. 有攸往, 夙吉.",
        yao: "九二",
        yaoCi: "九二贞吉, 得中道也.",
        origin: "田获三狐, 得黄矢, 贞吉.",
        meaning: "打猎时获得三只狐狸 又获得黄色箭矢 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/O4uh_7SQ_IM",
          "https://www.youtube.com/embed/4PeoRMKNNGg",
          "https://www.youtube.com/embed/nKAfi19CP34",
          "https://www.youtube.com/embed/Icdc24QD66g",
          "https://www.youtube.com/embed/dne6ACZ2-48",
          "https://www.youtube.com/embed/n22YspN4xVY",
          "https://www.youtube.com/embed/cpnBQ3lznR4",
          "https://www.youtube.com/embed/8dOvwFDLxRQ",
        ],
        references: [
          "http://ly.yishihui.net/14407.htm",
          "https://www.guoyi360.com/64gua40/xj/5535.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4180.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-40.html",
        ],
      };
    case "解六三":
      return {
        gua: "解",
        guaCi: "利西南, 无所往, 其来复吉. 有攸往, 夙吉.",
        yao: "六三",
        yaoCi: "负且乘, 亦可丑也. 自我致戎, 又谁咎也.",
        origin: "负且乘, 致寇至, 贞吝.",
        meaning: "背负着重物出行 招致贼寇抢劫 即使正固 也会有灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/O4uh_7SQ_IM",
          "https://www.youtube.com/embed/4PeoRMKNNGg",
          "https://www.youtube.com/embed/nKAfi19CP34",
          "https://www.youtube.com/embed/Icdc24QD66g",
          "https://www.youtube.com/embed/dne6ACZ2-48",
          "https://www.youtube.com/embed/n22YspN4xVY",
          "https://www.youtube.com/embed/cpnBQ3lznR4",
          "https://www.youtube.com/embed/8dOvwFDLxRQ",
        ],
        references: [
          "http://ly.yishihui.net/14409.htm",
          "https://www.guoyi360.com/64gua40/xj/5536.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4180.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-40.html",
        ],
      };
    case "解九四":
      return {
        gua: "解",
        guaCi: "利西南, 无所往, 其来复吉. 有攸往, 夙吉.",
        yao: "九四",
        yaoCi: "解而拇, 未当位也.",
        origin: "解而拇, 朋至斯孚.",
        meaning: "像解开被绑的拇指一般摆脱小人的纠缠 朋友才会心怀诚信前来帮助",
        videoUrls: [
          "https://www.youtube.com/embed/O4uh_7SQ_IM",
          "https://www.youtube.com/embed/4PeoRMKNNGg",
          "https://www.youtube.com/embed/nKAfi19CP34",
          "https://www.youtube.com/embed/Icdc24QD66g",
          "https://www.youtube.com/embed/dne6ACZ2-48",
          "https://www.youtube.com/embed/n22YspN4xVY",
          "https://www.youtube.com/embed/cpnBQ3lznR4",
          "https://www.youtube.com/embed/8dOvwFDLxRQ",
        ],
        references: [
          "http://ly.yishihui.net/14411.htm",
          "https://www.guoyi360.com/64gua40/xj/5537.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4180.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-40.html",
        ],
      };
    case "解六五":
      return {
        gua: "解",
        guaCi: "利西南, 无所往, 其来复吉. 有攸往, 夙吉.",
        yao: "六五",
        yaoCi: "君子有解, 小人退也.",
        origin: "君子维有解, 吉, 有孚于小人.",
        meaning: "君王被束缚又得到解脱 可获吉祥 能够用诚信感化小人",
        videoUrls: [
          "https://www.youtube.com/embed/O4uh_7SQ_IM",
          "https://www.youtube.com/embed/4PeoRMKNNGg",
          "https://www.youtube.com/embed/nKAfi19CP34",
          "https://www.youtube.com/embed/Icdc24QD66g",
          "https://www.youtube.com/embed/dne6ACZ2-48",
          "https://www.youtube.com/embed/n22YspN4xVY",
          "https://www.youtube.com/embed/cpnBQ3lznR4",
          "https://www.youtube.com/embed/8dOvwFDLxRQ",
        ],
        references: [
          "http://ly.yishihui.net/14413.htm",
          "https://www.guoyi360.com/64gua40/xj/5538.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4180.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-40.html",
        ],
      };
    case "解上六":
      return {
        gua: "解",
        guaCi: "利西南, 无所往, 其来复吉. 有攸往, 夙吉.",
        yao: "上六",
        yaoCi: "公用射隼, 以解悖也.",
        origin: "公用射隼, 于高墉之上, 获之无不利.",
        meaning: "王公用弓箭在高处射下一只大隼 并且捕获了 无往不利",
        videoUrls: [
          "https://www.youtube.com/embed/O4uh_7SQ_IM",
          "https://www.youtube.com/embed/4PeoRMKNNGg",
          "https://www.youtube.com/embed/nKAfi19CP34",
          "https://www.youtube.com/embed/Icdc24QD66g",
          "https://www.youtube.com/embed/dne6ACZ2-48",
          "https://www.youtube.com/embed/n22YspN4xVY",
          "https://www.youtube.com/embed/cpnBQ3lznR4",
          "https://www.youtube.com/embed/8dOvwFDLxRQ",
        ],
        references: [
          "http://ly.yishihui.net/14415.htm",
          "https://www.guoyi360.com/64gua40/xj/5539.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4180.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-40.html",
        ],
      };
    case "损初九":
      return {
        gua: "损",
        guaCi: "有孚, 元吉, 无咎, 可贞. 利有攸往. 曷之用? 二簋可用享.",
        yao: "初九",
        yaoCi: "已事遄往，尚合志也.",
        origin: "已事遄往, 无咎, 酌损之.",
        meaning:
          "停止自己的事情 尽快帮助他人 无灾祸 不过适当斟酌减损自己一部分利益就可以了",
        videoUrls: [
          "https://www.youtube.com/embed/4wzNvYjrrGM",
          "https://www.youtube.com/embed/VYA__DpA9aU",
          "https://www.youtube.com/embed/sRAoeWNR_m4",
          "https://www.youtube.com/embed/i7EdWEW_jwI",
          "https://www.youtube.com/embed/avU798dOLoQ",
          "https://www.youtube.com/embed/8e5vLIGhMiE",
          "https://www.youtube.com/embed/tTlqu0g_s-M",
          "https://www.youtube.com/embed/q98adkLm0eg",
        ],
        references: [
          "http://ly.yishihui.net/14417.htm",
          "https://www.guoyi360.com/64gua41/xj/5562.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4181.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-41.html",
        ],
      };
    case "损九二":
      return {
        gua: "损",
        guaCi: "有孚, 元吉, 无咎, 可贞. 利有攸往. 曷之用? 二簋可用享.",
        yao: "九二",
        yaoCi: "九二利贞, 中以为志也.",
        origin: "利贞, 征凶. 弗损, 益之.",
        meaning: "有利于正固 出门远行有凶险 不要减少 会得到增益",
        videoUrls: [
          "https://www.youtube.com/embed/4wzNvYjrrGM",
          "https://www.youtube.com/embed/VYA__DpA9aU",
          "https://www.youtube.com/embed/sRAoeWNR_m4",
          "https://www.youtube.com/embed/i7EdWEW_jwI",
          "https://www.youtube.com/embed/avU798dOLoQ",
          "https://www.youtube.com/embed/8e5vLIGhMiE",
          "https://www.youtube.com/embed/tTlqu0g_s-M",
          "https://www.youtube.com/embed/q98adkLm0eg",
        ],
        references: [
          "http://ly.yishihui.net/14419.htm",
          "https://www.guoyi360.com/64gua41/xj/5563.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4181.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-41.html",
        ],
      };
    case "损六三":
      return {
        gua: "损",
        guaCi: "有孚, 元吉, 无咎, 可贞. 利有攸往. 曷之用? 二簋可用享.",
        yao: "六三",
        yaoCi: "一人行, 三则疑也.",
        origin: "三人行, 则损一人; 一人行, 则得其友.",
        meaning:
          "三个人一起前行 有一个人会受到伤害 一个人独行 就会遇到志同道合的朋友",
        videoUrls: [
          "https://www.youtube.com/embed/4wzNvYjrrGM",
          "https://www.youtube.com/embed/VYA__DpA9aU",
          "https://www.youtube.com/embed/sRAoeWNR_m4",
          "https://www.youtube.com/embed/i7EdWEW_jwI",
          "https://www.youtube.com/embed/avU798dOLoQ",
          "https://www.youtube.com/embed/8e5vLIGhMiE",
          "https://www.youtube.com/embed/tTlqu0g_s-M",
          "https://www.youtube.com/embed/q98adkLm0eg",
        ],
        references: [
          "http://ly.yishihui.net/14421.htm",
          "https://www.guoyi360.com/64gua41/xj/5564.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4181.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-41.html",
        ],
      };
    case "损六四":
      return {
        gua: "损",
        guaCi: "有孚, 元吉, 无咎, 可贞. 利有攸往. 曷之用? 二簋可用享.",
        yao: "六四",
        yaoCi: "损其疾, 亦可喜也.",
        origin: "损其疾, 使遄有喜, 无咎.",
        meaning: "尽快解决自身疾患 迎接喜庆的到来 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/4wzNvYjrrGM",
          "https://www.youtube.com/embed/VYA__DpA9aU",
          "https://www.youtube.com/embed/sRAoeWNR_m4",
          "https://www.youtube.com/embed/i7EdWEW_jwI",
          "https://www.youtube.com/embed/avU798dOLoQ",
          "https://www.youtube.com/embed/8e5vLIGhMiE",
          "https://www.youtube.com/embed/tTlqu0g_s-M",
          "https://www.youtube.com/embed/q98adkLm0eg",
        ],
        references: [
          "http://ly.yishihui.net/14423.htm",
          "https://www.guoyi360.com/64gua41/xj/5565.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4181.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-41.html",
        ],
      };
    case "损六五":
      return {
        gua: "损",
        guaCi: "有孚, 元吉, 无咎, 可贞. 利有攸往. 曷之用? 二簋可用享.",
        yao: "六五",
        yaoCi: "六五元吉, 自上佑也.",
        origin: "或益之, 十朋之龟, 弗克违. 元吉.",
        meaning: "有人送来价值连城的神龟 不要推辞 大吉大利",
        videoUrls: [
          "https://www.youtube.com/embed/4wzNvYjrrGM",
          "https://www.youtube.com/embed/VYA__DpA9aU",
          "https://www.youtube.com/embed/sRAoeWNR_m4",
          "https://www.youtube.com/embed/i7EdWEW_jwI",
          "https://www.youtube.com/embed/avU798dOLoQ",
          "https://www.youtube.com/embed/8e5vLIGhMiE",
          "https://www.youtube.com/embed/tTlqu0g_s-M",
          "https://www.youtube.com/embed/q98adkLm0eg",
        ],
        references: [
          "http://ly.yishihui.net/14425.htm",
          "https://www.guoyi360.com/64gua41/xj/5566.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4181.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-41.html",
        ],
      };
    case "损上九":
      return {
        gua: "损",
        guaCi: "有孚, 元吉, 无咎, 可贞. 利有攸往. 曷之用? 二簋可用享.",
        yao: "上九",
        yaoCi: "弗损益之, 大得志也.",
        origin: "弗损, 益之, 无咎. 贞吉. 利有攸往, 得臣无家.",
        meaning:
          "不要减损 会得到增益 无灾祸 正固吉祥 适宜有所行动 会得到臣民没有自己的家",
        videoUrls: [
          "https://www.youtube.com/embed/4wzNvYjrrGM",
          "https://www.youtube.com/embed/VYA__DpA9aU",
          "https://www.youtube.com/embed/sRAoeWNR_m4",
          "https://www.youtube.com/embed/i7EdWEW_jwI",
          "https://www.youtube.com/embed/avU798dOLoQ",
          "https://www.youtube.com/embed/8e5vLIGhMiE",
          "https://www.youtube.com/embed/tTlqu0g_s-M",
          "https://www.youtube.com/embed/q98adkLm0eg",
        ],
        references: [
          "http://ly.yishihui.net/14427.htm",
          "https://www.guoyi360.com/64gua41/xj/5567.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4181.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-41.html",
        ],
      };
    case "益初九":
      return {
        gua: "益",
        guaCi: "利有攸往, 利涉大川.",
        yao: "初九",
        yaoCi: "元吉无咎, 下不厚事也.",
        origin: "利用为大作, 元吉, 无咎.",
        meaning: "有利于大展宏图 大吉大利 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/sEVZTXq73bw",
          "https://www.youtube.com/embed/IDqsG57Zuq8",
          "https://www.youtube.com/embed/_2CgiNkZtS4",
          "https://www.youtube.com/embed/eiF_GbWF0JU",
          "https://www.youtube.com/embed/jk6tPuryo-E",
          "https://www.youtube.com/embed/bxh-srFVRxU",
          "https://www.youtube.com/embed/l5ukEyrQxak",
          "https://www.youtube.com/embed/YKcIrfRb8WA",
        ],
        references: [
          "http://ly.yishihui.net/14429.htm",
          "https://www.guoyi360.com/64gua42/xj/5582.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4182.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-42.html",
        ],
      };
    case "益六二":
      return {
        gua: "益",
        guaCi: "利有攸往, 利涉大川.",
        yao: "六二",
        yaoCi: "或益之, 自外来也.",
        origin: "或益之, 十朋之龟, 弗克违, 永贞吉. 王用享于帝, 吉.",
        meaning:
          "有人送来价值连城的神龟 不要推辞 恒久之事 正固吉祥 君王祭祀先帝 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/sEVZTXq73bw",
          "https://www.youtube.com/embed/IDqsG57Zuq8",
          "https://www.youtube.com/embed/_2CgiNkZtS4",
          "https://www.youtube.com/embed/eiF_GbWF0JU",
          "https://www.youtube.com/embed/jk6tPuryo-E",
          "https://www.youtube.com/embed/bxh-srFVRxU",
          "https://www.youtube.com/embed/l5ukEyrQxak",
          "https://www.youtube.com/embed/YKcIrfRb8WA",
        ],
        references: [
          "http://ly.yishihui.net/14431.htm",
          "https://www.guoyi360.com/64gua42/xj/5583.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4182.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-42.html",
        ],
      };
    case "益六三":
      return {
        gua: "益",
        guaCi: "利有攸往, 利涉大川.",
        yao: "六三",
        yaoCi: "益用凶事, 固有之也.",
        origin: "益之用凶事, 无咎. 有孚中行, 告公用圭.",
        meaning:
          "将得到的好处来救助凶险之事 无灾祸 要以诚相待 时刻像手执玉圭向王公告急求助那样谨慎",
        videoUrls: [
          "https://www.youtube.com/embed/sEVZTXq73bw",
          "https://www.youtube.com/embed/IDqsG57Zuq8",
          "https://www.youtube.com/embed/_2CgiNkZtS4",
          "https://www.youtube.com/embed/eiF_GbWF0JU",
          "https://www.youtube.com/embed/jk6tPuryo-E",
          "https://www.youtube.com/embed/bxh-srFVRxU",
          "https://www.youtube.com/embed/l5ukEyrQxak",
          "https://www.youtube.com/embed/YKcIrfRb8WA",
        ],
        references: [
          "http://ly.yishihui.net/14433.htm",
          "https://www.guoyi360.com/64gua42/xj/5584.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4182.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-42.html",
        ],
      };
    case "益六四":
      return {
        gua: "益",
        guaCi: "利有攸往, 利涉大川.",
        yao: "六四",
        yaoCi: "告公从, 以益志也.",
        origin: "中行, 告公从. 利用为依迁国.",
        meaning:
          "执持守中正道谨慎行事 得到王公信任 有利于凭此来完成迁都利民的大业",
        videoUrls: [
          "https://www.youtube.com/embed/sEVZTXq73bw",
          "https://www.youtube.com/embed/IDqsG57Zuq8",
          "https://www.youtube.com/embed/_2CgiNkZtS4",
          "https://www.youtube.com/embed/eiF_GbWF0JU",
          "https://www.youtube.com/embed/jk6tPuryo-E",
          "https://www.youtube.com/embed/bxh-srFVRxU",
          "https://www.youtube.com/embed/l5ukEyrQxak",
          "https://www.youtube.com/embed/YKcIrfRb8WA",
        ],
        references: [
          "http://ly.yishihui.net/14435.htm",
          "https://www.guoyi360.com/64gua42/xj/5585.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4182.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-42.html",
        ],
      };
    case "益九五":
      return {
        gua: "益",
        guaCi: "利有攸往, 利涉大川.",
        yao: "九五",
        yaoCi: "有孚惠心, 勿问之矣. 惠我德, 大得志也.",
        origin: "有孚惠心, 勿问元吉. 有孚惠我德.",
        meaning:
          "心中有诚信 不用占问 就是 大吉大利 天下人一定会以仁爱之心回报我的仁爱之德",
        videoUrls: [
          "https://www.youtube.com/embed/sEVZTXq73bw",
          "https://www.youtube.com/embed/IDqsG57Zuq8",
          "https://www.youtube.com/embed/_2CgiNkZtS4",
          "https://www.youtube.com/embed/eiF_GbWF0JU",
          "https://www.youtube.com/embed/jk6tPuryo-E",
          "https://www.youtube.com/embed/bxh-srFVRxU",
          "https://www.youtube.com/embed/l5ukEyrQxak",
          "https://www.youtube.com/embed/YKcIrfRb8WA",
        ],
        references: [
          "http://ly.yishihui.net/14437.htm",
          "https://www.guoyi360.com/64gua42/xj/5586.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4182.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-42.html",
        ],
      };
    case "益上九":
      return {
        gua: "益",
        guaCi: "利有攸往, 利涉大川.",
        yao: "上九",
        yaoCi: "莫益之, 偏辞也. 或击之, 自外来也.",
        origin: "莫益之, 或击之, 立心勿恒, 凶.",
        meaning: "没有得到增益帮助 或者受到攻击 树立决心不够坚定 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/sEVZTXq73bw",
          "https://www.youtube.com/embed/IDqsG57Zuq8",
          "https://www.youtube.com/embed/_2CgiNkZtS4",
          "https://www.youtube.com/embed/eiF_GbWF0JU",
          "https://www.youtube.com/embed/jk6tPuryo-E",
          "https://www.youtube.com/embed/bxh-srFVRxU",
          "https://www.youtube.com/embed/l5ukEyrQxak",
          "https://www.youtube.com/embed/YKcIrfRb8WA",
        ],
        references: [
          "http://ly.yishihui.net/14439.htm",
          "https://www.guoyi360.com/64gua42/xj/5587.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4182.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-42.html",
        ],
      };
    case "夬初九":
      return {
        gua: "夬",
        guaCi: "扬于王庭. 孚号有厉. 告自邑, 不利即戎, 利有攸往.",
        yao: "初九",
        yaoCi: "不胜而往, 咎也.",
        origin: "壮于前趾, 往不胜为咎.",
        meaning: "脚趾前部粗壮 冒然前行不会取胜 会招致灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/t8-ZnwIKvqc",
          "https://www.youtube.com/embed/BhAmrAPN8lg",
          "https://www.youtube.com/embed/W19BbSXIu6Q",
          "https://www.youtube.com/embed/hDt9Ajj2Ut8",
          "https://www.youtube.com/embed/TGJIFfhWIhw",
          "https://www.youtube.com/embed/B_osRITpgsE",
          "https://www.youtube.com/embed/x7_3XVuQDms",
          "https://www.youtube.com/embed/akZsl19BGCw",
        ],
        references: [
          "http://ly.yishihui.net/14894.htm",
          "https://www.guoyi360.com/64gua43/xj/5593.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4183.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-43.html",
        ],
      };
    case "夬九二":
      return {
        gua: "夬",
        guaCi: "扬于王庭. 孚号有厉. 告自邑, 不利即戎, 利有攸往.",
        yao: "九二",
        yaoCi: "有戎勿恤, 得中道也.",
        origin: "惕号, 莫夜有戎, 勿恤.",
        meaning: "受到惊吓发出声音 深夜有军队经过 不用担心",
        videoUrls: [
          "https://www.youtube.com/embed/t8-ZnwIKvqc",
          "https://www.youtube.com/embed/BhAmrAPN8lg",
          "https://www.youtube.com/embed/W19BbSXIu6Q",
          "https://www.youtube.com/embed/hDt9Ajj2Ut8",
          "https://www.youtube.com/embed/TGJIFfhWIhw",
          "https://www.youtube.com/embed/B_osRITpgsE",
          "https://www.youtube.com/embed/x7_3XVuQDms",
          "https://www.youtube.com/embed/akZsl19BGCw",
        ],
        references: [
          "http://ly.yishihui.net/14896.htm",
          "https://www.guoyi360.com/64gua43/xj/5594.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4183.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-43.html",
        ],
      };
    case "夬九三":
      return {
        gua: "夬",
        guaCi: "扬于王庭. 孚号有厉. 告自邑, 不利即戎, 利有攸往.",
        yao: "九三",
        yaoCi: "君子夬夬, 终无咎也.",
        origin: "壮于頄, 有凶. 君子夬夬, 独行遇雨, 若濡有愠, 无咎.",
        meaning:
          "面颊之间的骨头强壮 有凶险 君子毅然前行 独自遇雨受淋雨水淋湿了衣服 尽管有怨怒 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/t8-ZnwIKvqc",
          "https://www.youtube.com/embed/BhAmrAPN8lg",
          "https://www.youtube.com/embed/W19BbSXIu6Q",
          "https://www.youtube.com/embed/hDt9Ajj2Ut8",
          "https://www.youtube.com/embed/TGJIFfhWIhw",
          "https://www.youtube.com/embed/B_osRITpgsE",
          "https://www.youtube.com/embed/x7_3XVuQDms",
          "https://www.youtube.com/embed/akZsl19BGCw",
        ],
        references: [
          "http://ly.yishihui.net/14898.htm",
          "https://www.guoyi360.com/64gua43/xj/5595.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4183.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-43.html",
        ],
      };
    case "夬九四":
      return {
        gua: "夬",
        guaCi: "扬于王庭. 孚号有厉. 告自邑, 不利即戎, 利有攸往.",
        yao: "九四",
        yaoCi: "其行次且, 位不当也. 闻言不信, 聪不明也.",
        origin: "臀无肤, 其行次且. 牵羊悔亡, 闻言不信.",
        meaning:
          "臀部无皮 行走艰难 如果能牵羊而行 忧悔消除 无耐听了这话的人并不相信",
        videoUrls: [
          "https://www.youtube.com/embed/t8-ZnwIKvqc",
          "https://www.youtube.com/embed/BhAmrAPN8lg",
          "https://www.youtube.com/embed/W19BbSXIu6Q",
          "https://www.youtube.com/embed/hDt9Ajj2Ut8",
          "https://www.youtube.com/embed/TGJIFfhWIhw",
          "https://www.youtube.com/embed/B_osRITpgsE",
          "https://www.youtube.com/embed/x7_3XVuQDms",
          "https://www.youtube.com/embed/akZsl19BGCw",
        ],
        references: [
          "http://ly.yishihui.net/14900.htm",
          "https://www.guoyi360.com/64gua43/xj/5596.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4183.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-43.html",
        ],
      };
    case "夬九五":
      return {
        gua: "夬",
        guaCi: "扬于王庭. 孚号有厉. 告自邑, 不利即戎, 利有攸往.",
        yao: "九五",
        yaoCi: "中行无咎, 中未光也.",
        origin: "苋陆夬夬, 中行无咎.",
        meaning: "细角山羊毅然前行 守中正道 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/t8-ZnwIKvqc",
          "https://www.youtube.com/embed/BhAmrAPN8lg",
          "https://www.youtube.com/embed/W19BbSXIu6Q",
          "https://www.youtube.com/embed/hDt9Ajj2Ut8",
          "https://www.youtube.com/embed/TGJIFfhWIhw",
          "https://www.youtube.com/embed/B_osRITpgsE",
          "https://www.youtube.com/embed/x7_3XVuQDms",
          "https://www.youtube.com/embed/akZsl19BGCw",
        ],
        references: [
          "http://ly.yishihui.net/14902.htm",
          "https://www.guoyi360.com/64gua43/xj/5597.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4183.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-43.html",
        ],
      };
    case "夬上六":
      return {
        gua: "夬",
        guaCi: "扬于王庭. 孚号有厉. 告自邑, 不利即戎, 利有攸往.",
        yao: "上六",
        yaoCi: "无号之凶, 终不可长也.",
        origin: "无号, 终有凶.",
        meaning: "不要大声发出声音 因为凶险最终会到来",
        videoUrls: [
          "https://www.youtube.com/embed/t8-ZnwIKvqc",
          "https://www.youtube.com/embed/BhAmrAPN8lg",
          "https://www.youtube.com/embed/W19BbSXIu6Q",
          "https://www.youtube.com/embed/hDt9Ajj2Ut8",
          "https://www.youtube.com/embed/TGJIFfhWIhw",
          "https://www.youtube.com/embed/B_osRITpgsE",
          "https://www.youtube.com/embed/x7_3XVuQDms",
          "https://www.youtube.com/embed/akZsl19BGCw",
        ],
        references: [
          "http://ly.yishihui.net/14904.htm",
          "https://www.guoyi360.com/64gua43/xj/5598.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4183.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-43.html",
        ],
      };
    case "姤初六":
      return {
        gua: "姤",
        guaCi: "女壮, 勿用取女.",
        yao: "初六",
        yaoCi: "系于金柅, 柔道牵也.",
        origin: "系于金柅, 贞吉. 有攸往, 见凶. 羸豕孚蹢躅.",
        meaning:
          "紧紧缚在金属织具上 正固吉祥 急于有所行动 会遭遇到凶险 就像猪被捆绑住竭力挣扎一样",
        videoUrls: [
          "https://www.youtube.com/embed/D305yChuOgA",
          "https://www.youtube.com/embed/orBwJOnTxq0",
          "https://www.youtube.com/embed/D5gQqB53Lgo",
          "https://www.youtube.com/embed/HdFqUbKbx-I",
          "https://www.youtube.com/embed/lAqDoUqoVl8",
          "https://www.youtube.com/embed/j6NxNCz8hnA",
          "https://www.youtube.com/embed/CPOGYvZUZik",
        ],
        references: [
          "http://ly.yishihui.net/15236.htm",
          "https://www.guoyi360.com/64gua44/xj/5616.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4184.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-44.html",
        ],
      };
    case "姤九二":
      return {
        gua: "姤",
        guaCi: "女壮, 勿用取女.",
        yao: "九二",
        yaoCi: "包有鱼, 义不及宾也.",
        origin: "包有鱼, 无咎, 不利宾.",
        meaning: "厨房有鱼 无灾祸 不适宜宴请宾客",
        videoUrls: [
          "https://www.youtube.com/embed/D305yChuOgA",
          "https://www.youtube.com/embed/orBwJOnTxq0",
          "https://www.youtube.com/embed/D5gQqB53Lgo",
          "https://www.youtube.com/embed/HdFqUbKbx-I",
          "https://www.youtube.com/embed/lAqDoUqoVl8",
          "https://www.youtube.com/embed/j6NxNCz8hnA",
          "https://www.youtube.com/embed/CPOGYvZUZik",
        ],
        references: [
          "http://ly.yishihui.net/15238.htm",
          "https://www.guoyi360.com/64gua44/xj/5617.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4184.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-44.html",
        ],
      };
    case "姤九三":
      return {
        gua: "姤",
        guaCi: "女壮, 勿用取女.",
        yao: "九三",
        yaoCi: "其行次且, 行未牵也.",
        origin: "臀无肤, 其行次且. 厉, 无大咎.",
        meaning: "屁股上没有皮肤 走路会很艰难 有危险 但无大灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/D305yChuOgA",
          "https://www.youtube.com/embed/orBwJOnTxq0",
          "https://www.youtube.com/embed/D5gQqB53Lgo",
          "https://www.youtube.com/embed/HdFqUbKbx-I",
          "https://www.youtube.com/embed/lAqDoUqoVl8",
          "https://www.youtube.com/embed/j6NxNCz8hnA",
          "https://www.youtube.com/embed/CPOGYvZUZik",
        ],
        references: [
          "http://ly.yishihui.net/15240.htm",
          "https://www.guoyi360.com/64gua44/xj/5618.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4184.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-44.html",
        ],
      };
    case "姤九四":
      return {
        gua: "姤",
        guaCi: "女壮, 勿用取女.",
        yao: "九四",
        yaoCi: "无鱼之凶, 远民也.",
        origin: "包无鱼, 起凶.",
        meaning: "厨房无鱼 会引发凶险",
        videoUrls: [
          "https://www.youtube.com/embed/D305yChuOgA",
          "https://www.youtube.com/embed/orBwJOnTxq0",
          "https://www.youtube.com/embed/D5gQqB53Lgo",
          "https://www.youtube.com/embed/HdFqUbKbx-I",
          "https://www.youtube.com/embed/lAqDoUqoVl8",
          "https://www.youtube.com/embed/j6NxNCz8hnA",
          "https://www.youtube.com/embed/CPOGYvZUZik",
        ],
        references: [
          "http://ly.yishihui.net/15242.htm",
          "https://www.guoyi360.com/64gua44/xj/5619.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4184.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-44.html",
        ],
      };
    case "姤九五":
      return {
        gua: "姤",
        guaCi: "女壮, 勿用取女.",
        yao: "九五",
        yaoCi: "九五含章, 中正也. 有陨自天, 志不舍命也.",
        origin: "以杞包瓜, 含章, 有陨自天.",
        meaning: "用杞树萌护树下的瓜果 象征着蕴藏文采 会从天而降",
        videoUrls: [
          "https://www.youtube.com/embed/D305yChuOgA",
          "https://www.youtube.com/embed/orBwJOnTxq0",
          "https://www.youtube.com/embed/D5gQqB53Lgo",
          "https://www.youtube.com/embed/HdFqUbKbx-I",
          "https://www.youtube.com/embed/lAqDoUqoVl8",
          "https://www.youtube.com/embed/j6NxNCz8hnA",
          "https://www.youtube.com/embed/CPOGYvZUZik",
        ],
        references: [
          "http://ly.yishihui.net/15244.htm",
          "https://www.guoyi360.com/64gua44/xj/5620.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4184.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-44.html",
        ],
      };
    case "姤上九":
      return {
        gua: "姤",
        guaCi: "女壮, 勿用取女.",
        yao: "上九",
        yaoCi: "姤其角, 上穷吝也.",
        origin: "姤其角, 吝, 无咎.",
        meaning: "走入空荡的角落里 凶险 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/D305yChuOgA",
          "https://www.youtube.com/embed/orBwJOnTxq0",
          "https://www.youtube.com/embed/D5gQqB53Lgo",
          "https://www.youtube.com/embed/HdFqUbKbx-I",
          "https://www.youtube.com/embed/lAqDoUqoVl8",
          "https://www.youtube.com/embed/j6NxNCz8hnA",
          "https://www.youtube.com/embed/CPOGYvZUZik",
        ],
        references: [
          "http://ly.yishihui.net/15246.htm",
          "https://www.guoyi360.com/64gua44/xj/5621.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4184.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-44.html",
        ],
      };
    case "萃初六":
      return {
        gua: "萃",
        guaCi: "亨. 王假有庙. 利见大人, 亨, 利贞. 用大牲吉, 利有攸往.",
        yao: "初六",
        yaoCi: "乃乱乃萃, 其志乱也.",
        origin: "有孚不终, 乃乱乃萃. 若号, 一握为笑. 勿恤, 往无咎.",
        meaning:
          "心怀诚信但没有坚持到最后 出现了混乱与新的聚集 如果发出大的声音 就在此时占卜到 一握之数 随后大笑 不用忧虑 有所行动无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/iv8astOXRS8",
          "https://www.youtube.com/embed/ml_WTJHpOBA",
          "https://www.youtube.com/embed/rbRF21pxcNw",
          "https://www.youtube.com/embed/ix56hoHoWec",
          "https://www.youtube.com/embed/URFn6BBAEec",
          "https://www.youtube.com/embed/-hDjCNxSXRg",
          "https://www.youtube.com/embed/szLHNe0oanQ",
          "https://www.youtube.com/embed/F1zkQ_wrYck",
        ],
        references: [
          "http://ly.yishihui.net/15248.htm",
          "https://www.guoyi360.com/64gua45/xj/5624.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4185.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-45.html",
        ],
      };
    case "萃六二":
      return {
        gua: "萃",
        guaCi: "亨. 王假有庙. 利见大人, 亨, 利贞. 用大牲吉, 利有攸往.",
        yao: "六二",
        yaoCi: "引吉无咎, 中未变也.",
        origin: "引吉, 无咎. 孚乃利用禴.",
        meaning: "迎来吉祥 无灾祸 心怀诚信有利于祭祀求福",
        videoUrls: [
          "https://www.youtube.com/embed/iv8astOXRS8",
          "https://www.youtube.com/embed/ml_WTJHpOBA",
          "https://www.youtube.com/embed/rbRF21pxcNw",
          "https://www.youtube.com/embed/ix56hoHoWec",
          "https://www.youtube.com/embed/URFn6BBAEec",
          "https://www.youtube.com/embed/-hDjCNxSXRg",
          "https://www.youtube.com/embed/szLHNe0oanQ",
          "https://www.youtube.com/embed/F1zkQ_wrYck",
        ],
        references: [
          "http://ly.yishihui.net/15250.htm",
          "https://www.guoyi360.com/64gua45/xj/5625.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4185.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-45.html",
        ],
      };
    case "萃六三":
      return {
        gua: "萃",
        guaCi: "亨. 王假有庙. 利见大人, 亨, 利贞. 用大牲吉, 利有攸往.",
        yao: "六三",
        yaoCi: "往无咎, 上巽也.",
        origin: "萃如, 嗟如, 无攸利. 往无咎, 小吝.",
        meaning: "由于汇聚而产生叹息 无益处 有所行动无灾祸 小凶险",
        videoUrls: [
          "https://www.youtube.com/embed/iv8astOXRS8",
          "https://www.youtube.com/embed/ml_WTJHpOBA",
          "https://www.youtube.com/embed/rbRF21pxcNw",
          "https://www.youtube.com/embed/ix56hoHoWec",
          "https://www.youtube.com/embed/URFn6BBAEec",
          "https://www.youtube.com/embed/-hDjCNxSXRg",
          "https://www.youtube.com/embed/szLHNe0oanQ",
          "https://www.youtube.com/embed/F1zkQ_wrYck",
        ],
        references: [
          "http://ly.yishihui.net/15252.htm",
          "https://www.guoyi360.com/64gua45/xj/5626.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4185.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-45.html",
        ],
      };
    case "萃九四":
      return {
        gua: "萃",
        guaCi: "亨. 王假有庙. 利见大人, 亨, 利贞. 用大牲吉, 利有攸往.",
        yao: "九四",
        yaoCi: "大吉无咎, 位不当也.",
        origin: "大吉, 无咎.",
        meaning: "大的吉祥 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/iv8astOXRS8",
          "https://www.youtube.com/embed/ml_WTJHpOBA",
          "https://www.youtube.com/embed/rbRF21pxcNw",
          "https://www.youtube.com/embed/ix56hoHoWec",
          "https://www.youtube.com/embed/URFn6BBAEec",
          "https://www.youtube.com/embed/-hDjCNxSXRg",
          "https://www.youtube.com/embed/szLHNe0oanQ",
          "https://www.youtube.com/embed/F1zkQ_wrYck",
        ],
        references: [
          "http://ly.yishihui.net/15254.htm",
          "https://www.guoyi360.com/64gua45/xj/5627.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4185.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-45.html",
        ],
      };
    case "萃九五":
      return {
        gua: "萃",
        guaCi: "亨. 王假有庙. 利见大人, 亨, 利贞. 用大牲吉, 利有攸往.",
        yao: "九五",
        yaoCi: "萃有位, 志未光也.",
        origin: "萃有位, 无咎. 匪孚, 元永贞, 悔亡.",
        meaning:
          "汇聚而适得其位 无灾祸 但还不能获取众人的信任 开始并持续正固 忧悔消除",
        videoUrls: [
          "https://www.youtube.com/embed/iv8astOXRS8",
          "https://www.youtube.com/embed/ml_WTJHpOBA",
          "https://www.youtube.com/embed/rbRF21pxcNw",
          "https://www.youtube.com/embed/ix56hoHoWec",
          "https://www.youtube.com/embed/URFn6BBAEec",
          "https://www.youtube.com/embed/-hDjCNxSXRg",
          "https://www.youtube.com/embed/szLHNe0oanQ",
          "https://www.youtube.com/embed/F1zkQ_wrYck",
        ],
        references: [
          "http://ly.yishihui.net/15256.htm",
          "https://www.guoyi360.com/64gua45/xj/5628.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4185.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-45.html",
        ],
      };
    case "萃上六":
      return {
        gua: "萃",
        guaCi: "亨. 王假有庙. 利见大人, 亨, 利贞. 用大牲吉, 利有攸往.",
        yao: "上六",
        yaoCi: "赍咨涕洟, 未安上也.",
        origin: "赍咨涕洟, 无咎.",
        meaning: "悲伤叹息又痛哭流涕 没灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/iv8astOXRS8",
          "https://www.youtube.com/embed/ml_WTJHpOBA",
          "https://www.youtube.com/embed/rbRF21pxcNw",
          "https://www.youtube.com/embed/ix56hoHoWec",
          "https://www.youtube.com/embed/URFn6BBAEec",
          "https://www.youtube.com/embed/-hDjCNxSXRg",
          "https://www.youtube.com/embed/szLHNe0oanQ",
          "https://www.youtube.com/embed/F1zkQ_wrYck",
        ],
        references: [
          "http://ly.yishihui.net/15258.htm",
          "https://www.guoyi360.com/64gua45/xj/5629.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4185.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-45.html",
        ],
      };
    case "升初六":
      return {
        gua: "升",
        guaCi: "元亨, 用见大人, 勿恤, 南征吉.",
        yao: "初六",
        yaoCi: "允升大吉, 上合志也.",
        origin: "允升, 大吉.",
        meaning: "不断长进上升 大的吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/Md-pb80QYtI",
          "https://www.youtube.com/embed/1gwGVlyP97U",
          "https://www.youtube.com/embed/s7yGC0LUjLc",
          "https://www.youtube.com/embed/o9g2R7u33KU",
          "https://www.youtube.com/embed/tiupI8wQZJI",
          "https://www.youtube.com/embed/jdiBd-Vz2VY",
          "https://www.youtube.com/embed/WR74oaGN0f8",
          "https://www.youtube.com/embed/5QHcihpQxUA",
        ],
        references: [
          "http://ly.yishihui.net/15278.htm",
          "https://www.guoyi360.com/64gua46/xj/5636.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4186.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-46.html",
        ],
      };
    case "升九二":
      return {
        gua: "升",
        guaCi: "元亨, 用见大人, 勿恤, 南征吉.",
        yao: "九二",
        yaoCi: "九二之孚, 有喜也.",
        origin: "孚乃利用禴, 无咎.",
        meaning: "心怀诚信有助于祭祀求福 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/Md-pb80QYtI",
          "https://www.youtube.com/embed/1gwGVlyP97U",
          "https://www.youtube.com/embed/s7yGC0LUjLc",
          "https://www.youtube.com/embed/o9g2R7u33KU",
          "https://www.youtube.com/embed/tiupI8wQZJI",
          "https://www.youtube.com/embed/jdiBd-Vz2VY",
          "https://www.youtube.com/embed/WR74oaGN0f8",
          "https://www.youtube.com/embed/5QHcihpQxUA",
        ],
        references: [
          "http://ly.yishihui.net/15280.htm",
          "https://www.guoyi360.com/64gua46/xj/5637.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4186.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-46.html",
        ],
      };
    case "升九三":
      return {
        gua: "升",
        guaCi: "元亨, 用见大人, 勿恤, 南征吉.",
        yao: "九三",
        yaoCi: "升虚邑, 无所疑也.",
        origin: "升虚邑.",
        meaning: "上升到空旷的城邑 如入无人之境",
        videoUrls: [
          "https://www.youtube.com/embed/Md-pb80QYtI",
          "https://www.youtube.com/embed/1gwGVlyP97U",
          "https://www.youtube.com/embed/s7yGC0LUjLc",
          "https://www.youtube.com/embed/o9g2R7u33KU",
          "https://www.youtube.com/embed/tiupI8wQZJI",
          "https://www.youtube.com/embed/jdiBd-Vz2VY",
          "https://www.youtube.com/embed/WR74oaGN0f8",
          "https://www.youtube.com/embed/5QHcihpQxUA",
        ],
        references: [
          "http://ly.yishihui.net/15282.htm",
          "https://www.guoyi360.com/64gua46/xj/5638.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4186.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-46.html",
        ],
      };
    case "升六四":
      return {
        gua: "升",
        guaCi: "元亨, 用见大人, 勿恤, 南征吉.",
        yao: "六四",
        yaoCi: "王用亨于岐山, 顺事也.",
        origin: "王用亨于岐山, 吉, 无咎.",
        meaning: "君王来到岐山祭祀神灵 可获吉祥 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/Md-pb80QYtI",
          "https://www.youtube.com/embed/1gwGVlyP97U",
          "https://www.youtube.com/embed/s7yGC0LUjLc",
          "https://www.youtube.com/embed/o9g2R7u33KU",
          "https://www.youtube.com/embed/tiupI8wQZJI",
          "https://www.youtube.com/embed/jdiBd-Vz2VY",
          "https://www.youtube.com/embed/WR74oaGN0f8",
          "https://www.youtube.com/embed/5QHcihpQxUA",
        ],
        references: [
          "http://ly.yishihui.net/15284.htm",
          "https://www.guoyi360.com/64gua46/xj/5639.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4186.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-46.html",
        ],
      };
    case "升六五":
      return {
        gua: "升",
        guaCi: "元亨, 用见大人, 勿恤, 南征吉.",
        yao: "六五",
        yaoCi: "贞吉升阶, 大得志也.",
        origin: "贞吉, 升阶.",
        meaning: "正固吉祥 步步高升",
        videoUrls: [
          "https://www.youtube.com/embed/Md-pb80QYtI",
          "https://www.youtube.com/embed/1gwGVlyP97U",
          "https://www.youtube.com/embed/s7yGC0LUjLc",
          "https://www.youtube.com/embed/o9g2R7u33KU",
          "https://www.youtube.com/embed/tiupI8wQZJI",
          "https://www.youtube.com/embed/jdiBd-Vz2VY",
          "https://www.youtube.com/embed/WR74oaGN0f8",
          "https://www.youtube.com/embed/5QHcihpQxUA",
        ],
        references: [
          "http://ly.yishihui.net/15286.htm",
          "https://www.guoyi360.com/64gua46/xj/5640.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4186.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-46.html",
        ],
      };
    case "升上六":
      return {
        gua: "升",
        guaCi: "元亨, 用见大人, 勿恤, 南征吉.",
        yao: "上六",
        yaoCi: "冥升在上, 消不富也.",
        origin: "冥升, 利于不息之贞.",
        meaning: "深夜还要上升 有利于停止上升而正固",
        videoUrls: [
          "https://www.youtube.com/embed/Md-pb80QYtI",
          "https://www.youtube.com/embed/1gwGVlyP97U",
          "https://www.youtube.com/embed/s7yGC0LUjLc",
          "https://www.youtube.com/embed/o9g2R7u33KU",
          "https://www.youtube.com/embed/tiupI8wQZJI",
          "https://www.youtube.com/embed/jdiBd-Vz2VY",
          "https://www.youtube.com/embed/WR74oaGN0f8",
          "https://www.youtube.com/embed/5QHcihpQxUA",
        ],
        references: [
          "http://ly.yishihui.net/15288.htm",
          "https://www.guoyi360.com/64gua46/xj/5641.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4186.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-46.html",
        ],
      };
    case "困初六":
      return {
        gua: "困",
        guaCi: "亨, 贞, 大人吉, 无咎. 有言不信.",
        yao: "初六",
        yaoCi: "入于幽谷, 幽不明也.",
        origin: "臀困于株木, 入于幽谷, 三岁不觌.",
        meaning: "困坐在树干上无法安身 只得退居幽暗的山谷里 三年不能露面",
        videoUrls: [
          "https://www.youtube.com/embed/zroiV_ye60Y",
          "https://www.youtube.com/embed/KoWMeQoO8jA",
          "https://www.youtube.com/embed/LpM1Ea0PzMI",
          "https://www.youtube.com/embed/XLkA2HGjjGU",
          "https://www.youtube.com/embed/ANdkKdGsXGE",
          "https://www.youtube.com/embed/4bCO1ynD4iY",
          "https://www.youtube.com/embed/GNnxnfVKdVY",
          "https://www.youtube.com/embed/o-RJtOguCz4",
        ],
        references: [
          "http://ly.yishihui.net/14602.htm",
          "https://www.guoyi360.com/64gua47/xj/5649.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4187.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-47.html",
        ],
      };
    case "困九二":
      return {
        gua: "困",
        guaCi: "亨, 贞, 大人吉, 无咎. 有言不信.",
        yao: "九二",
        yaoCi: "困于酒食, 中有庆也.",
        origin: "困于酒食, 朱绂方来, 利用享祀. 征凶, 无咎.",
        meaning:
          "喝醉了酒 大红祭祀衣服刚刚送来 正好用来祭祀 此时出门远行有凶险 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/zroiV_ye60Y",
          "https://www.youtube.com/embed/KoWMeQoO8jA",
          "https://www.youtube.com/embed/LpM1Ea0PzMI",
          "https://www.youtube.com/embed/XLkA2HGjjGU",
          "https://www.youtube.com/embed/ANdkKdGsXGE",
          "https://www.youtube.com/embed/4bCO1ynD4iY",
          "https://www.youtube.com/embed/GNnxnfVKdVY",
          "https://www.youtube.com/embed/o-RJtOguCz4",
        ],
        references: [
          "http://ly.yishihui.net/14604.htm",
          "https://www.guoyi360.com/64gua47/xj/5650.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4187.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-47.html",
        ],
      };
    case "困六三":
      return {
        gua: "困",
        guaCi: "亨, 贞, 大人吉, 无咎. 有言不信.",
        yao: "六三",
        yaoCi: "据于蒺藜, 乘刚也. 入于其宫, 不见其妻, 不祥也.",
        origin: "困于石, 据于疾藜. 入于其宫, 不见其妻, 凶.",
        meaning:
          "被困到乱石之中 靠着有刺的荆棘爬了出来 回到家中 看不到妻子 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/zroiV_ye60Y",
          "https://www.youtube.com/embed/KoWMeQoO8jA",
          "https://www.youtube.com/embed/LpM1Ea0PzMI",
          "https://www.youtube.com/embed/XLkA2HGjjGU",
          "https://www.youtube.com/embed/ANdkKdGsXGE",
          "https://www.youtube.com/embed/4bCO1ynD4iY",
          "https://www.youtube.com/embed/GNnxnfVKdVY",
          "https://www.youtube.com/embed/o-RJtOguCz4",
        ],
        references: [
          "http://ly.yishihui.net/14606.htm",
          "https://www.guoyi360.com/64gua47/xj/5651.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4187.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-47.html",
        ],
      };
    case "困九四":
      return {
        gua: "困",
        guaCi: "亨, 贞, 大人吉, 无咎. 有言不信.",
        yao: "九四",
        yaoCi: "来徐徐, 志在下也. 虽不当位, 有与也.",
        origin: "来徐徐, 困于金车, 吝, 有终.",
        meaning:
          "迈着步子缓缓走来 被一辆豪华的大车挡住了去路 有麻烦 但会有好的结果",
        videoUrls: [
          "https://www.youtube.com/embed/zroiV_ye60Y",
          "https://www.youtube.com/embed/KoWMeQoO8jA",
          "https://www.youtube.com/embed/LpM1Ea0PzMI",
          "https://www.youtube.com/embed/XLkA2HGjjGU",
          "https://www.youtube.com/embed/ANdkKdGsXGE",
          "https://www.youtube.com/embed/4bCO1ynD4iY",
          "https://www.youtube.com/embed/GNnxnfVKdVY",
          "https://www.youtube.com/embed/o-RJtOguCz4",
        ],
        references: [
          "http://ly.yishihui.net/14608.htm",
          "https://www.guoyi360.com/64gua47/xj/5652.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4187.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-47.html",
        ],
      };
    case "困九五":
      return {
        gua: "困",
        guaCi: "亨, 贞, 大人吉, 无咎. 有言不信.",
        yao: "九五",
        yaoCi: "劓刖, 志未得也. 乃徐有说, 以中直也. 利用祭祀, 受福也.",
        origin: "劓刖, 困于赤绂. 乃徐, 有说, 利用祭祀.",
        meaning:
          "使用割鼻断足刑罚来治理众人 困难是因红色祭服引起 因而就渐渐的不再穿了 有利于祭祀",
        videoUrls: [
          "https://www.youtube.com/embed/zroiV_ye60Y",
          "https://www.youtube.com/embed/KoWMeQoO8jA",
          "https://www.youtube.com/embed/LpM1Ea0PzMI",
          "https://www.youtube.com/embed/XLkA2HGjjGU",
          "https://www.youtube.com/embed/ANdkKdGsXGE",
          "https://www.youtube.com/embed/4bCO1ynD4iY",
          "https://www.youtube.com/embed/GNnxnfVKdVY",
          "https://www.youtube.com/embed/o-RJtOguCz4",
        ],
        references: [
          "http://ly.yishihui.net/14610.htm",
          "https://www.guoyi360.com/64gua47/xj/5653.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4187.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-47.html",
        ],
      };
    case "困上六":
      return {
        gua: "困",
        guaCi: "亨, 贞, 大人吉, 无咎. 有言不信.",
        yao: "上六",
        yaoCi: "困于葛藟, 未当也. 动悔有悔, 吉行也.",
        origin: "困于葛藟, 于臲卼, 曰动悔. 有悔, 征吉.",
        meaning:
          "被葛藤纠缠的惶恐不安有所行动会感到后悔 应该幡然悔悟 出门远行 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/zroiV_ye60Y",
          "https://www.youtube.com/embed/KoWMeQoO8jA",
          "https://www.youtube.com/embed/LpM1Ea0PzMI",
          "https://www.youtube.com/embed/XLkA2HGjjGU",
          "https://www.youtube.com/embed/ANdkKdGsXGE",
          "https://www.youtube.com/embed/4bCO1ynD4iY",
          "https://www.youtube.com/embed/GNnxnfVKdVY",
          "https://www.youtube.com/embed/o-RJtOguCz4",
        ],
        references: [
          "http://ly.yishihui.net/14612.htm",
          "https://www.guoyi360.com/64gua47/xj/5654.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4187.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-47.html",
        ],
      };
    case "井初六":
      return {
        gua: "井",
        guaCi: "改邑不改井, 无丧无得. 往来井井. 汔至亦未繘井. 羸其瓶, 凶.",
        yao: "初六",
        yaoCi: "井泥不食, 下也. 旧井无禽, 时舍也.",
        origin: "井泥不食, 旧井无禽.",
        meaning: "井底污泥淤积 井水已经不能再食用 井枯树死 飞鸟再也不来栖息",
        videoUrls: [
          "https://www.youtube.com/embed/xw4Oyuddkn0",
          "https://www.youtube.com/embed/QvLYftZ3nCY",
          "https://www.youtube.com/embed/EraiLIWOlcs",
          "https://www.youtube.com/embed/a3A2f0Y_-L4",
          "https://www.youtube.com/embed/jBWPK3kw_I0",
          "https://www.youtube.com/embed/IldHaMwSh-E",
          "https://www.youtube.com/embed/RRuHXHhdCmo",
        ],
        references: [
          "http://ly.yishihui.net/14614.htm",
          "https://www.guoyi360.com/64gua48/xj/5657.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4188.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-48.html",
        ],
      };
    case "井九二":
      return {
        gua: "井",
        guaCi: "改邑不改井, 无丧无得. 往来井井. 汔至亦未繘井. 羸其瓶, 凶.",
        yao: "九二",
        yaoCi: "井谷射鲋, 无与也.",
        origin: "井谷射鲋, 瓮敝漏.",
        meaning: "井中积水处被当作捉鱼的场所 用来打水的瓦罐破漏不能再用",
        videoUrls: [
          "https://www.youtube.com/embed/xw4Oyuddkn0",
          "https://www.youtube.com/embed/QvLYftZ3nCY",
          "https://www.youtube.com/embed/EraiLIWOlcs",
          "https://www.youtube.com/embed/a3A2f0Y_-L4",
          "https://www.youtube.com/embed/jBWPK3kw_I0",
          "https://www.youtube.com/embed/IldHaMwSh-E",
          "https://www.youtube.com/embed/RRuHXHhdCmo",
        ],
        references: [
          "http://ly.yishihui.net/14616.htm",
          "https://www.guoyi360.com/64gua48/xj/5658.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4188.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-48.html",
        ],
      };
    case "井九三":
      return {
        gua: "井",
        guaCi: "改邑不改井, 无丧无得. 往来井井. 汔至亦未繘井. 羸其瓶, 凶.",
        yao: "九三",
        yaoCi: "井渫不食, 行恻也. 求王明, 受福也.",
        origin: "井渫不食, 为我心恻. 可用汲, 王明, 并受其福.",
        meaning:
          "井中淤泥已被清除仍然没有人取水食用 让人心生悲伤 井水已可食用 应该尽快来取水 君王圣明 与臣民共享恩泽",
        videoUrls: [
          "https://www.youtube.com/embed/xw4Oyuddkn0",
          "https://www.youtube.com/embed/QvLYftZ3nCY",
          "https://www.youtube.com/embed/EraiLIWOlcs",
          "https://www.youtube.com/embed/a3A2f0Y_-L4",
          "https://www.youtube.com/embed/jBWPK3kw_I0",
          "https://www.youtube.com/embed/IldHaMwSh-E",
          "https://www.youtube.com/embed/RRuHXHhdCmo",
        ],
        references: [
          "http://ly.yishihui.net/14618.htm",
          "https://www.guoyi360.com/64gua48/xj/5659.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4188.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-48.html",
        ],
      };
    case "井六四":
      return {
        gua: "井",
        guaCi: "改邑不改井, 无丧无得. 往来井井. 汔至亦未繘井. 羸其瓶, 凶.",
        yao: "六四",
        yaoCi: "井甃无咎, 修井也.",
        origin: "井甃, 无咎.",
        meaning: "修整井壁 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/xw4Oyuddkn0",
          "https://www.youtube.com/embed/QvLYftZ3nCY",
          "https://www.youtube.com/embed/EraiLIWOlcs",
          "https://www.youtube.com/embed/a3A2f0Y_-L4",
          "https://www.youtube.com/embed/jBWPK3kw_I0",
          "https://www.youtube.com/embed/IldHaMwSh-E",
          "https://www.youtube.com/embed/RRuHXHhdCmo",
        ],
        references: [
          "http://ly.yishihui.net/14620.htm",
          "https://www.guoyi360.com/64gua48/xj/5660.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4188.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-48.html",
        ],
      };
    case "井九五":
      return {
        gua: "井",
        guaCi: "改邑不改井, 无丧无得. 往来井井. 汔至亦未繘井. 羸其瓶, 凶.",
        yao: "九五",
        yaoCi: "寒泉之食, 中正也.",
        origin: "井冽寒泉, 食.",
        meaning: "井水清澈明净就像甘甜凉爽的泉水一样 可供饮用",
        videoUrls: [
          "https://www.youtube.com/embed/xw4Oyuddkn0",
          "https://www.youtube.com/embed/QvLYftZ3nCY",
          "https://www.youtube.com/embed/EraiLIWOlcs",
          "https://www.youtube.com/embed/a3A2f0Y_-L4",
          "https://www.youtube.com/embed/jBWPK3kw_I0",
          "https://www.youtube.com/embed/IldHaMwSh-E",
          "https://www.youtube.com/embed/RRuHXHhdCmo",
        ],
        references: [
          "http://ly.yishihui.net/14622.htm",
          "https://www.guoyi360.com/64gua48/xj/5661.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4188.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-48.html",
        ],
      };
    case "井上六":
      return {
        gua: "井",
        guaCi: "改邑不改井, 无丧无得. 往来井井. 汔至亦未繘井. 羸其瓶, 凶.",
        yao: "上六",
        yaoCi: "元吉在上, 大成也.",
        origin: "井收勿幕, 有孚元吉.",
        meaning: "修整水井的事已然完成 无需再盖井口 此时心怀诚信 大吉大利",
        videoUrls: [
          "https://www.youtube.com/embed/xw4Oyuddkn0",
          "https://www.youtube.com/embed/QvLYftZ3nCY",
          "https://www.youtube.com/embed/EraiLIWOlcs",
          "https://www.youtube.com/embed/a3A2f0Y_-L4",
          "https://www.youtube.com/embed/jBWPK3kw_I0",
          "https://www.youtube.com/embed/IldHaMwSh-E",
          "https://www.youtube.com/embed/RRuHXHhdCmo",
        ],
        references: [
          "http://ly.yishihui.net/14624.htm",
          "https://www.guoyi360.com/64gua48/xj/5662.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4188.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-48.html",
        ],
      };
    case "革初九":
      return {
        gua: "革",
        guaCi: "己日乃孚. 元亨利贞. 悔亡.",
        yao: "初九",
        yaoCi: "巩用黄牛, 不可以有为也.",
        origin: "巩用黄牛之革.",
        meaning: "用黄牛皮绳牢牢拴住 以免轻举妄动",
        videoUrls: [
          "https://www.youtube.com/embed/IicUkJcabq8",
          "https://www.youtube.com/embed/Z6d_XFOwyyI",
          "https://www.youtube.com/embed/q9eywV9Chu4",
          "https://www.youtube.com/embed/RhUnMlGhdzc",
          "https://www.youtube.com/embed/lCy9r0vg5Xg",
          "https://www.youtube.com/embed/Bg9FAhgkAsQ",
          "https://www.youtube.com/embed/C_GhcwGpaRE",
          "https://www.youtube.com/embed/44vaXnSlSXI",
        ],
        references: [
          "http://ly.yishihui.net/14626.htm",
          "https://www.guoyi360.com/64gua49/xj/5669.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4189.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-49.html",
        ],
      };
    case "革六二":
      return {
        gua: "革",
        guaCi: "己日乃孚. 元亨利贞. 悔亡.",
        yao: "六二",
        yaoCi: "己日革之, 行有嘉也.",
        origin: "己日乃革之. 征吉, 无咎.",
        meaning: "到了己日断然进行改革 出兵讨伐可获吉祥 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/IicUkJcabq8",
          "https://www.youtube.com/embed/Z6d_XFOwyyI",
          "https://www.youtube.com/embed/q9eywV9Chu4",
          "https://www.youtube.com/embed/RhUnMlGhdzc",
          "https://www.youtube.com/embed/lCy9r0vg5Xg",
          "https://www.youtube.com/embed/Bg9FAhgkAsQ",
          "https://www.youtube.com/embed/C_GhcwGpaRE",
          "https://www.youtube.com/embed/44vaXnSlSXI",
        ],
        references: [
          "http://ly.yishihui.net/14628.htm",
          "https://www.guoyi360.com/64gua49/xj/5676.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4189.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-49.html",
        ],
      };
    case "革九三":
      return {
        gua: "革",
        guaCi: "己日乃孚. 元亨利贞. 悔亡.",
        yao: "九三",
        yaoCi: "革言三就, 又何之矣.",
        origin: "征凶, 贞厉. 革言三就, 有孚.",
        meaning:
          "出门远行会有凶险 即使正固也有危险 变革要集思广益 行动时要有诚信",
        videoUrls: [
          "https://www.youtube.com/embed/IicUkJcabq8",
          "https://www.youtube.com/embed/Z6d_XFOwyyI",
          "https://www.youtube.com/embed/q9eywV9Chu4",
          "https://www.youtube.com/embed/RhUnMlGhdzc",
          "https://www.youtube.com/embed/lCy9r0vg5Xg",
          "https://www.youtube.com/embed/Bg9FAhgkAsQ",
          "https://www.youtube.com/embed/C_GhcwGpaRE",
          "https://www.youtube.com/embed/44vaXnSlSXI",
        ],
        references: [
          "http://ly.yishihui.net/14630.htm",
          "https://www.guoyi360.com/64gua49/xj/5677.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4189.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-49.html",
        ],
      };
    case "革九四":
      return {
        gua: "革",
        guaCi: "己日乃孚. 元亨利贞. 悔亡.",
        yao: "九四",
        yaoCi: "改命之吉, 信志也.",
        origin: "悔亡, 有孚, 改命, 吉.",
        meaning: "忧悔消除 行动时要有诚信 改朝换代 顺天应命 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/IicUkJcabq8",
          "https://www.youtube.com/embed/Z6d_XFOwyyI",
          "https://www.youtube.com/embed/q9eywV9Chu4",
          "https://www.youtube.com/embed/RhUnMlGhdzc",
          "https://www.youtube.com/embed/lCy9r0vg5Xg",
          "https://www.youtube.com/embed/Bg9FAhgkAsQ",
          "https://www.youtube.com/embed/C_GhcwGpaRE",
          "https://www.youtube.com/embed/44vaXnSlSXI",
        ],
        references: [
          "http://ly.yishihui.net/14632.htm",
          "https://www.guoyi360.com/64gua49/xj/5678.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4189.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-49.html",
        ],
      };
    case "革九五":
      return {
        gua: "革",
        guaCi: "己日乃孚. 元亨利贞. 悔亡.",
        yao: "九五",
        yaoCi: "大人虎变, 其文炳也.",
        origin: "大人虎变, 未占有孚.",
        meaning:
          "有才能的人变革时气势会像老虎一样威猛 不必占卜 也能有光大诚信的美德",
        videoUrls: [
          "https://www.youtube.com/embed/IicUkJcabq8",
          "https://www.youtube.com/embed/Z6d_XFOwyyI",
          "https://www.youtube.com/embed/q9eywV9Chu4",
          "https://www.youtube.com/embed/RhUnMlGhdzc",
          "https://www.youtube.com/embed/lCy9r0vg5Xg",
          "https://www.youtube.com/embed/Bg9FAhgkAsQ",
          "https://www.youtube.com/embed/C_GhcwGpaRE",
          "https://www.youtube.com/embed/44vaXnSlSXI",
        ],
        references: [
          "http://ly.yishihui.net/14634.htm",
          "https://www.guoyi360.com/64gua49/xj/5679.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4189.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-49.html",
        ],
      };
    case "革上六":
      return {
        gua: "革",
        guaCi: "己日乃孚. 元亨利贞. 悔亡.",
        yao: "上六",
        yaoCi: "君子豹变, 其文蔚也. 小人革面, 顺以从君也.",
        origin: "君子豹变, 小人革面. 征凶, 居贞吉.",
        meaning:
          "有才能的人变革时行动会像豹子一样迅速 小人改变往日的面目 出兵讨伐会有凶险 居家守中 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/IicUkJcabq8",
          "https://www.youtube.com/embed/Z6d_XFOwyyI",
          "https://www.youtube.com/embed/q9eywV9Chu4",
          "https://www.youtube.com/embed/RhUnMlGhdzc",
          "https://www.youtube.com/embed/lCy9r0vg5Xg",
          "https://www.youtube.com/embed/Bg9FAhgkAsQ",
          "https://www.youtube.com/embed/C_GhcwGpaRE",
          "https://www.youtube.com/embed/44vaXnSlSXI",
        ],
        references: [
          "http://ly.yishihui.net/14636.htm",
          "https://www.guoyi360.com/64gua49/xj/5680.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4189.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-49.html",
        ],
      };
    case "鼎初六":
      return {
        gua: "鼎",
        guaCi: "元吉, 亨.",
        yao: "初六",
        yaoCi: "鼎颠趾, 未悖也. 利出否, 以从贵也.",
        origin: "鼎颠趾, 利出否. 得妾以其子, 无咎.",
        meaning:
          "大鼎翻倒 其足向上 适宜倒掉无用之物 就如同妻妾生子 其妾因子而被扶作正室 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/E83Hjgi0li0",
          "https://www.youtube.com/embed/uR5pUFhzVoA",
          "https://www.youtube.com/embed/HdR_OqehySY",
          "https://www.youtube.com/embed/rZwU0riv0rY",
          "https://www.youtube.com/embed/UWUOv1JoL6s",
          "https://www.youtube.com/embed/pRkM_GV5AQY",
          "https://www.youtube.com/embed/NnLiLrUBcZQ",
          "https://www.youtube.com/embed/4VBM77NGplg",
          "https://www.youtube.com/embed/rSsjMfDr8i4",
        ],
        references: [
          "http://ly.yishihui.net/14548.htm",
          "https://www.guoyi360.com/64gua50/xj/5713.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4190.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-50.html",
        ],
      };
    case "鼎九二":
      return {
        gua: "鼎",
        guaCi: "元吉, 亨.",
        yao: "九二",
        yaoCi: "鼎有实, 慎所之也. 我仇有疾, 终无尤也.",
        origin: "鼎有实, 我仇有疾, 不我能即, 吉.",
        meaning: "鼎中盛满食物 我的对手患了疾病 所以不能靠近我 可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/E83Hjgi0li0",
          "https://www.youtube.com/embed/uR5pUFhzVoA",
          "https://www.youtube.com/embed/HdR_OqehySY",
          "https://www.youtube.com/embed/rZwU0riv0rY",
          "https://www.youtube.com/embed/UWUOv1JoL6s",
          "https://www.youtube.com/embed/pRkM_GV5AQY",
          "https://www.youtube.com/embed/NnLiLrUBcZQ",
          "https://www.youtube.com/embed/4VBM77NGplg",
          "https://www.youtube.com/embed/rSsjMfDr8i4",
        ],
        references: [
          "http://ly.yishihui.net/14550.htm",
          "https://www.guoyi360.com/64gua50/xj/5714.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4190.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-50.html",
        ],
      };
    case "鼎九三":
      return {
        gua: "鼎",
        guaCi: "元吉, 亨.",
        yao: "九三",
        yaoCi: "鼎耳革, 失其义也.",
        origin: "鼎耳革, 其行塞, 雉膏不食. 方雨, 亏悔, 终吉.",
        meaning:
          "鼎的耳朵被破坏了 无法被移动 鼎里的山鸡汤也喝不成了 待到阴阳调和 润雨出现才能消除悔恨 最终可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/E83Hjgi0li0",
          "https://www.youtube.com/embed/uR5pUFhzVoA",
          "https://www.youtube.com/embed/HdR_OqehySY",
          "https://www.youtube.com/embed/rZwU0riv0rY",
          "https://www.youtube.com/embed/UWUOv1JoL6s",
          "https://www.youtube.com/embed/pRkM_GV5AQY",
          "https://www.youtube.com/embed/NnLiLrUBcZQ",
          "https://www.youtube.com/embed/4VBM77NGplg",
          "https://www.youtube.com/embed/rSsjMfDr8i4",
        ],
        references: [
          "http://ly.yishihui.net/14552.htm",
          "https://www.guoyi360.com/64gua50/xj/5715.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4190.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-50.html",
        ],
      };
    case "鼎九四":
      return {
        gua: "鼎",
        guaCi: "元吉, 亨.",
        yao: "九四",
        yaoCi: "覆公餗, 信如何也?",
        origin: "鼎折足, 覆公餗, 其形渥, 凶.",
        meaning:
          "大鼎那堪重负导致鼎足断折 王公的美食都被倾倒出来 鼎身沾满污物 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/E83Hjgi0li0",
          "https://www.youtube.com/embed/uR5pUFhzVoA",
          "https://www.youtube.com/embed/HdR_OqehySY",
          "https://www.youtube.com/embed/rZwU0riv0rY",
          "https://www.youtube.com/embed/UWUOv1JoL6s",
          "https://www.youtube.com/embed/pRkM_GV5AQY",
          "https://www.youtube.com/embed/NnLiLrUBcZQ",
          "https://www.youtube.com/embed/4VBM77NGplg",
          "https://www.youtube.com/embed/rSsjMfDr8i4",
        ],
        references: [
          "http://ly.yishihui.net/14554.htm",
          "https://www.guoyi360.com/64gua50/xj/5716.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4190.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-50.html",
        ],
      };
    case "鼎六五":
      return {
        gua: "鼎",
        guaCi: "元吉, 亨.",
        yao: "六五",
        yaoCi: "鼎黄耳, 中以为实也.",
        origin: "鼎黄耳金铉, 利贞.",
        meaning: "大鼎配备上黄色的耳饰 鼎耳配备上铜制的吊环 有利于正固",
        videoUrls: [
          "https://www.youtube.com/embed/E83Hjgi0li0",
          "https://www.youtube.com/embed/uR5pUFhzVoA",
          "https://www.youtube.com/embed/HdR_OqehySY",
          "https://www.youtube.com/embed/rZwU0riv0rY",
          "https://www.youtube.com/embed/UWUOv1JoL6s",
          "https://www.youtube.com/embed/pRkM_GV5AQY",
          "https://www.youtube.com/embed/NnLiLrUBcZQ",
          "https://www.youtube.com/embed/4VBM77NGplg",
          "https://www.youtube.com/embed/rSsjMfDr8i4",
        ],
        references: [
          "http://ly.yishihui.net/14556.htm",
          "https://www.guoyi360.com/64gua50/xj/5717.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4190.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-50.html",
        ],
      };
    case "鼎上九":
      return {
        gua: "鼎",
        guaCi: "元吉, 亨.",
        yao: "上九",
        yaoCi: "玉铉在上, 刚柔节也.",
        origin: "鼎玉铉, 大吉, 无不利.",
        meaning: "鼎耳配有玉制的吊环 大为吉利 无所不利",
        videoUrls: [
          "https://www.youtube.com/embed/E83Hjgi0li0",
          "https://www.youtube.com/embed/uR5pUFhzVoA",
          "https://www.youtube.com/embed/HdR_OqehySY",
          "https://www.youtube.com/embed/rZwU0riv0rY",
          "https://www.youtube.com/embed/UWUOv1JoL6s",
          "https://www.youtube.com/embed/pRkM_GV5AQY",
          "https://www.youtube.com/embed/NnLiLrUBcZQ",
          "https://www.youtube.com/embed/4VBM77NGplg",
          "https://www.youtube.com/embed/rSsjMfDr8i4",
        ],
        references: [
          "http://ly.yishihui.net/14558.htm",
          "https://www.guoyi360.com/64gua50/xj/5718.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4190.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-50.html",
        ],
      };
    case "震初九":
      return {
        gua: "震",
        guaCi: "亨. 震来虩虩, 笑言哑哑. 震惊百里, 不丧匕鬯.",
        yao: "初九",
        yaoCi: "震来虩虩, 恐致福也. 笑言哑哑, 后有则也.",
        origin: "震来虩虩, 后笑言哑哑, 吉.",
        meaning: "雷霆极响 震的万物惊惶恐惧 虽有有谈笑风生 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/msxEc57-I2",
          "https://www.youtube.com/embed/CBkkPeEZSeo",
          "https://www.youtube.com/embed/LQ51uxa2y84",
          "https://www.youtube.com/embed/f25WGNKpDZI",
          "https://www.youtube.com/embed/XuETl73SqMg",
          "https://www.youtube.com/embed/LPg44AROfMY",
          "https://www.youtube.com/embed/t-7CUeyo6-8",
          "https://www.youtube.com/embed/z-Lo5rIV5do",
        ],
        references: [
          "http://ly.yishihui.net/14560.htm",
          "https://www.guoyi360.com/64gua51/xj/5721.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4192.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-51.html",
        ],
      };
    case "震六二":
      return {
        gua: "震",
        guaCi: "亨. 震来虩虩, 笑言哑哑. 震惊百里, 不丧匕鬯.",
        yao: "六二",
        yaoCi: "震来厉, 乘刚也.",
        origin: "震来厉, 亿丧贝. 跻于九陵, 勿逐, 七日得.",
        meaning:
          "雷霆极响待来危险 丢失钱财 应该登上九重高陵 不要追逐 七天内会失而复得",
        videoUrls: [
          "https://www.youtube.com/embed/msxEc57-I2",
          "https://www.youtube.com/embed/CBkkPeEZSeo",
          "https://www.youtube.com/embed/LQ51uxa2y84",
          "https://www.youtube.com/embed/f25WGNKpDZI",
          "https://www.youtube.com/embed/XuETl73SqMg",
          "https://www.youtube.com/embed/LPg44AROfMY",
          "https://www.youtube.com/embed/t-7CUeyo6-8",
          "https://www.youtube.com/embed/z-Lo5rIV5do",
        ],
        references: [
          "http://ly.yishihui.net/14562.htm",
          "https://www.guoyi360.com/64gua51/xj/5722.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4192.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-51.html",
        ],
      };
    case "震六三":
      return {
        gua: "震",
        guaCi: "亨. 震来虩虩, 笑言哑哑. 震惊百里, 不丧匕鬯.",
        yao: "六三",
        yaoCi: "震苏苏, 位不当也.",
        origin: "震苏苏, 震行无眚.",
        meaning: "雷霆震动 惊惶不安 伴随着震动前行 无灾难",
        videoUrls: [
          "https://www.youtube.com/embed/msxEc57-I2",
          "https://www.youtube.com/embed/CBkkPeEZSeo",
          "https://www.youtube.com/embed/LQ51uxa2y84",
          "https://www.youtube.com/embed/f25WGNKpDZI",
          "https://www.youtube.com/embed/XuETl73SqMg",
          "https://www.youtube.com/embed/LPg44AROfMY",
          "https://www.youtube.com/embed/t-7CUeyo6-8",
          "https://www.youtube.com/embed/z-Lo5rIV5do",
        ],
        references: [
          "http://ly.yishihui.net/14564.htm",
          "https://www.guoyi360.com/64gua51/xj/5723.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4192.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-51.html",
        ],
      };
    case "震九四":
      return {
        gua: "震",
        guaCi: "亨. 震来虩虩, 笑言哑哑. 震惊百里, 不丧匕鬯.",
        yao: "九四",
        yaoCi: "震遂泥, 未光也.",
        origin: "震遂泥.",
        meaning: "雷霆震动 惊慌失措 落入泥中",
        videoUrls: [
          "https://www.youtube.com/embed/msxEc57-I2",
          "https://www.youtube.com/embed/CBkkPeEZSeo",
          "https://www.youtube.com/embed/LQ51uxa2y84",
          "https://www.youtube.com/embed/f25WGNKpDZI",
          "https://www.youtube.com/embed/XuETl73SqMg",
          "https://www.youtube.com/embed/LPg44AROfMY",
          "https://www.youtube.com/embed/t-7CUeyo6-8",
          "https://www.youtube.com/embed/z-Lo5rIV5do",
        ],
        references: [
          "http://ly.yishihui.net/14566.htm",
          "https://www.guoyi360.com/64gua51/xj/5724.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4192.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-51.html",
        ],
      };
    case "震六五":
      return {
        gua: "震",
        guaCi: "亨. 震来虩虩, 笑言哑哑. 震惊百里, 不丧匕鬯.",
        yao: "六五",
        yaoCi: "震往来厉, 危行也. 其事在中, 大无丧也.",
        origin: "震往来厉, 亿无丧, 有事.",
        meaning: "雷霆震动 上下往来都有危险 但无重大损失 会有事发生",
        videoUrls: [
          "https://www.youtube.com/embed/msxEc57-I2",
          "https://www.youtube.com/embed/CBkkPeEZSeo",
          "https://www.youtube.com/embed/LQ51uxa2y84",
          "https://www.youtube.com/embed/f25WGNKpDZI",
          "https://www.youtube.com/embed/XuETl73SqMg",
          "https://www.youtube.com/embed/LPg44AROfMY",
          "https://www.youtube.com/embed/t-7CUeyo6-8",
          "https://www.youtube.com/embed/z-Lo5rIV5do",
        ],
        references: [
          "http://ly.yishihui.net/14568.htm",
          "https://www.guoyi360.com/64gua51/xj/5725.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4192.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-51.html",
        ],
      };
    case "震上六":
      return {
        gua: "震",
        guaCi: "亨. 震来虩虩, 笑言哑哑. 震惊百里, 不丧匕鬯.",
        yao: "上六",
        yaoCi: "震索索, 未得中也. 虽凶无咎, 畏邻戒也.",
        origin: "震索索, 视矍矍, 征凶. 震不于其躬, 于其邻, 无咎. 婚媾有言.",
        meaning:
          "雷霆震动 瑟瑟发抖 六神无主 出门远行有凶险 震动不是来自于自身而是来自于旁边的人 无灾祸 婚配会有责怪之言",
        videoUrls: [
          "https://www.youtube.com/embed/msxEc57-I2",
          "https://www.youtube.com/embed/CBkkPeEZSeo",
          "https://www.youtube.com/embed/LQ51uxa2y84",
          "https://www.youtube.com/embed/f25WGNKpDZI",
          "https://www.youtube.com/embed/XuETl73SqMg",
          "https://www.youtube.com/embed/LPg44AROfMY",
          "https://www.youtube.com/embed/t-7CUeyo6-8",
          "https://www.youtube.com/embed/z-Lo5rIV5do",
        ],
        references: [
          "http://ly.yishihui.net/14570.htm",
          "https://www.guoyi360.com/64gua51/xj/5726.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4192.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-51.html",
        ],
      };
    case "艮初六":
      return {
        gua: "艮",
        guaCi: "艮其背, 不获其身, 行其庭, 不见其人, 无咎.",
        yao: "初六",
        yaoCi: "艮其趾, 未失正也.",
        origin: "艮其趾, 无咎. 利永贞.",
        meaning: "抑制脚趾使其难以起步 无灾祸 有利于占问长久之事",
        videoUrls: [
          "https://www.youtube.com/embed/6Tq3qdjdrX8",
          "https://www.youtube.com/embed/zpYCP1jr2PQ",
          "https://www.youtube.com/embed/aXx31LDjzqQ",
          "https://www.youtube.com/embed/U-VOyyP-n3w",
          "https://www.youtube.com/embed/Hwgl8kA-yAg",
          "https://www.youtube.com/embed/ZG8bNvqCOUc",
          "https://www.youtube.com/embed/YM0PpdPbfLQ",
          "https://www.youtube.com/embed/FSsiwsa3GWE",
        ],
        references: [
          "http://ly.yishihui.net/14572.htm",
          "https://www.guoyi360.com/64gua52/xj/5729.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4193.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-52.html",
        ],
      };
    case "艮六二":
      return {
        gua: "艮",
        guaCi: "艮其背, 不获其身, 行其庭, 不见其人, 无咎.",
        yao: "六二",
        yaoCi: "不拯其随, 未退听也.",
        origin: "艮其腓, 不拯其随, 其心不快.",
        meaning: "抑制小腿肚运动 既然无法拯救别人 只好随别人行动 心中不能舒畅",
        videoUrls: [
          "https://www.youtube.com/embed/6Tq3qdjdrX8",
          "https://www.youtube.com/embed/zpYCP1jr2PQ",
          "https://www.youtube.com/embed/aXx31LDjzqQ",
          "https://www.youtube.com/embed/U-VOyyP-n3w",
          "https://www.youtube.com/embed/Hwgl8kA-yAg",
          "https://www.youtube.com/embed/ZG8bNvqCOUc",
          "https://www.youtube.com/embed/YM0PpdPbfLQ",
          "https://www.youtube.com/embed/FSsiwsa3GWE",
        ],
        references: [
          "http://ly.yishihui.net/14574.htm",
          "https://www.guoyi360.com/64gua52/xj/5730.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4193.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-52.html",
        ],
      };
    case "艮九三":
      return {
        gua: "艮",
        guaCi: "艮其背, 不获其身, 行其庭, 不见其人, 无咎.",
        yao: "九三",
        yaoCi: "艮其限, 危薰心也.",
        origin: "艮其限, 列其夤, 厉薰心.",
        meaning:
          "抑制腰部运动 以至于撕裂了夹脊肉 凶险就像烈火烧灼 让人心急如焚",
        videoUrls: [
          "https://www.youtube.com/embed/6Tq3qdjdrX8",
          "https://www.youtube.com/embed/zpYCP1jr2PQ",
          "https://www.youtube.com/embed/aXx31LDjzqQ",
          "https://www.youtube.com/embed/U-VOyyP-n3w",
          "https://www.youtube.com/embed/Hwgl8kA-yAg",
          "https://www.youtube.com/embed/ZG8bNvqCOUc",
          "https://www.youtube.com/embed/YM0PpdPbfLQ",
          "https://www.youtube.com/embed/FSsiwsa3GWE",
        ],
        references: [
          "http://ly.yishihui.net/14576.htm",
          "https://www.guoyi360.com/64gua52/xj/5731.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4193.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-52.html",
        ],
      };
    case "艮六四":
      return {
        gua: "艮",
        guaCi: "艮其背, 不获其身, 行其庭, 不见其人, 无咎.",
        yao: "六四",
        yaoCi: "艮其身, 止诸躬也.",
        origin: "艮其身, 无咎.",
        meaning: "抑制身体上部运动 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/6Tq3qdjdrX8",
          "https://www.youtube.com/embed/zpYCP1jr2PQ",
          "https://www.youtube.com/embed/aXx31LDjzqQ",
          "https://www.youtube.com/embed/U-VOyyP-n3w",
          "https://www.youtube.com/embed/Hwgl8kA-yAg",
          "https://www.youtube.com/embed/ZG8bNvqCOUc",
          "https://www.youtube.com/embed/YM0PpdPbfLQ",
          "https://www.youtube.com/embed/FSsiwsa3GWE",
        ],
        references: [
          "http://ly.yishihui.net/14578.htm",
          "https://www.guoyi360.com/64gua52/xj/5732.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4193.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-52.html",
        ],
      };
    case "艮六五":
      return {
        gua: "艮",
        guaCi: "艮其背, 不获其身, 行其庭, 不见其人, 无咎.",
        yao: "六五",
        yaoCi: "艮其辅, 以中正也.",
        origin: "艮其辅, 言有序, 悔亡.",
        meaning: "抑制脸颊运动 使之说话有条理 忧悔消除",
        videoUrls: [
          "https://www.youtube.com/embed/6Tq3qdjdrX8",
          "https://www.youtube.com/embed/zpYCP1jr2PQ",
          "https://www.youtube.com/embed/aXx31LDjzqQ",
          "https://www.youtube.com/embed/U-VOyyP-n3w",
          "https://www.youtube.com/embed/Hwgl8kA-yAg",
          "https://www.youtube.com/embed/ZG8bNvqCOUc",
          "https://www.youtube.com/embed/YM0PpdPbfLQ",
          "https://www.youtube.com/embed/FSsiwsa3GWE",
        ],
        references: [
          "http://ly.yishihui.net/14580.htm",
          "https://www.guoyi360.com/64gua52/xj/5733.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4193.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-52.html",
        ],
      };
    case "艮上九":
      return {
        gua: "艮",
        guaCi: "艮其背, 不获其身, 行其庭, 不见其人, 无咎.",
        yao: "上九",
        yaoCi: "敦艮之吉, 以厚终也.",
        origin: "敦艮, 吉.",
        meaning: "敦厚的美德压制邪欲恶念 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/6Tq3qdjdrX8",
          "https://www.youtube.com/embed/zpYCP1jr2PQ",
          "https://www.youtube.com/embed/aXx31LDjzqQ",
          "https://www.youtube.com/embed/U-VOyyP-n3w",
          "https://www.youtube.com/embed/Hwgl8kA-yAg",
          "https://www.youtube.com/embed/ZG8bNvqCOUc",
          "https://www.youtube.com/embed/YM0PpdPbfLQ",
          "https://www.youtube.com/embed/FSsiwsa3GWE",
        ],
        references: [
          "http://ly.yishihui.net/14582.htm",
          "https://www.guoyi360.com/64gua52/xj/5734.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4193.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-52.html",
        ],
      };
    case "渐初六":
      return {
        gua: "渐",
        guaCi: "女归吉, 利贞.",
        yao: "初六",
        yaoCi: "小子之厉, 义无咎也.",
        origin: "鸿渐于干, 小子厉. 有言, 无咎.",
        meaning: "鸿雁飞行渐进到了河岸边 小雁有危险 被大雁叫住 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/dp_QYXmiDOk",
          "https://www.youtube.com/embed/xeUhofCVPNY",
          "https://www.youtube.com/embed/X0oLGWHNirY",
          "https://www.youtube.com/embed/aSxY_2TKkiY",
          "https://www.youtube.com/embed/4hhXg6b4KYQ",
          "https://www.youtube.com/embed/sbK0kTDlmsI",
          "https://www.youtube.com/embed/8Y_LD_3lAeI",
          "https://www.youtube.com/embed/RcR0AFFij4E",
        ],
        references: [
          "http://ly.yishihui.net/15224.htm",
          "https://www.guoyi360.com/64gua53/xj/5737.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4194.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-53.html",
        ],
      };
    case "渐六二":
      return {
        gua: "渐",
        guaCi: "女归吉, 利贞.",
        yao: "六二",
        yaoCi: "饮食衍衍, 不素饱也.",
        origin: "鸿渐于磐, 饮食衎衎, 吉.",
        meaning: "鸿雁飞行渐进到了磐石上 饮食和乐 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/dp_QYXmiDOk",
          "https://www.youtube.com/embed/xeUhofCVPNY",
          "https://www.youtube.com/embed/X0oLGWHNirY",
          "https://www.youtube.com/embed/aSxY_2TKkiY",
          "https://www.youtube.com/embed/4hhXg6b4KYQ",
          "https://www.youtube.com/embed/sbK0kTDlmsI",
          "https://www.youtube.com/embed/8Y_LD_3lAeI",
          "https://www.youtube.com/embed/RcR0AFFij4E",
        ],
        references: [
          "http://ly.yishihui.net/15226.htm",
          "https://www.guoyi360.com/64gua53/xj/5738.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4194.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-53.html",
        ],
      };
    case "渐九三":
      return {
        gua: "渐",
        guaCi: "女归吉, 利贞.",
        yao: "九三",
        yaoCi: "夫征不复, 离群丑也. 妇孕不育, 失其道也. 利用御寇, 顺相保也.",
        origin: "鸿渐于陆, 夫征不复, 妇孕不育, 凶. 利御寇.",
        meaning:
          "鸿雁飞行渐进到了小山顶上 丈夫征战未归 妻子怀孕流产 凶险之兆 但有利于抗击盗寇",
        videoUrls: [
          "https://www.youtube.com/embed/dp_QYXmiDOk",
          "https://www.youtube.com/embed/xeUhofCVPNY",
          "https://www.youtube.com/embed/X0oLGWHNirY",
          "https://www.youtube.com/embed/aSxY_2TKkiY",
          "https://www.youtube.com/embed/4hhXg6b4KYQ",
          "https://www.youtube.com/embed/sbK0kTDlmsI",
          "https://www.youtube.com/embed/8Y_LD_3lAeI",
          "https://www.youtube.com/embed/RcR0AFFij4E",
        ],
        references: [
          "http://ly.yishihui.net/15228.htm",
          "https://www.guoyi360.com/64gua53/xj/5739.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4194.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-53.html",
        ],
      };
    case "渐六四":
      return {
        gua: "渐",
        guaCi: "女归吉, 利贞.",
        yao: "六四",
        yaoCi: "或得其桷, 顺以巽也.",
        origin: "鸿渐于木, 或得其桷, 无咎.",
        meaning: "鸿雁飞行渐进到了大树上 有的落到树枝上 没灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/dp_QYXmiDOk",
          "https://www.youtube.com/embed/xeUhofCVPNY",
          "https://www.youtube.com/embed/X0oLGWHNirY",
          "https://www.youtube.com/embed/aSxY_2TKkiY",
          "https://www.youtube.com/embed/4hhXg6b4KYQ",
          "https://www.youtube.com/embed/sbK0kTDlmsI",
          "https://www.youtube.com/embed/8Y_LD_3lAeI",
          "https://www.youtube.com/embed/RcR0AFFij4E",
        ],
        references: [
          "http://ly.yishihui.net/15230.htm",
          "https://www.guoyi360.com/64gua53/xj/5740.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4194.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-53.html",
        ],
      };
    case "渐九五":
      return {
        gua: "渐",
        guaCi: "女归吉, 利贞.",
        yao: "九五",
        yaoCi: "终莫之胜, 吉, 得所愿也.",
        origin: "鸿渐于陵, 妇三岁不孕, 终莫之胜, 吉.",
        meaning:
          "鸿雁飞行渐进到了山丘上 妇女三年不能怀孕 但邪不压正 最终可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/dp_QYXmiDOk",
          "https://www.youtube.com/embed/xeUhofCVPNY",
          "https://www.youtube.com/embed/X0oLGWHNirY",
          "https://www.youtube.com/embed/aSxY_2TKkiY",
          "https://www.youtube.com/embed/4hhXg6b4KYQ",
          "https://www.youtube.com/embed/sbK0kTDlmsI",
          "https://www.youtube.com/embed/8Y_LD_3lAeI",
          "https://www.youtube.com/embed/RcR0AFFij4E",
        ],
        references: [
          "http://ly.yishihui.net/15230.htm",
          "https://www.guoyi360.com/64gua53/xj/5741.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4194.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-53.html",
        ],
      };
    case "渐上九":
      return {
        gua: "渐",
        guaCi: "女归吉, 利贞.",
        yao: "上九",
        yaoCi: "其羽可用为仪吉, 不可乱也.",
        origin: "鸿渐于陆, 其羽可用为仪, 吉.",
        meaning:
          "鸿雁飞行渐进到了小山顶上 羽毛美丽到可以用来做仪式的上用的装饰 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/dp_QYXmiDOk",
          "https://www.youtube.com/embed/xeUhofCVPNY",
          "https://www.youtube.com/embed/X0oLGWHNirY",
          "https://www.youtube.com/embed/aSxY_2TKkiY",
          "https://www.youtube.com/embed/4hhXg6b4KYQ",
          "https://www.youtube.com/embed/sbK0kTDlmsI",
          "https://www.youtube.com/embed/8Y_LD_3lAeI",
          "https://www.youtube.com/embed/RcR0AFFij4E",
        ],
        references: [
          "http://ly.yishihui.net/15234.htm",
          "https://www.guoyi360.com/64gua53/xj/5742.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4194.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-53.html",
        ],
      };
    case "归妹初九":
      return {
        gua: "归妹",
        guaCi: "征凶, 无攸利.",
        yao: "初九",
        yaoCi: "归妹以娣, 以恒也. 跛能履, 吉相承也.",
        origin: "归妹以娣, 跛能履, 征吉.",
        meaning:
          "少女出嫁 妹妹作为从嫁做偏房 就像跛脚的人奋力前行 出门远行可获吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/yVu6ucdn4CY",
          "https://www.youtube.com/embed/cdq6ywHZyeM",
          "https://www.youtube.com/embed/MxG23MhxKzM",
          "https://www.youtube.com/embed/TRCwa6wprCA",
          "https://www.youtube.com/embed/eO3hPbN0_YM",
          "https://www.youtube.com/embed/KS7wpVNVZZk",
          "https://www.youtube.com/embed/JBiEcnqgBtg",
          "https://www.youtube.com/embed/6B-XRtXEk2Y",
        ],
        references: [
          "http://ly.yishihui.net/14869.htm",
          "https://www.guoyi360.com/64gua54/xj/5754.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4195.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-54.html",
        ],
      };
    case "归妹九二":
      return {
        gua: "归妹",
        guaCi: "征凶, 无攸利.",
        yao: "九二",
        yaoCi: "利幽人之贞, 未变常也.",
        origin: "眇能视, 利幽人之贞.",
        meaning: "视力不好的人勉强凝视 有利于安恬隐居之人占问",
        videoUrls: [
          "https://www.youtube.com/embed/yVu6ucdn4CY",
          "https://www.youtube.com/embed/cdq6ywHZyeM",
          "https://www.youtube.com/embed/MxG23MhxKzM",
          "https://www.youtube.com/embed/TRCwa6wprCA",
          "https://www.youtube.com/embed/eO3hPbN0_YM",
          "https://www.youtube.com/embed/KS7wpVNVZZk",
          "https://www.youtube.com/embed/JBiEcnqgBtg",
          "https://www.youtube.com/embed/6B-XRtXEk2Y",
        ],
        references: [
          "http://ly.yishihui.net/14871.htm",
          "https://www.guoyi360.com/64gua54/xj/5768.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4195.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-54.html",
        ],
      };
    case "归妹六三":
      return {
        gua: "归妹",
        guaCi: "征凶, 无攸利.",
        yao: "六三",
        yaoCi: "归妹以须, 未当也.",
        origin: "归妹以须, 反归以娣.",
        meaning:
          "少女出嫁 姐姐作为从嫁做偏房 被遣回娘家 又以妹妹的身份从嫁做偏房",
        videoUrls: [
          "https://www.youtube.com/embed/yVu6ucdn4CY",
          "https://www.youtube.com/embed/cdq6ywHZyeM",
          "https://www.youtube.com/embed/MxG23MhxKzM",
          "https://www.youtube.com/embed/TRCwa6wprCA",
          "https://www.youtube.com/embed/eO3hPbN0_YM",
          "https://www.youtube.com/embed/KS7wpVNVZZk",
          "https://www.youtube.com/embed/JBiEcnqgBtg",
          "https://www.youtube.com/embed/6B-XRtXEk2Y",
        ],
        references: [
          "http://ly.yishihui.net/14873.htm",
          "https://www.guoyi360.com/64gua54/xj/5769.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4195.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-54.html",
        ],
      };
    case "归妹九四":
      return {
        gua: "归妹",
        guaCi: "征凶, 无攸利.",
        yao: "九四",
        yaoCi: "愆期之志, 有待而行也.",
        origin: "归妹愆期, 迟归有时.",
        meaning: "少女出嫁多次延期 迟迟未嫁 为的是等待时机出嫁",
        videoUrls: [
          "https://www.youtube.com/embed/yVu6ucdn4CY",
          "https://www.youtube.com/embed/cdq6ywHZyeM",
          "https://www.youtube.com/embed/MxG23MhxKzM",
          "https://www.youtube.com/embed/TRCwa6wprCA",
          "https://www.youtube.com/embed/eO3hPbN0_YM",
          "https://www.youtube.com/embed/KS7wpVNVZZk",
          "https://www.youtube.com/embed/JBiEcnqgBtg",
          "https://www.youtube.com/embed/6B-XRtXEk2Y",
        ],
        references: [
          "http://ly.yishihui.net/14875.htm",
          "https://www.guoyi360.com/64gua54/xj/5770.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4195.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-54.html",
        ],
      };
    case "归妹六五":
      return {
        gua: "归妹",
        guaCi: "征凶, 无攸利.",
        yao: "六五",
        yaoCi: "帝乙归妹, 不如其娣之袂良也. 其位在中, 以贵行也.",
        origin: "帝乙归妹, 其君之袂, 不如其娣之袂良. 月几望, 吉.",
        meaning:
          "帝乙嫁女 正室的服装反而不如陪嫁妹妹的服装华丽 成亲之日定在既望之日 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/yVu6ucdn4CY",
          "https://www.youtube.com/embed/cdq6ywHZyeM",
          "https://www.youtube.com/embed/MxG23MhxKzM",
          "https://www.youtube.com/embed/TRCwa6wprCA",
          "https://www.youtube.com/embed/eO3hPbN0_YM",
          "https://www.youtube.com/embed/KS7wpVNVZZk",
          "https://www.youtube.com/embed/JBiEcnqgBtg",
          "https://www.youtube.com/embed/6B-XRtXEk2Y",
        ],
        references: [
          "http://ly.yishihui.net/14877.htm",
          "https://www.guoyi360.com/64gua54/xj/5771.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4195.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-54.html",
        ],
      };
    case "归妹上六":
      return {
        gua: "归妹",
        guaCi: "征凶, 无攸利.",
        yao: "上六",
        yaoCi: "上六无实, 承虚筐也.",
        origin: "女承筐无实, 士刲羊无血, 无攸利.",
        meaning: "新娘提着空篮子里面没有果实 新郎杀羊却未见羊血 无益处",
        videoUrls: [
          "https://www.youtube.com/embed/yVu6ucdn4CY",
          "https://www.youtube.com/embed/cdq6ywHZyeM",
          "https://www.youtube.com/embed/MxG23MhxKzM",
          "https://www.youtube.com/embed/TRCwa6wprCA",
          "https://www.youtube.com/embed/eO3hPbN0_YM",
          "https://www.youtube.com/embed/KS7wpVNVZZk",
          "https://www.youtube.com/embed/JBiEcnqgBtg",
          "https://www.youtube.com/embed/6B-XRtXEk2Y",
        ],
        references: [
          "http://ly.yishihui.net/14879.htm",
          "https://www.guoyi360.com/64gua54/xj/5772.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4195.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-54.html",
        ],
      };
    case "丰初九":
      return {
        gua: "丰",
        guaCi: "亨. 王假之, 勿忧, 宜日中.",
        yao: "初九",
        yaoCi: "虽旬无咎, 过旬灾也.",
        origin: "遇其配主, 虽旬无咎, 往有尚.",
        meaning: "遇到与自己匹配的人 十日内无灾祸 前往会得到尊重",
        videoUrls: [
          "https://www.youtube.com/embed/dQvW4bxWbAQ",
          "https://www.youtube.com/embed/Jnfq0of6v14",
          "https://www.youtube.com/embed/GKKj99OrqJA",
          "https://www.youtube.com/embed/XkY_BPhqnug",
          "https://www.youtube.com/embed/mEoAL0aL08Y",
          "https://www.youtube.com/embed/tfRcIZPJhvw",
          "https://www.youtube.com/embed/keYsZ5MuUMQ",
          "https://www.youtube.com/embed/8tE0ulPtmxg",
          "https://www.youtube.com/embed/Zblfehl39EA",
          "https://www.youtube.com/embed/YRK8bxEXd9Y",
        ],
        references: [
          "https://www.guoyi360.com/64gua55/xj/5802.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4196.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-55.html",
        ],
      };
    case "丰六二":
      return {
        gua: "丰",
        guaCi: "亨. 王假之, 勿忧, 宜日中.",
        yao: "六二",
        yaoCi: "有孚发若, 信以发志也.",
        origin: "丰其蔀, 日中见斗. 往得疑疾. 有孚发若, 吉.",
        meaning:
          "草棚遮蔽很大 中午出现满天星斗 有所举动会受人猜忌 心怀诚信悔消除疑虑 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/dQvW4bxWbAQ",
          "https://www.youtube.com/embed/Jnfq0of6v14",
          "https://www.youtube.com/embed/GKKj99OrqJA",
          "https://www.youtube.com/embed/XkY_BPhqnug",
          "https://www.youtube.com/embed/mEoAL0aL08Y",
          "https://www.youtube.com/embed/tfRcIZPJhvw",
          "https://www.youtube.com/embed/keYsZ5MuUMQ",
          "https://www.youtube.com/embed/8tE0ulPtmxg",
          "https://www.youtube.com/embed/Zblfehl39EA",
          "https://www.youtube.com/embed/YRK8bxEXd9Y",
        ],
        references: [
          "http://ly.yishihui.net/14884.htm",
          "https://www.guoyi360.com/64gua55/xj/5803.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4196.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-55.html",
        ],
      };
    case "丰九三":
      return {
        gua: "丰",
        guaCi: "亨. 王假之, 勿忧, 宜日中.",
        yao: "九三",
        yaoCi: "丰其沛, 不可大事也. 折其右肱, 终不可用也.",
        origin: "丰其沛, 日中见沫. 折其右肱, 无咎.",
        meaning: "丰厚遮掩了光明的幔帐 中午一片昏暗 此时折断了右臂 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/dQvW4bxWbAQ",
          "https://www.youtube.com/embed/Jnfq0of6v14",
          "https://www.youtube.com/embed/GKKj99OrqJA",
          "https://www.youtube.com/embed/XkY_BPhqnug",
          "https://www.youtube.com/embed/mEoAL0aL08Y",
          "https://www.youtube.com/embed/tfRcIZPJhvw",
          "https://www.youtube.com/embed/keYsZ5MuUMQ",
          "https://www.youtube.com/embed/8tE0ulPtmxg",
          "https://www.youtube.com/embed/Zblfehl39EA",
          "https://www.youtube.com/embed/YRK8bxEXd9Y",
        ],
        references: [
          "http://ly.yishihui.net/14886.htm",
          "https://www.guoyi360.com/64gua55/xj/5804.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4196.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-55.html",
        ],
      };
    case "丰九四":
      return {
        gua: "丰",
        guaCi: "亨. 王假之, 勿忧, 宜日中.",
        yao: "九四",
        yaoCi: "丰其蔀, 位不当也. 日中见斗, 幽不明也. 遇其夷主, 吉行也.",
        origin: "丰其蔀, 日中见斗. 遇其夷主, 吉.",
        meaning: "草棚遮蔽很大 中午出现满天星斗 阴暗不明朗 遇到外邦的主人 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/dQvW4bxWbAQ",
          "https://www.youtube.com/embed/Jnfq0of6v14",
          "https://www.youtube.com/embed/GKKj99OrqJA",
          "https://www.youtube.com/embed/XkY_BPhqnug",
          "https://www.youtube.com/embed/mEoAL0aL08Y",
          "https://www.youtube.com/embed/tfRcIZPJhvw",
          "https://www.youtube.com/embed/keYsZ5MuUMQ",
          "https://www.youtube.com/embed/8tE0ulPtmxg",
          "https://www.youtube.com/embed/Zblfehl39EA",
          "https://www.youtube.com/embed/YRK8bxEXd9Y",
        ],
        references: [
          "http://ly.yishihui.net/14888.htm",
          "https://www.guoyi360.com/64gua55/xj/5805.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4196.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-55.html",
        ],
      };
    case "丰六五":
      return {
        gua: "丰",
        guaCi: "亨. 王假之, 勿忧, 宜日中.",
        yao: "六五",
        yaoCi: "六五之吉, 有庆也.",
        origin: "来章, 有庆誉, 吉.",
        meaning: "迎接光明 会带来喜庆与赞誉 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/dQvW4bxWbAQ",
          "https://www.youtube.com/embed/Jnfq0of6v14",
          "https://www.youtube.com/embed/GKKj99OrqJA",
          "https://www.youtube.com/embed/XkY_BPhqnug",
          "https://www.youtube.com/embed/mEoAL0aL08Y",
          "https://www.youtube.com/embed/tfRcIZPJhvw",
          "https://www.youtube.com/embed/keYsZ5MuUMQ",
          "https://www.youtube.com/embed/8tE0ulPtmxg",
          "https://www.youtube.com/embed/Zblfehl39EA",
          "https://www.youtube.com/embed/YRK8bxEXd9Y",
        ],
        references: [
          "http://ly.yishihui.net/14890.htm",
          "https://www.guoyi360.com/64gua55/xj/5806.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4196.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-55.html",
        ],
      };
    case "丰上六":
      return {
        gua: "丰",
        guaCi: "亨. 王假之, 勿忧, 宜日中.",
        yao: "上六",
        yaoCi: "丰其屋, 天际翔也. 窥其户, 阒其无人, 自藏也.",
        origin: "丰其屋, 蔀其家, 窥其户, 阒其无人, 三岁不觌, 凶.",
        meaning:
          "房屋高大 遮蔽了其他人家 从门缝里往里面看 里面空无一人 三年不见有人 凶险",
        videoUrls: [
          "https://www.youtube.com/embed/dQvW4bxWbAQ",
          "https://www.youtube.com/embed/Jnfq0of6v14",
          "https://www.youtube.com/embed/GKKj99OrqJA",
          "https://www.youtube.com/embed/XkY_BPhqnug",
          "https://www.youtube.com/embed/mEoAL0aL08Y",
          "https://www.youtube.com/embed/tfRcIZPJhvw",
          "https://www.youtube.com/embed/keYsZ5MuUMQ",
          "https://www.youtube.com/embed/8tE0ulPtmxg",
          "https://www.youtube.com/embed/Zblfehl39EA",
          "https://www.youtube.com/embed/YRK8bxEXd9Y",
        ],
        references: [
          "http://ly.yishihui.net/14892.htm",
          "https://www.guoyi360.com/64gua55/xj/5807.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4196.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-55.html",
        ],
      };
    case "旅初六":
      return {
        gua: "旅",
        guaCi: "小亨, 旅贞吉.",
        yao: "初六",
        yaoCi: "旅琐琐, 志穷灾也.",
        origin: "旅琐琐, 斯其所取灾.",
        meaning: "外出旅行猥猥琐琐 举止多变 会招致灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/lamIrtRAYEY",
          "https://www.youtube.com/embed/UcXphCw_I3M",
          "https://www.youtube.com/embed/cbE-17ZT-A8",
          "https://www.youtube.com/embed/0ULzivPXoHw",
          "https://www.youtube.com/embed/H_vmucfDGkQ",
          "https://www.youtube.com/embed/2u1tBjrvRe8",
          "https://www.youtube.com/embed/OkXmBnxbZSY",
          "https://www.youtube.com/embed/YI3t4e7ZOXw",
        ],
        references: [
          "http://ly.yishihui.net/14746.htm",
          "https://www.guoyi360.com/64gua56/xj/5815.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4197.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-56.html",
        ],
      };
    case "旅六二":
      return {
        gua: "旅",
        guaCi: "小亨, 旅贞吉.",
        yao: "六二",
        yaoCi: "得童仆贞, 终无尤也.",
        origin: "旅即次, 怀其资, 得童仆, 贞.",
        meaning: "旅行的人入住客店 怀里揣着钱财 得到僮仆 可以正固",
        videoUrls: [
          "https://www.youtube.com/embed/lamIrtRAYEY",
          "https://www.youtube.com/embed/UcXphCw_I3M",
          "https://www.youtube.com/embed/cbE-17ZT-A8",
          "https://www.youtube.com/embed/0ULzivPXoHw",
          "https://www.youtube.com/embed/H_vmucfDGkQ",
          "https://www.youtube.com/embed/2u1tBjrvRe8",
          "https://www.youtube.com/embed/OkXmBnxbZSY",
          "https://www.youtube.com/embed/YI3t4e7ZOXw",
        ],
        references: [
          "http://ly.yishihui.net/14748.htm",
          "https://www.guoyi360.com/64gua56/xj/5816.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4197.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-56.html",
        ],
      };
    case "旅九三":
      return {
        gua: "旅",
        guaCi: "小亨, 旅贞吉.",
        yao: "九三",
        yaoCi: "旅焚其次, 亦以伤矣. 以旅与下, 其义丧也.",
        origin: "旅焚其次, 丧其童仆, 贞厉.",
        meaning: "客店失了大火 童仆也跑了 即使正固也有危险",
        videoUrls: [
          "https://www.youtube.com/embed/lamIrtRAYEY",
          "https://www.youtube.com/embed/UcXphCw_I3M",
          "https://www.youtube.com/embed/cbE-17ZT-A8",
          "https://www.youtube.com/embed/0ULzivPXoHw",
          "https://www.youtube.com/embed/H_vmucfDGkQ",
          "https://www.youtube.com/embed/2u1tBjrvRe8",
          "https://www.youtube.com/embed/OkXmBnxbZSY",
          "https://www.youtube.com/embed/YI3t4e7ZOXw",
        ],
        references: [
          "http://ly.yishihui.net/14750.htm",
          "https://www.guoyi360.com/64gua56/xj/5817.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4197.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-56.html",
        ],
      };
    case "旅九四":
      return {
        gua: "旅",
        guaCi: "小亨, 旅贞吉.",
        yao: "九四",
        yaoCi: "旅于处, 未得位也. 得其资斧, 心未快也.",
        origin: "旅于处, 得其资斧, 我心不快.",
        meaning: "旅行遭遇阻碍 尽管得到了一些钱财 但心中依然不愉快",
        videoUrls: [
          "https://www.youtube.com/embed/lamIrtRAYEY",
          "https://www.youtube.com/embed/UcXphCw_I3M",
          "https://www.youtube.com/embed/cbE-17ZT-A8",
          "https://www.youtube.com/embed/0ULzivPXoHw",
          "https://www.youtube.com/embed/H_vmucfDGkQ",
          "https://www.youtube.com/embed/2u1tBjrvRe8",
          "https://www.youtube.com/embed/OkXmBnxbZSY",
          "https://www.youtube.com/embed/YI3t4e7ZOXw",
        ],
        references: [
          "http://ly.yishihui.net/14752.htm",
          "https://www.guoyi360.com/64gua56/xj/5818.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4197.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-56.html",
        ],
      };
    case "旅六五":
      return {
        gua: "旅",
        guaCi: "小亨, 旅贞吉.",
        yao: "六五",
        yaoCi: "终以誉命, 上逮也.",
        origin: "射雉一矢亡, 终以誉命.",
        meaning: "射杀野鸡 丢了一支箭矢 但到最后获得赞誉并受到封爵",
        videoUrls: [
          "https://www.youtube.com/embed/lamIrtRAYEY",
          "https://www.youtube.com/embed/UcXphCw_I3M",
          "https://www.youtube.com/embed/cbE-17ZT-A8",
          "https://www.youtube.com/embed/0ULzivPXoHw",
          "https://www.youtube.com/embed/H_vmucfDGkQ",
          "https://www.youtube.com/embed/2u1tBjrvRe8",
          "https://www.youtube.com/embed/OkXmBnxbZSY",
          "https://www.youtube.com/embed/YI3t4e7ZOXw",
        ],
        references: [
          "http://ly.yishihui.net/14754.htm",
          "https://www.guoyi360.com/64gua56/xj/5819.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4197.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-56.html",
        ],
      };
    case "旅上九":
      return {
        gua: "旅",
        guaCi: "小亨, 旅贞吉.",
        yao: "上九",
        yaoCi: "以旅在上, 其义焚也. 丧牛于易, 终莫之闻也.",
        origin: "鸟焚其巢, 旅人先笑后号咷. 丧牛于易, 凶.",
        meaning:
          "树上的鸟烧了自己的巢穴 旅行的人先笑后大哭 田边丢了牛 凶险之兆",
        videoUrls: [
          "https://www.youtube.com/embed/lamIrtRAYEY",
          "https://www.youtube.com/embed/UcXphCw_I3M",
          "https://www.youtube.com/embed/cbE-17ZT-A8",
          "https://www.youtube.com/embed/0ULzivPXoHw",
          "https://www.youtube.com/embed/H_vmucfDGkQ",
          "https://www.youtube.com/embed/2u1tBjrvRe8",
          "https://www.youtube.com/embed/OkXmBnxbZSY",
          "https://www.youtube.com/embed/YI3t4e7ZOXw",
        ],
        references: [
          "http://ly.yishihui.net/14756.htm",
          "https://www.guoyi360.com/64gua56/xj/5820.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4197.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-56.html",
        ],
      };
    case "巽初六":
      return {
        gua: "巽",
        guaCi: "小亨. 利有攸往, 利见大人.",
        yao: "初六",
        yaoCi: "进退, 志疑也. 利武人之贞, 志治也.",
        origin: "进退, 利武人之贞.",
        meaning: "进进退退 停滞不前 有利于勇敢的人占问",
        videoUrls: [
          "https://www.youtube.com/embed/SF2--MF7yls",
          "https://www.youtube.com/embed/BshLV0ghv7M",
          "https://www.youtube.com/embed/BlKFGi5PRT0",
          "https://www.youtube.com/embed/fG5nAgme5Yk",
          "https://www.youtube.com/embed/VbfZqz8e-bo",
          "https://www.youtube.com/embed/D7n2TO5SyUc",
          "https://www.youtube.com/embed/xIgYsbuAMVI",
          "https://www.youtube.com/embed/LgA3cvJmAq8",
        ],
        references: [
          "http://ly.yishihui.net/14758.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
        ],
      };
    case "巽九二":
      return {
        gua: "巽",
        guaCi: "小亨. 利有攸往, 利见大人.",
        yao: "九二",
        yaoCi: "纷若之吉, 得中也.",
        origin: "巽在床下, 用史巫纷若, 吉, 无咎.",
        meaning:
          "过分顺从而屈居床下 若过能效仿 巫师 勤勉忙碌的样子 吉祥 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/SF2--MF7yls",
          "https://www.youtube.com/embed/BshLV0ghv7M",
          "https://www.youtube.com/embed/BlKFGi5PRT0",
          "https://www.youtube.com/embed/fG5nAgme5Yk",
          "https://www.youtube.com/embed/VbfZqz8e-bo",
          "https://www.youtube.com/embed/D7n2TO5SyUc",
          "https://www.youtube.com/embed/xIgYsbuAMVI",
          "https://www.youtube.com/embed/LgA3cvJmAq8",
        ],
        references: [
          "http://ly.yishihui.net/14760.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
        ],
      };
    case "巽九三":
      return {
        gua: "巽",
        guaCi: "小亨. 利有攸往, 利见大人.",
        yao: "九三",
        yaoCi: "频巽之吝, 志穷也.",
        origin: "频巽, 吝.",
        meaning: "一而再再而三的顺从他人 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/SF2--MF7yls",
          "https://www.youtube.com/embed/BshLV0ghv7M",
          "https://www.youtube.com/embed/BlKFGi5PRT0",
          "https://www.youtube.com/embed/fG5nAgme5Yk",
          "https://www.youtube.com/embed/VbfZqz8e-bo",
          "https://www.youtube.com/embed/D7n2TO5SyUc",
          "https://www.youtube.com/embed/xIgYsbuAMVI",
          "https://www.youtube.com/embed/LgA3cvJmAq8",
        ],
        references: [
          "http://ly.yishihui.net/14762.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
        ],
      };
    case "巽六四":
      return {
        gua: "巽",
        guaCi: "小亨. 利有攸往, 利见大人.",
        yao: "六四",
        yaoCi: "田获三品, 有功也.",
        origin: "悔亡, 田获三品.",
        meaning: "忧悔消除 打猎时捕获了三头禽兽",
        videoUrls: [
          "https://www.youtube.com/embed/SF2--MF7yls",
          "https://www.youtube.com/embed/BshLV0ghv7M",
          "https://www.youtube.com/embed/BlKFGi5PRT0",
          "https://www.youtube.com/embed/fG5nAgme5Yk",
          "https://www.youtube.com/embed/VbfZqz8e-bo",
          "https://www.youtube.com/embed/D7n2TO5SyUc",
          "https://www.youtube.com/embed/xIgYsbuAMVI",
          "https://www.youtube.com/embed/LgA3cvJmAq8",
        ],
        references: [
          "http://ly.yishihui.net/14764.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
        ],
      };
    case "巽九五":
      return {
        gua: "巽",
        guaCi: "小亨. 利有攸往, 利见大人.",
        yao: "九五",
        yaoCi: "九五之吉, 位正中也.",
        origin: "贞吉, 悔亡, 无不利. 无初有终. 先庚三日, 后庚三日, 吉.",
        meaning:
          "正固吉祥 忧悔消除 无所不利 起初不顺利 但最后能畅通无阻 时间是 丁日 戊日 己日 和 辛日 壬日 癸日 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/SF2--MF7yls",
          "https://www.youtube.com/embed/BshLV0ghv7M",
          "https://www.youtube.com/embed/BlKFGi5PRT0",
          "https://www.youtube.com/embed/fG5nAgme5Yk",
          "https://www.youtube.com/embed/VbfZqz8e-bo",
          "https://www.youtube.com/embed/D7n2TO5SyUc",
          "https://www.youtube.com/embed/xIgYsbuAMVI",
          "https://www.youtube.com/embed/LgA3cvJmAq8",
        ],
        references: [
          "http://ly.yishihui.net/14766.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
        ],
      };
    case "巽上九":
      return {
        gua: "巽",
        guaCi: "小亨. 利有攸往, 利见大人.",
        yao: "上九",
        yaoCi: "巽在床下, 上穷也. 丧其资斧, 正乎凶也.",
        origin: "巽在床下, 丧其资斧, 贞凶.",
        meaning:
          "谦卑恭顺到了极点而屈于床下 丧失了赖以谋生的资本 丧失了刚硬的本性 结果是凶险的",
        videoUrls: [
          "https://www.youtube.com/embed/SF2--MF7yls",
          "https://www.youtube.com/embed/BshLV0ghv7M",
          "https://www.youtube.com/embed/BlKFGi5PRT0",
          "https://www.youtube.com/embed/fG5nAgme5Yk",
          "https://www.youtube.com/embed/VbfZqz8e-bo",
          "https://www.youtube.com/embed/D7n2TO5SyUc",
          "https://www.youtube.com/embed/xIgYsbuAMVI",
          "https://www.youtube.com/embed/LgA3cvJmAq8",
        ],
        references: [
          "http://ly.yishihui.net/14768.htm",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4198.html",
        ],
      };
    case "兑初九":
      return {
        gua: "兑",
        guaCi: "亨, 利贞.",
        yao: "初九",
        yaoCi: "和兑之吉, 行未疑也.",
        origin: "和兑, 吉.",
        meaning: "平和喜悦的待人态度 有利于正固",
        videoUrls: [
          "https://www.youtube.com/embed/QGSjxXkQ5Ws",
          "https://www.youtube.com/embed/MxGelscZEsA",
          "https://www.youtube.com/embed/zM6pXNLUlek",
          "https://www.youtube.com/embed/hxfpH2kewwY",
          "https://www.youtube.com/embed/VMStWNiu5XM",
          "https://www.youtube.com/embed/tNpr9ExFGpo",
          "https://www.youtube.com/embed/fq9eyDHvZ4M",
          "https://www.youtube.com/embed/WIRa536Tb10",
        ],
        references: [
          "http://ly.yishihui.net/14770.htm",
          "https://www.guoyi360.com/64gua58/xj/5961.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4200.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-58.html",
        ],
      };
    case "兑九二":
      return {
        gua: "兑",
        guaCi: "亨, 利贞.",
        yao: "九二",
        yaoCi: "孚兑之吉, 信志也.",
        origin: "孚兑, 吉, 悔亡.",
        meaning: "心怀诚信的待人态度 吉祥 忧悔消除",
        videoUrls: [
          "https://www.youtube.com/embed/QGSjxXkQ5Ws",
          "https://www.youtube.com/embed/MxGelscZEsA",
          "https://www.youtube.com/embed/zM6pXNLUlek",
          "https://www.youtube.com/embed/hxfpH2kewwY",
          "https://www.youtube.com/embed/VMStWNiu5XM",
          "https://www.youtube.com/embed/tNpr9ExFGpo",
          "https://www.youtube.com/embed/fq9eyDHvZ4M",
          "https://www.youtube.com/embed/WIRa536Tb10",
        ],
        references: [
          "http://ly.yishihui.net/14772.htm",
          "https://www.guoyi360.com/64gua58/xj/5962.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4200.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-58.html",
        ],
      };
    case "兑六三":
      return {
        gua: "兑",
        guaCi: "亨, 利贞.",
        yao: "六三",
        yaoCi: "来兑之凶, 位不当也.",
        origin: "来兑, 凶.",
        meaning: "前来求的喜悦 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/QGSjxXkQ5Ws",
          "https://www.youtube.com/embed/MxGelscZEsA",
          "https://www.youtube.com/embed/zM6pXNLUlek",
          "https://www.youtube.com/embed/hxfpH2kewwY",
          "https://www.youtube.com/embed/VMStWNiu5XM",
          "https://www.youtube.com/embed/tNpr9ExFGpo",
          "https://www.youtube.com/embed/fq9eyDHvZ4M",
          "https://www.youtube.com/embed/WIRa536Tb10",
        ],
        references: [
          "http://ly.yishihui.net/14774.htm",
          "https://www.guoyi360.com/64gua58/xj/5963.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4200.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-58.html",
        ],
      };
    case "兑九四":
      return {
        gua: "兑",
        guaCi: "亨, 利贞.",
        yao: "九四",
        yaoCi: "九四之喜, 有庆也.",
        origin: "商兑未宁, 介疾有喜.",
        meaning: "商议之中和睦欢愉 但事情没有办成 消除小毛病会有喜庆之事",
        videoUrls: [
          "https://www.youtube.com/embed/QGSjxXkQ5Ws",
          "https://www.youtube.com/embed/MxGelscZEsA",
          "https://www.youtube.com/embed/zM6pXNLUlek",
          "https://www.youtube.com/embed/hxfpH2kewwY",
          "https://www.youtube.com/embed/VMStWNiu5XM",
          "https://www.youtube.com/embed/tNpr9ExFGpo",
          "https://www.youtube.com/embed/fq9eyDHvZ4M",
          "https://www.youtube.com/embed/WIRa536Tb10",
        ],
        references: [
          "http://ly.yishihui.net/14776.htm",
          "https://www.guoyi360.com/64gua58/xj/5964.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4200.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-58.html",
        ],
      };
    case "兑九五":
      return {
        gua: "兑",
        guaCi: "亨, 利贞.",
        yao: "九五",
        yaoCi: "孚于剥, 位正当也.",
        origin: "孚于剥, 有厉.",
        meaning: "信任剥蚀阳刚的小人 有危险",
        videoUrls: [
          "https://www.youtube.com/embed/QGSjxXkQ5Ws",
          "https://www.youtube.com/embed/MxGelscZEsA",
          "https://www.youtube.com/embed/zM6pXNLUlek",
          "https://www.youtube.com/embed/hxfpH2kewwY",
          "https://www.youtube.com/embed/VMStWNiu5XM",
          "https://www.youtube.com/embed/tNpr9ExFGpo",
          "https://www.youtube.com/embed/fq9eyDHvZ4M",
          "https://www.youtube.com/embed/WIRa536Tb10",
        ],
        references: [
          "http://ly.yishihui.net/14778.htm",
          "https://www.guoyi360.com/64gua58/xj/5965.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4200.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-58.html",
        ],
      };
    case "兑上六":
      return {
        gua: "兑",
        guaCi: "亨, 利贞.",
        yao: "上六",
        yaoCi: "上六引兑, 未光也.",
        origin: "引兑.",
        meaning: "引诱别人与自己一起欢悦",
        videoUrls: [
          "https://www.youtube.com/embed/QGSjxXkQ5Ws",
          "https://www.youtube.com/embed/MxGelscZEsA",
          "https://www.youtube.com/embed/zM6pXNLUlek",
          "https://www.youtube.com/embed/hxfpH2kewwY",
          "https://www.youtube.com/embed/VMStWNiu5XM",
          "https://www.youtube.com/embed/tNpr9ExFGpo",
          "https://www.youtube.com/embed/fq9eyDHvZ4M",
          "https://www.youtube.com/embed/WIRa536Tb10",
        ],
        references: [
          "http://ly.yishihui.net/14780.htm",
          "https://www.guoyi360.com/64gua58/xj/5966.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4200.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-58.html",
        ],
      };
    case "涣初六":
      return {
        gua: "涣",
        guaCi: "亨. 王假有庙. 利涉大川, 利贞.",
        yao: "初六",
        yaoCi: "初六之吉, 顺也.",
        origin: "用拯马壮, 吉.",
        meaning: "乘强壮之马去救济患难 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/DI7SkvWsvr0",
          "https://www.youtube.com/embed/Zv8-S6xxPDc",
          "https://www.youtube.com/embed/dKSdXEdq4BA",
          "https://www.youtube.com/embed/2n_9jQAWy6Y",
          "https://www.youtube.com/embed/Rgoqogkxswc",
          "https://www.youtube.com/embed/rWt8Bm1IesQ",
          "https://www.youtube.com/embed/zXUbRb_wCJU",
          "https://www.youtube.com/embed/MYiOvvMoI_E",
        ],
        references: [
          "http://ly.yishihui.net/15004.htm",
          "https://www.guoyi360.com/64gua59/xj/5980.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4212.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-59.html",
        ],
      };
    case "涣九二":
      return {
        gua: "涣",
        guaCi: "亨. 王假有庙. 利涉大川, 利贞.",
        yao: "九二",
        yaoCi: "涣奔其机, 得愿也.",
        origin: "涣奔其机, 悔亡.",
        meaning: "大水流散 赶忙跑到 祭祀的案台 以祭告神灵祈求帮助 忧悔消除",
        videoUrls: [
          "https://www.youtube.com/embed/DI7SkvWsvr0",
          "https://www.youtube.com/embed/Zv8-S6xxPDc",
          "https://www.youtube.com/embed/dKSdXEdq4BA",
          "https://www.youtube.com/embed/2n_9jQAWy6Y",
          "https://www.youtube.com/embed/Rgoqogkxswc",
          "https://www.youtube.com/embed/rWt8Bm1IesQ",
          "https://www.youtube.com/embed/zXUbRb_wCJU",
          "https://www.youtube.com/embed/MYiOvvMoI_E",
        ],
        references: [
          "http://ly.yishihui.net/15006.htm",
          "https://www.guoyi360.com/64gua59/xj/5981.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4212.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-59.html",
        ],
      };
    case "涣六三":
      return {
        gua: "涣",
        guaCi: "亨. 王假有庙. 利涉大川, 利贞.",
        yao: "六三",
        yaoCi: "涣其躬, 志在外也.",
        origin: "涣其躬, 无悔.",
        meaning: "大水冲击自身 没有悔恨",
        videoUrls: [
          "https://www.youtube.com/embed/DI7SkvWsvr0",
          "https://www.youtube.com/embed/Zv8-S6xxPDc",
          "https://www.youtube.com/embed/dKSdXEdq4BA",
          "https://www.youtube.com/embed/2n_9jQAWy6Y",
          "https://www.youtube.com/embed/Rgoqogkxswc",
          "https://www.youtube.com/embed/rWt8Bm1IesQ",
          "https://www.youtube.com/embed/zXUbRb_wCJU",
          "https://www.youtube.com/embed/MYiOvvMoI_E",
        ],
        references: [
          "http://ly.yishihui.net/15008.htm",
          "https://www.guoyi360.com/64gua59/xj/5987.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4212.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-59.html",
        ],
      };
    case "涣六四":
      return {
        gua: "涣",
        guaCi: "亨. 王假有庙. 利涉大川, 利贞.",
        yao: "六四",
        yaoCi: "涣其群, 元吉, 光大也.",
        origin: "涣其群, 元吉. 涣有丘, 匪夷所思.",
        meaning:
          "大水冲散了众人 大吉大利 大水冲上山陵 水势汹涌 可不是日常能够想象得到的",
        videoUrls: [
          "https://www.youtube.com/embed/DI7SkvWsvr0",
          "https://www.youtube.com/embed/Zv8-S6xxPDc",
          "https://www.youtube.com/embed/dKSdXEdq4BA",
          "https://www.youtube.com/embed/2n_9jQAWy6Y",
          "https://www.youtube.com/embed/Rgoqogkxswc",
          "https://www.youtube.com/embed/rWt8Bm1IesQ",
          "https://www.youtube.com/embed/zXUbRb_wCJU",
          "https://www.youtube.com/embed/MYiOvvMoI_E",
        ],
        references: [
          "http://ly.yishihui.net/15010.htm",
          "https://www.guoyi360.com/64gua59/xj/5988.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4212.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-59.html",
        ],
      };
    case "涣九五":
      return {
        gua: "涣",
        guaCi: "亨. 王假有庙. 利涉大川, 利贞.",
        yao: "九五",
        yaoCi: "王居无咎, 正位也.",
        origin: "涣汗其大号, 涣王居, 无咎.",
        meaning: "君王频繁颁布诏令 君王居中守正可安居 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/DI7SkvWsvr0",
          "https://www.youtube.com/embed/Zv8-S6xxPDc",
          "https://www.youtube.com/embed/dKSdXEdq4BA",
          "https://www.youtube.com/embed/2n_9jQAWy6Y",
          "https://www.youtube.com/embed/Rgoqogkxswc",
          "https://www.youtube.com/embed/rWt8Bm1IesQ",
          "https://www.youtube.com/embed/zXUbRb_wCJU",
          "https://www.youtube.com/embed/MYiOvvMoI_E",
        ],
        references: [
          "http://ly.yishihui.net/15012.htm",
          "https://www.guoyi360.com/64gua59/xj/5989.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4212.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-59.html",
        ],
      };
    case "涣上九":
      return {
        gua: "涣",
        guaCi: "亨. 王假有庙. 利涉大川, 利贞.",
        yao: "上九",
        yaoCi: "涣其血, 远害也.",
        origin: "涣其血, 去逖出, 无咎.",
        meaning: "大水流散 能使得忧患消除 惊惧化解 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/DI7SkvWsvr0",
          "https://www.youtube.com/embed/Zv8-S6xxPDc",
          "https://www.youtube.com/embed/dKSdXEdq4BA",
          "https://www.youtube.com/embed/2n_9jQAWy6Y",
          "https://www.youtube.com/embed/Rgoqogkxswc",
          "https://www.youtube.com/embed/rWt8Bm1IesQ",
          "https://www.youtube.com/embed/zXUbRb_wCJU",
          "https://www.youtube.com/embed/MYiOvvMoI_E",
        ],
        references: [
          "http://ly.yishihui.net/15014.htm",
          "https://www.guoyi360.com/64gua59/xj/5990.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4212.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-59.html",
        ],
      };
    case "节初九":
      return {
        gua: "节",
        guaCi: "亨. 苦节不可贞.",
        yao: "初九",
        yaoCi: "不出户庭, 知通塞也.",
        origin: "不出户庭, 无咎.",
        meaning: "不出自家内院 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/CZm-D1a6gew",
          "https://www.youtube.com/embed/fzFNS8jCNAY",
          "https://www.youtube.com/embed/Py3wTKMIcHc",
          "https://www.youtube.com/embed/FhbSWcXMUuI",
          "https://www.youtube.com/embed/uH_MvQwtr6E",
          "https://www.youtube.com/embed/ENadRGWTifk",
          "https://www.youtube.com/embed/NV4gr_z0NKg",
          "https://www.youtube.com/embed/64Cjtl5h26A",
        ],
        references: [
          "http://ly.yishihui.net/15016.htm",
          "https://www.guoyi360.com/64gua60/xj/6012.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4244.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-60.html",
        ],
      };
    case "节九二":
      return {
        gua: "节",
        guaCi: "亨. 苦节不可贞.",
        yao: "九二",
        yaoCi: "不出门庭凶, 失时极也.",
        origin: "不出门庭, 凶.",
        meaning: "不出自家前院 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/CZm-D1a6gew",
          "https://www.youtube.com/embed/fzFNS8jCNAY",
          "https://www.youtube.com/embed/Py3wTKMIcHc",
          "https://www.youtube.com/embed/FhbSWcXMUuI",
          "https://www.youtube.com/embed/uH_MvQwtr6E",
          "https://www.youtube.com/embed/ENadRGWTifk",
          "https://www.youtube.com/embed/NV4gr_z0NKg",
          "https://www.youtube.com/embed/64Cjtl5h26A",
        ],
        references: [
          "http://ly.yishihui.net/15018.htm",
          "https://www.guoyi360.com/64gua60/xj/6013.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4244.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-60.html",
        ],
      };
    case "节六三":
      return {
        gua: "节",
        guaCi: "亨. 苦节不可贞.",
        yao: "六三",
        yaoCi: "不节之嗟, 又谁咎也?",
        origin: "不节若, 则嗟若. 无咎.",
        meaning: "不节制自己 就会哀叹悲伤 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/CZm-D1a6gew",
          "https://www.youtube.com/embed/fzFNS8jCNAY",
          "https://www.youtube.com/embed/Py3wTKMIcHc",
          "https://www.youtube.com/embed/FhbSWcXMUuI",
          "https://www.youtube.com/embed/uH_MvQwtr6E",
          "https://www.youtube.com/embed/ENadRGWTifk",
          "https://www.youtube.com/embed/NV4gr_z0NKg",
          "https://www.youtube.com/embed/64Cjtl5h26A",
        ],
        references: [
          "http://ly.yishihui.net/15020.htm",
          "https://www.guoyi360.com/64gua60/xj/6014.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4244.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-60.html",
        ],
      };
    case "节六四":
      return {
        gua: "节",
        guaCi: "亨. 苦节不可贞.",
        yao: "六四",
        yaoCi: "安节之亨, 承上道也.",
        origin: "安节, 亨",
        meaning: "安守于节俭 通达顺畅",
        videoUrls: [
          "https://www.youtube.com/embed/CZm-D1a6gew",
          "https://www.youtube.com/embed/fzFNS8jCNAY",
          "https://www.youtube.com/embed/Py3wTKMIcHc",
          "https://www.youtube.com/embed/FhbSWcXMUuI",
          "https://www.youtube.com/embed/uH_MvQwtr6E",
          "https://www.youtube.com/embed/ENadRGWTifk",
          "https://www.youtube.com/embed/NV4gr_z0NKg",
          "https://www.youtube.com/embed/64Cjtl5h26A",
        ],
        references: [
          "http://ly.yishihui.net/15020.htm",
          "https://www.guoyi360.com/64gua60/xj/6015.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4244.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-60.html",
        ],
      };
    case "节九五":
      return {
        gua: "节",
        guaCi: "亨. 苦节不可贞.",
        yao: "九五",
        yaoCi: "甘节之吉, 居位中也.",
        origin: "甘节, 吉, 往有尚.",
        meaning: "以节俭为乐事 吉祥 有所行动必会得到奖赏",
        videoUrls: [
          "https://www.youtube.com/embed/CZm-D1a6gew",
          "https://www.youtube.com/embed/fzFNS8jCNAY",
          "https://www.youtube.com/embed/Py3wTKMIcHc",
          "https://www.youtube.com/embed/FhbSWcXMUuI",
          "https://www.youtube.com/embed/uH_MvQwtr6E",
          "https://www.youtube.com/embed/ENadRGWTifk",
          "https://www.youtube.com/embed/NV4gr_z0NKg",
          "https://www.youtube.com/embed/64Cjtl5h26A",
        ],
        references: [
          "http://ly.yishihui.net/15024.htm",
          "https://www.guoyi360.com/64gua60/xj/6016.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4244.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-60.html",
        ],
      };
    case "节上六":
      return {
        gua: "节",
        guaCi: "亨. 苦节不可贞.",
        yao: "上六",
        yaoCi: "苦节贞凶, 其道穷也.",
        origin: "苦节, 贞凶. 悔亡.",
        meaning: "过度节俭 即使正固也有凶险 忧悔消除",
        videoUrls: [
          "https://www.youtube.com/embed/CZm-D1a6gew",
          "https://www.youtube.com/embed/fzFNS8jCNAY",
          "https://www.youtube.com/embed/Py3wTKMIcHc",
          "https://www.youtube.com/embed/FhbSWcXMUuI",
          "https://www.youtube.com/embed/uH_MvQwtr6E",
          "https://www.youtube.com/embed/ENadRGWTifk",
          "https://www.youtube.com/embed/NV4gr_z0NKg",
          "https://www.youtube.com/embed/64Cjtl5h26A",
        ],
        references: [
          "http://ly.yishihui.net/15026.htm",
          "https://www.guoyi360.com/64gua60/xj/6017.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4244.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-60.html",
        ],
      };
    case "中孚初九":
      return {
        gua: "中孚",
        guaCi: "豚鱼, 吉, 利涉大川, 利贞.",
        yao: "初九",
        yaoCi: "初九虞吉, 志未变也.",
        origin: "虞吉, 有它不燕.",
        meaning: "安守诚信之徳吉祥之兆 假如有别的想法则不会安宁",
        videoUrls: [
          "https://www.youtube.com/embed/4LUN-J1EC_M",
          "https://www.youtube.com/embed/DMF2zb4gxE8",
          "https://www.youtube.com/embed/nKLSFWvJtYw",
          "https://www.youtube.com/embed/t1SZqaWftGE",
          "https://www.youtube.com/embed/SZujgAxVHa4",
          "https://www.youtube.com/embed/wkscTFJ8U7Q",
          "https://www.youtube.com/embed/RnGVAUKTH-U",
          "https://www.youtube.com/embed/WIbpS8BdAu8",
        ],
        references: [
          "http://ly.yishihui.net/15028.htm",
          "https://www.guoyi360.com/64gua61/xj/6020.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4255.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-61.html",
        ],
      };
    case "中孚九二":
      return {
        gua: "中孚",
        guaCi: "豚鱼, 吉, 利涉大川, 利贞.",
        yao: "九二",
        yaoCi: "其子和之, 中心愿也.",
        origin: "鸣鹤在阴, 其子和之. 我有好爵, 吾与尔靡之.",
        meaning: "鹤在树荫下鸣叫 小鹤应声附和 我有美酒一爵 愿与你共享其安乐",
        videoUrls: [
          "https://www.youtube.com/embed/4LUN-J1EC_M",
          "https://www.youtube.com/embed/DMF2zb4gxE8",
          "https://www.youtube.com/embed/nKLSFWvJtYw",
          "https://www.youtube.com/embed/t1SZqaWftGE",
          "https://www.youtube.com/embed/SZujgAxVHa4",
          "https://www.youtube.com/embed/wkscTFJ8U7Q",
          "https://www.youtube.com/embed/RnGVAUKTH-U",
          "https://www.youtube.com/embed/WIbpS8BdAu8",
        ],
        references: [
          "http://ly.yishihui.net/15030.htm",
          "https://www.guoyi360.com/64gua61/xj/6021.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4255.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-61.html",
        ],
      };
    case "中孚六三":
      return {
        gua: "中孚",
        guaCi: "豚鱼, 吉, 利涉大川, 利贞.",
        yao: "六三",
        yaoCi: "可鼓或罢, 位不当也.",
        origin: "得敌, 或鼓或罢, 或泣或歌.",
        meaning:
          "遭遇强大的对手 有时击鼓奋进 有时疲惫不前 有时悲愤哭泣 有时慷慨高歌",
        videoUrls: [
          "https://www.youtube.com/embed/4LUN-J1EC_M",
          "https://www.youtube.com/embed/DMF2zb4gxE8",
          "https://www.youtube.com/embed/nKLSFWvJtYw",
          "https://www.youtube.com/embed/t1SZqaWftGE",
          "https://www.youtube.com/embed/SZujgAxVHa4",
          "https://www.youtube.com/embed/wkscTFJ8U7Q",
          "https://www.youtube.com/embed/RnGVAUKTH-U",
          "https://www.youtube.com/embed/WIbpS8BdAu8",
        ],
        references: [
          "http://ly.yishihui.net/15032.htm",
          "https://www.guoyi360.com/64gua61/xj/6022.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4255.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-61.html",
        ],
      };
    case "中孚六四":
      return {
        gua: "中孚",
        guaCi: "豚鱼, 吉, 利涉大川, 利贞.",
        yao: "六四",
        yaoCi: "马匹亡, 绝类上也.",
        origin: "月几望, 马匹亡, 无咎.",
        meaning: "在既望这一天 走失了一匹好马 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/4LUN-J1EC_M",
          "https://www.youtube.com/embed/DMF2zb4gxE8",
          "https://www.youtube.com/embed/nKLSFWvJtYw",
          "https://www.youtube.com/embed/t1SZqaWftGE",
          "https://www.youtube.com/embed/SZujgAxVHa4",
          "https://www.youtube.com/embed/wkscTFJ8U7Q",
          "https://www.youtube.com/embed/RnGVAUKTH-U",
          "https://www.youtube.com/embed/WIbpS8BdAu8",
        ],
        references: [
          "http://ly.yishihui.net/15040.htm",
          "https://www.guoyi360.com/64gua61/xj/6023.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4255.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-61.html",
        ],
      };
    case "中孚九五":
      return {
        gua: "中孚",
        guaCi: "豚鱼, 吉, 利涉大川, 利贞.",
        yao: "九五",
        yaoCi: "有孚挛如, 位正当也.",
        origin: "有孚挛如, 无咎.",
        meaning: "胸怀诚信并惦念他人 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/4LUN-J1EC_M",
          "https://www.youtube.com/embed/DMF2zb4gxE8",
          "https://www.youtube.com/embed/nKLSFWvJtYw",
          "https://www.youtube.com/embed/t1SZqaWftGE",
          "https://www.youtube.com/embed/SZujgAxVHa4",
          "https://www.youtube.com/embed/wkscTFJ8U7Q",
          "https://www.youtube.com/embed/RnGVAUKTH-U",
          "https://www.youtube.com/embed/WIbpS8BdAu8",
        ],
        references: [
          "http://ly.yishihui.net/15042.htm",
          "https://www.guoyi360.com/64gua61/xj/6024.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4255.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-61.html",
        ],
      };
    case "中孚上九":
      return {
        gua: "中孚",
        guaCi: "豚鱼, 吉, 利涉大川, 利贞.",
        yao: "上九",
        yaoCi: "翰音登于天, 何可长也.",
        origin: "翰音登于天, 贞凶.",
        meaning: "鸡鸣之声响彻天空 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/4LUN-J1EC_M",
          "https://www.youtube.com/embed/DMF2zb4gxE8",
          "https://www.youtube.com/embed/nKLSFWvJtYw",
          "https://www.youtube.com/embed/t1SZqaWftGE",
          "https://www.youtube.com/embed/SZujgAxVHa4",
          "https://www.youtube.com/embed/wkscTFJ8U7Q",
          "https://www.youtube.com/embed/RnGVAUKTH-U",
          "https://www.youtube.com/embed/WIbpS8BdAu8",
        ],
        references: [
          "http://ly.yishihui.net/15044.htm",
          "https://www.guoyi360.com/64gua61/xj/6025.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4255.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-61.html",
        ],
      };
    case "小过初六":
      return {
        gua: "小过",
        guaCi: "亨, 利贞. 可小事, 不可大事. 飞鸟遗之音. 不宜上, 宜下, 大吉.",
        yao: "初六",
        yaoCi: "飞鸟以凶, 不可如何也.",
        origin: "飞鸟以凶.",
        meaning: "飞鸟带来了危险的兆头",
        videoUrls: [
          "https://www.youtube.com/embed/HtqPzOC6Xwc",
          "https://www.youtube.com/embed/fZ9HJZ7pFio",
          "https://www.youtube.com/embed/OszKEA2ejWE",
          "https://www.youtube.com/embed/zFJ3KHXKkV4",
          "https://www.youtube.com/embed/fmfoGMdcksg",
          "https://www.youtube.com/embed/LUHpFaMqwoc",
          "https://www.youtube.com/embed/pyFyIB2sxaU",
          "https://www.youtube.com/embed/UJgL5AI5fWA",
        ],
        references: [
          "http://ly.yishihui.net/15110.htm",
          "https://www.guoyi360.com/64gua62/xj/6030.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4256.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-62.html",
        ],
      };
    case "小过六二":
      return {
        gua: "小过",
        guaCi: "亨, 利贞. 可小事, 不可大事. 飞鸟遗之音. 不宜上, 宜下, 大吉.",
        yao: "六二",
        yaoCi: "不及其君, 臣不可过也.",
        origin: "过其祖, 遇其妣. 不及其君, 遇其臣, 无咎.",
        meaning: "越过祖父 遇见祖母 没有赶上君王那里 而与其臣子接触 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/HtqPzOC6Xwc",
          "https://www.youtube.com/embed/fZ9HJZ7pFio",
          "https://www.youtube.com/embed/OszKEA2ejWE",
          "https://www.youtube.com/embed/zFJ3KHXKkV4",
          "https://www.youtube.com/embed/fmfoGMdcksg",
          "https://www.youtube.com/embed/LUHpFaMqwoc",
          "https://www.youtube.com/embed/pyFyIB2sxaU",
          "https://www.youtube.com/embed/UJgL5AI5fWA",
        ],
        references: [
          "http://ly.yishihui.net/15112.htm",
          "https://www.guoyi360.com/64gua62/xj/6031.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4256.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-62.html",
        ],
      };
    case "小过九三":
      return {
        gua: "小过",
        guaCi: "亨, 利贞. 可小事, 不可大事. 飞鸟遗之音. 不宜上, 宜下, 大吉.",
        yao: "九三",
        yaoCi: "从或戕之, 凶如何也.",
        origin: "弗过防之, 从或戕之, 凶.",
        meaning: "不严加防范 会有被杀害的危险 有凶险",
        videoUrls: [
          "https://www.youtube.com/embed/HtqPzOC6Xwc",
          "https://www.youtube.com/embed/fZ9HJZ7pFio",
          "https://www.youtube.com/embed/OszKEA2ejWE",
          "https://www.youtube.com/embed/zFJ3KHXKkV4",
          "https://www.youtube.com/embed/fmfoGMdcksg",
          "https://www.youtube.com/embed/LUHpFaMqwoc",
          "https://www.youtube.com/embed/pyFyIB2sxaU",
          "https://www.youtube.com/embed/UJgL5AI5fWA",
        ],
        references: [
          "http://ly.yishihui.net/15114.htm",
          "https://www.guoyi360.com/64gua62/xj/6032.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4256.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-62.html",
        ],
      };
    case "小过九四":
      return {
        gua: "小过",
        guaCi: "亨, 利贞. 可小事, 不可大事. 飞鸟遗之音. 不宜上, 宜下, 大吉.",
        yao: "九四",
        yaoCi: "弗过遇之, 位不当也. 往厉必戒, 终不可长也.",
        origin: "无咎, 弗过遇之, 往厉必戒. 勿用永贞.",
        meaning:
          "无灾祸 不要越过也会遇到 有所行动会有危险 必须加以警惕 不可以有所作为 长久保持正固",
        videoUrls: [
          "https://www.youtube.com/embed/HtqPzOC6Xwc",
          "https://www.youtube.com/embed/fZ9HJZ7pFio",
          "https://www.youtube.com/embed/OszKEA2ejWE",
          "https://www.youtube.com/embed/zFJ3KHXKkV4",
          "https://www.youtube.com/embed/fmfoGMdcksg",
          "https://www.youtube.com/embed/LUHpFaMqwoc",
          "https://www.youtube.com/embed/pyFyIB2sxaU",
          "https://www.youtube.com/embed/UJgL5AI5fWA",
        ],
        references: [
          "http://ly.yishihui.net/15116.htm",
          "https://www.guoyi360.com/64gua62/xj/6033.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4256.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-62.html",
        ],
      };
    case "小过六五":
      return {
        gua: "小过",
        guaCi: "亨, 利贞. 可小事, 不可大事. 飞鸟遗之音. 不宜上, 宜下, 大吉.",
        yao: "六五",
        yaoCi: "密云不雨, 已上也.",
        origin: "密云不雨, 自我西郊. 公弋取彼在穴.",
        meaning:
          "乌云密布却没有下雨 云气从西边郊区升起 王公狩猎射中了一只飞鸟 追到洞穴里才捕捉到",
        videoUrls: [
          "https://www.youtube.com/embed/HtqPzOC6Xwc",
          "https://www.youtube.com/embed/fZ9HJZ7pFio",
          "https://www.youtube.com/embed/OszKEA2ejWE",
          "https://www.youtube.com/embed/zFJ3KHXKkV4",
          "https://www.youtube.com/embed/fmfoGMdcksg",
          "https://www.youtube.com/embed/LUHpFaMqwoc",
          "https://www.youtube.com/embed/pyFyIB2sxaU",
          "https://www.youtube.com/embed/UJgL5AI5fWA",
        ],
        references: [
          "http://ly.yishihui.net/15118.htm",
          "https://www.guoyi360.com/64gua62/xj/6034.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4256.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-62.html",
        ],
      };
    case "小过上六":
      return {
        gua: "小过",
        guaCi: "亨, 利贞. 可小事, 不可大事. 飞鸟遗之音. 不宜上, 宜下, 大吉.",
        yao: "上六",
        yaoCi: "弗遇过之, 已亢也.",
        origin: "弗遇过之, 飞鸟离之, 凶. 是谓灾眚.",
        meaning: "不要越过也会遇到 就像飞鸟容易被射中 捕获 非常凶险 这就是灾难",
        videoUrls: [
          "https://www.youtube.com/embed/HtqPzOC6Xwc",
          "https://www.youtube.com/embed/fZ9HJZ7pFio",
          "https://www.youtube.com/embed/OszKEA2ejWE",
          "https://www.youtube.com/embed/zFJ3KHXKkV4",
          "https://www.youtube.com/embed/fmfoGMdcksg",
          "https://www.youtube.com/embed/LUHpFaMqwoc",
          "https://www.youtube.com/embed/pyFyIB2sxaU",
          "https://www.youtube.com/embed/UJgL5AI5fWA",
        ],
        references: [
          "http://ly.yishihui.net/15120.htm",
          "https://www.guoyi360.com/64gua62/xj/6035.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4256.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-62.html",
        ],
      };
    case "既济初九":
      return {
        gua: "既济",
        guaCi: "亨小, 利贞. 初吉终乱.",
        yao: "初九",
        yaoCi: "曳其轮, 义无咎也.",
        origin: "曳其轮, 濡其尾, 无咎.",
        meaning: "牵引着车轮前行 水弄湿了车尾 无灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/LW2Gd7G9_R8",
          "https://www.youtube.com/embed/iBR6Z4hsKyk",
          "https://www.youtube.com/embed/reEVi7I_SFg",
          "https://www.youtube.com/embed/1ZZ6ACcAm7w",
          "https://www.youtube.com/embed/gtTKKP_ueq0",
          "https://www.youtube.com/embed/Y-Kw9qZiIbg",
          "https://www.youtube.com/embed/lvyWnId8IYs",
          "https://www.youtube.com/embed/jsN2SiiPjaw",
        ],
        references: [
          "http://ly.yishihui.net/15122.htm",
          "https://www.guoyi360.com/64gua63/xj/6038.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4257.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-63.html",
        ],
      };
    case "既济六二":
      return {
        gua: "既济",
        guaCi: "亨小, 利贞. 初吉终乱.",
        yao: "六二",
        yaoCi: "七日得, 以中道也.",
        origin: "妇丧其茀, 勿逐, 七日得.",
        meaning: "妇人丢失了首饰 不要寻找 七日内会失而复得",
        videoUrls: [
          "https://www.youtube.com/embed/LW2Gd7G9_R8",
          "https://www.youtube.com/embed/iBR6Z4hsKyk",
          "https://www.youtube.com/embed/reEVi7I_SFg",
          "https://www.youtube.com/embed/1ZZ6ACcAm7w",
          "https://www.youtube.com/embed/gtTKKP_ueq0",
          "https://www.youtube.com/embed/Y-Kw9qZiIbg",
          "https://www.youtube.com/embed/lvyWnId8IYs",
          "https://www.youtube.com/embed/jsN2SiiPjaw",
        ],
        references: [
          "http://ly.yishihui.net/15124.htm",
          "https://www.guoyi360.com/64gua63/xj/6039.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4257.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-63.html",
        ],
      };
    case "既济九三":
      return {
        gua: "既济",
        guaCi: "亨小, 利贞. 初吉终乱.",
        yao: "九三",
        yaoCi: "三年克之, 惫也.",
        origin: "高宗伐鬼方, 三年克之. 小人勿用.",
        meaning: "殷商君王攻打鬼方国 历经三年才打败鬼方 事关重大 不能重用小人",
        videoUrls: [
          "https://www.youtube.com/embed/LW2Gd7G9_R8",
          "https://www.youtube.com/embed/iBR6Z4hsKyk",
          "https://www.youtube.com/embed/reEVi7I_SFg",
          "https://www.youtube.com/embed/1ZZ6ACcAm7w",
          "https://www.youtube.com/embed/gtTKKP_ueq0",
          "https://www.youtube.com/embed/Y-Kw9qZiIbg",
          "https://www.youtube.com/embed/lvyWnId8IYs",
          "https://www.youtube.com/embed/jsN2SiiPjaw",
        ],
        references: [
          "http://ly.yishihui.net/15126.htm",
          "https://www.guoyi360.com/64gua63/xj/6040.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4257.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-63.html",
        ],
      };
    case "既济六四":
      return {
        gua: "既济",
        guaCi: "亨小, 利贞. 初吉终乱.",
        yao: "六四",
        yaoCi: "终日戒, 有所疑也.",
        origin: "繻有衣袽, 终日戒.",
        meaning: "华服即将变成破衣 应当始终警惕以防灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/LW2Gd7G9_R8",
          "https://www.youtube.com/embed/iBR6Z4hsKyk",
          "https://www.youtube.com/embed/reEVi7I_SFg",
          "https://www.youtube.com/embed/1ZZ6ACcAm7w",
          "https://www.youtube.com/embed/gtTKKP_ueq0",
          "https://www.youtube.com/embed/Y-Kw9qZiIbg",
          "https://www.youtube.com/embed/lvyWnId8IYs",
          "https://www.youtube.com/embed/jsN2SiiPjaw",
        ],
        references: [
          "http://ly.yishihui.net/15128.htm",
          "https://www.guoyi360.com/64gua63/xj/6041.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4257.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-63.html",
        ],
      };
    case "既济九五":
      return {
        gua: "既济",
        guaCi: "亨小, 利贞. 初吉终乱.",
        yao: "九五",
        yaoCi: "东邻杀牛, 不如西邻之时也, 实受其福, 吉大来也.",
        origin: "东邻杀牛, 不如西郊之禴祭, 实受其福.",
        meaning:
          "东面的邻国杀牛举行盛大的祭祀 不入西边的邻国举行简单的祭祀那样实享天福",
        videoUrls: [
          "https://www.youtube.com/embed/LW2Gd7G9_R8",
          "https://www.youtube.com/embed/iBR6Z4hsKyk",
          "https://www.youtube.com/embed/reEVi7I_SFg",
          "https://www.youtube.com/embed/1ZZ6ACcAm7w",
          "https://www.youtube.com/embed/gtTKKP_ueq0",
          "https://www.youtube.com/embed/Y-Kw9qZiIbg",
          "https://www.youtube.com/embed/lvyWnId8IYs",
          "https://www.youtube.com/embed/jsN2SiiPjaw",
        ],
        references: [
          "http://ly.yishihui.net/15130.htm",
          "https://www.guoyi360.com/64gua63/xj/6042.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4257.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-63.html",
        ],
      };
    case "既济上六":
      return {
        gua: "既济",
        guaCi: "亨小, 利贞. 初吉终乱.",
        yao: "上六",
        yaoCi: "濡其首厉, 何可久也.",
        origin: "濡其首, 厉.",
        meaning: "水沾湿了头颅 有危险",
        videoUrls: [
          "https://www.youtube.com/embed/LW2Gd7G9_R8",
          "https://www.youtube.com/embed/iBR6Z4hsKyk",
          "https://www.youtube.com/embed/reEVi7I_SFg",
          "https://www.youtube.com/embed/1ZZ6ACcAm7w",
          "https://www.youtube.com/embed/gtTKKP_ueq0",
          "https://www.youtube.com/embed/Y-Kw9qZiIbg",
          "https://www.youtube.com/embed/lvyWnId8IYs",
          "https://www.youtube.com/embed/jsN2SiiPjaw",
        ],
        references: [
          "http://ly.yishihui.net/15132.htm",
          "https://www.guoyi360.com/64gua63/xj/6043.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4257.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-63.html",
        ],
      };
    case "未济初六":
      return {
        gua: "未济",
        guaCi: "亨. 小狐汔济, 濡其尾, 无攸利.",
        yao: "初六",
        yaoCi: "濡其尾, 亦不知极也.",
        origin: "濡其尾, 吝.",
        meaning: "水沾湿了尾巴 灾祸",
        videoUrls: [
          "https://www.youtube.com/embed/bmbuBGNBTSU",
          "https://www.youtube.com/embed/7E6JXdc95J0",
          "https://www.youtube.com/embed/AHgwSWKJAYw",
          "https://www.youtube.com/embed/eDVqKc-OjJE",
          "https://www.youtube.com/embed/wRODgEp1AeU",
          "https://www.youtube.com/embed/-kmEgzG9HCs",
          "https://www.youtube.com/embed/ypxy1F57_mM",
          "https://www.youtube.com/embed/-6TlBeNe4dc",
        ],
        references: [
          "http://ly.yishihui.net/15134.htm",
          "https://www.guoyi360.com/64gua64/xj/6046.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4263.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-64.html",
        ],
      };
    case "未济九二":
      return {
        gua: "未济",
        guaCi: "亨. 小狐汔济, 濡其尾, 无攸利.",
        yao: "九二",
        yaoCi: "九二贞吉, 中以行正也.",
        origin: "曳其轮, 贞吉.",
        meaning: "向后拖拽车轮而放缓前进的速度 正固吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/bmbuBGNBTSU",
          "https://www.youtube.com/embed/7E6JXdc95J0",
          "https://www.youtube.com/embed/AHgwSWKJAYw",
          "https://www.youtube.com/embed/eDVqKc-OjJE",
          "https://www.youtube.com/embed/wRODgEp1AeU",
          "https://www.youtube.com/embed/-kmEgzG9HCs",
          "https://www.youtube.com/embed/ypxy1F57_mM",
          "https://www.youtube.com/embed/-6TlBeNe4dc",
        ],
        references: [
          "http://ly.yishihui.net/15136.htm",
          "https://www.guoyi360.com/64gua64/xj/6047.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4263.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-64.html",
        ],
      };
    case "未济六三":
      return {
        gua: "未济",
        guaCi: "亨. 小狐汔济, 濡其尾, 无攸利.",
        yao: "六三",
        yaoCi: "未济征凶, 位不当也.",
        origin: "未济, 征凶, 利涉大川.",
        meaning: "事业未成 出门远行有凶险 但适宜跨越大江大河",
        videoUrls: [
          "https://www.youtube.com/embed/bmbuBGNBTSU",
          "https://www.youtube.com/embed/7E6JXdc95J0",
          "https://www.youtube.com/embed/AHgwSWKJAYw",
          "https://www.youtube.com/embed/eDVqKc-OjJE",
          "https://www.youtube.com/embed/wRODgEp1AeU",
          "https://www.youtube.com/embed/-kmEgzG9HCs",
          "https://www.youtube.com/embed/ypxy1F57_mM",
          "https://www.youtube.com/embed/-6TlBeNe4dc",
        ],
        references: [
          "http://ly.yishihui.net/15138.htm",
          "https://www.guoyi360.com/64gua64/xj/6048.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4263.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-64.html",
        ],
      };
    case "未济九四":
      return {
        gua: "未济",
        guaCi: "亨. 小狐汔济, 濡其尾, 无攸利.",
        yao: "九四",
        yaoCi: "贞吉悔亡, 志行也.",
        origin: "贞吉, 悔亡, 震用伐鬼方. 三年有赏于大国.",
        meaning: "正固吉祥 忧悔消除 兴兵讨伐鬼方 三年获胜而获得大国的封赏",
        videoUrls: [
          "https://www.youtube.com/embed/bmbuBGNBTSU",
          "https://www.youtube.com/embed/7E6JXdc95J0",
          "https://www.youtube.com/embed/AHgwSWKJAYw",
          "https://www.youtube.com/embed/eDVqKc-OjJE",
          "https://www.youtube.com/embed/wRODgEp1AeU",
          "https://www.youtube.com/embed/-kmEgzG9HCs",
          "https://www.youtube.com/embed/ypxy1F57_mM",
          "https://www.youtube.com/embed/-6TlBeNe4dc",
        ],
        references: [
          "http://ly.yishihui.net/15140.htm",
          "https://www.guoyi360.com/64gua64/xj/6049.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4263.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-64.html",
        ],
      };
    case "未济六五":
      return {
        gua: "未济",
        guaCi: "亨. 小狐汔济, 濡其尾, 无攸利.",
        yao: "六五",
        yaoCi: "君子之光, 其晖吉也.",
        origin: "贞吉, 无悔, 君子之光. 有孚, 吉.",
        meaning: "正固吉祥 没有悔恨 君子的光辉在于诚实守信 吉祥",
        videoUrls: [
          "https://www.youtube.com/embed/bmbuBGNBTSU",
          "https://www.youtube.com/embed/7E6JXdc95J0",
          "https://www.youtube.com/embed/AHgwSWKJAYw",
          "https://www.youtube.com/embed/eDVqKc-OjJE",
          "https://www.youtube.com/embed/wRODgEp1AeU",
          "https://www.youtube.com/embed/-kmEgzG9HCs",
          "https://www.youtube.com/embed/ypxy1F57_mM",
          "https://www.youtube.com/embed/-6TlBeNe4dc",
        ],
        references: [
          "http://ly.yishihui.net/15142.htm",
          "https://www.guoyi360.com/64gua64/xj/6050.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4263.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-64.html",
        ],
      };
    case "未济上九":
      return {
        gua: "未济",
        guaCi: "亨. 小狐汔济, 濡其尾, 无攸利.",
        yao: "上九",
        yaoCi: "饮酒濡首, 亦不知节也.",
        origin: "有孚于饮酒, 无咎. 濡其首, 有孚失是.",
        meaning: "心怀诚信 来喝酒 无灾祸 水沾湿了头颅 即使心怀诚信 也会失去",
        videoUrls: [
          "https://www.youtube.com/embed/bmbuBGNBTSU",
          "https://www.youtube.com/embed/7E6JXdc95J0",
          "https://www.youtube.com/embed/AHgwSWKJAYw",
          "https://www.youtube.com/embed/eDVqKc-OjJE",
          "https://www.youtube.com/embed/wRODgEp1AeU",
          "https://www.youtube.com/embed/-kmEgzG9HCs",
          "https://www.youtube.com/embed/ypxy1F57_mM",
          "https://www.youtube.com/embed/-6TlBeNe4dc",
        ],
        references: [
          "http://ly.yishihui.net/15144.htm",
          "https://www.guoyi360.com/64gua64/xj/6051.html",
          "https://www.zhouyi.cc/zhouyi/yijing64/4263.html",
          "https://www.buyiju.com/zhouyi/yijing/64gua-64.html",
        ],
      };
    case "无无":
    default:
      return {
        gua: "无",
        guaCi: "无",
        yao: "无",
        yaoCi: "无",
        origin: "无",
        meaning: "无",
        videoUrls: [],
        references: [],
      };
  }
}

module.exports = {
  convertToGua,
  convertToYao,
  allGuas,
  allYaos,
  answer,
  answers,
};
