"use client";

import React from "react";
import {
  Shield,
  Heart,
  Car,
  TrendingUp,
  Users,
  Home,
  CheckCircle,
  Star,
  Zap,
  Award,
  Clock,
  DollarSign,
  Activity,
  Baby,
  User,
  UserCheck,
  Building2,
  Briefcase,
  Flame,
  Droplets,
  Lock,
} from "lucide-react";

// 医疗险方案卡片
const MedicalPlans = () => (
  <div className="grid md:grid-cols-3 gap-6 mb-8">
    {/* 0 免赔百万医疗 */}
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
        <Shield className="w-6 h-6 text-blue-600" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-3">0 免赔百万医疗</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>0 免赔额，住院全报销</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>适合追求高性价比的家庭</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>保费亲民，全家可投保</span>
        </li>
      </ul>
    </div>

    {/* 特需部中端医疗 */}
    <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
        <Star className="w-6 h-6 text-amber-600" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-3">特需部中端医疗</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>可住特需部/VIP 病房</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>120 种重疾 0 免赔 100% 赔付</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>享受更好的医疗资源和服务</span>
        </li>
      </ul>
    </div>

    {/* 带病可投方案 */}
    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
        <Heart className="w-6 h-6 text-green-600" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-3">带病可投方案</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>非标准体可投保</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>既往症人群也有保障</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>扩大可投范围</span>
        </li>
      </ul>
    </div>
  </div>
);

// 增值服务条
const ValueAddedServices = () => {
  const services = [
    "门诊就医安排",
    "暖心陪诊",
    "住院床位安排",
    "7 天住院陪护",
    "垫付医疗费",
    "入院探视",
    "出院交通",
    "上门康复",
    "质子重离子",
    "CAR-T 治疗",
    "院外靶向药",
  ];

  return (
    <div className="mb-6">
      <h5 className="text-sm font-semibold text-gray-700 mb-3">增值服务</h5>
      <div className="flex flex-wrap gap-2">
        {services.map((service, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

// 家庭折扣提示
const FamilyDiscount = () => (
  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200 mb-8">
    <div className="flex items-center">
      <Users className="w-5 h-5 text-amber-600 mr-3" />
      <div>
        <p className="text-sm font-semibold text-amber-900">全家投保享折扣</p>
        <p className="text-xs text-amber-700 mt-1">
          2 人 95 折 | 3 人 9 折 | 4 人 +85 折
        </p>
      </div>
    </div>
  </div>
);

// 重疾险优势
const CriticalIllnessAdvantages = () => {
  const advantages = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "保额会涨",
      desc: "保额每年递增，越保越多，抵御通胀",
      color: "blue",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "灵活配置",
      desc: "主险 + 附加险自由组合，满足不同预算",
      color: "purple",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "保障广泛",
      desc: "覆盖重大疾病 + 中症 + 轻症，多次赔付",
      color: "green",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "功能全面",
      desc: "含豁免功能，确诊后后续保费免缴",
      color: "amber",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "服务优质",
      desc: "配套健康管理服务，就医绿通",
      color: "rose",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    amber: "bg-amber-100 text-amber-600",
    rose: "bg-rose-100 text-rose-600",
  };

  return (
    <div className="grid md:grid-cols-5 gap-4 mb-6">
      {advantages.map((adv, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all"
        >
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${colorMap[adv.color]}`}
          >
            {adv.icon}
          </div>
          <h5 className="font-bold text-gray-900 text-sm mb-1">{adv.title}</h5>
          <p className="text-xs text-gray-600">{adv.desc}</p>
        </div>
      ))}
    </div>
  );
};

// 重疾险案例
const CriticalIllnessCase = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
    <h5 className="font-bold text-gray-900 mb-3 flex items-center">
      <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
      案例演示
    </h5>
    <div className="grid md:grid-cols-4 gap-4 text-sm">
      <div>
        <p className="text-gray-500 text-xs">投保年龄</p>
        <p className="font-bold text-gray-900">30 岁男性</p>
      </div>
      <div>
        <p className="text-gray-500 text-xs">保额</p>
        <p className="font-bold text-gray-900">50 万</p>
      </div>
      <div>
        <p className="text-gray-500 text-xs">缴费期</p>
        <p className="font-bold text-gray-900">30 年交</p>
      </div>
      <div>
        <p className="text-gray-500 text-xs">70 岁保额</p>
        <p className="font-bold text-blue-600">约 100 万</p>
      </div>
    </div>
    <p className="text-xs text-gray-600 mt-3">
      *保额随时间递增，抵御通胀，保单实际升值
    </p>
  </div>
);

// 意外险人群卡片
const AccidentInsurance = () => {
  const plans = [
    {
      icon: <Baby className="w-6 h-6" />,
      title: "少儿版",
      age: "出生 30 天 -17 岁",
      features: ["意外身故/伤残保障", "意外医疗（含社保外）", "意外住院津贴"],
      price: "78 元/年起",
      color: "blue",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "成人版",
      age: "18-50 岁",
      features: [
        "意外身故/伤残保障",
        "意外医疗 0 免赔",
        "猝死责任",
        "意外住院津贴",
      ],
      price: "138 元/年起",
      color: "amber",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "老年版",
      age: "50-75 岁",
      features: ["意外身故/伤残保障", "意外医疗", "意外住院津贴"],
      price: "228 元/年起",
      color: "green",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-blue-600",
    amber: "from-amber-500 to-amber-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
        >
          <div
            className={`bg-gradient-to-r ${colorMap[plan.color]} p-4 text-white`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {plan.icon}
                <h4 className="text-lg font-bold ml-2">{plan.title}</h4>
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {plan.age}
              </span>
            </div>
          </div>
          <div className="p-5">
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">最低保费</p>
              <p className="text-lg font-bold text-gray-900">{plan.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// 车险模块
const CarInsurance = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      {/* 必买险种 */}
      <div className="bg-red-50 rounded-xl p-5 border border-red-100">
        <h5 className="font-bold text-red-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          必买险种
        </h5>
        <ul className="space-y-3">
          <li>
            <p className="font-semibold text-gray-900 text-sm">交强险</p>
            <p className="text-xs text-gray-600">国家强制，不买不能上路</p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 text-sm">车损险</p>
            <p className="text-xs text-gray-600">
              保自己的车（碰撞/自然灾害/盗抢等）
            </p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 text-sm">三者险</p>
            <p className="text-xs text-gray-600">
              保别人的车和人（建议 200 万以上）
            </p>
          </li>
        </ul>
      </div>

      {/* 建议加保 */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
        <h5 className="font-bold text-blue-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          建议加保
        </h5>
        <ul className="space-y-3">
          <li>
            <p className="font-semibold text-gray-900 text-sm">
              医保外用药责任险
            </p>
            <p className="text-xs text-gray-600">
              三者险医疗费扩展到医保外
            </p>
          </li>
          <li>
            <p className="font-semibold text-gray-900 text-sm">
              车上人员责任险
            </p>
            <p className="text-xs text-gray-600">保自己车上的人</p>
          </li>
        </ul>
      </div>
    </div>

    {/* 多渠道报价 */}
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-200">
      <h5 className="font-bold text-gray-900 mb-4 text-center">
        多渠道报价流程
      </h5>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {["平安", "人保", "太保", "阳光", "多家对比", "最优方案"].map(
          (step, index) => (
            <React.Fragment key={index}>
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 font-medium text-gray-700">
                {step}
              </div>
              {index < 5 && (
                <span className="text-gray-400">→</span>
              )}
            </React.Fragment>
          )
        )}
      </div>
      <p className="text-center text-xs text-gray-600 mt-3">
        一键多渠道报价，帮您找到性价比最高的方案
      </p>
    </div>
  </div>
);

// 养老金对比表
const PensionInsurance = () => (
  <div>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <th className="px-4 py-3 text-left rounded-tl-lg">对比项</th>
            <th className="px-4 py-3 text-left">银行存款</th>
            <th className="px-4 py-3 text-left rounded-tr-lg">养老年金险</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="bg-white">
            <td className="px-4 py-3 font-medium text-gray-900">收益方式</td>
            <td className="px-4 py-3 text-gray-600">单利</td>
            <td className="px-4 py-3 text-blue-600 font-semibold">复利</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-900">领取方式</td>
            <td className="px-4 py-3 text-gray-600">一次性取完</td>
            <td className="px-4 py-3 text-blue-600 font-semibold">
              活多久领多久
            </td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-3 font-medium text-gray-900">风险</td>
            <td className="px-4 py-3 text-gray-600">利率下行风险</td>
            <td className="px-4 py-3 text-blue-600 font-semibold">
              锁定终身利率
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-3 font-medium text-gray-900">灵活性</td>
            <td className="px-4 py-3 text-gray-600">随时取</td>
            <td className="px-4 py-3 text-blue-600 font-semibold">
              灵活减保/保单贷款
            </td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-3 font-medium text-gray-900 rounded-bl-lg">
              传承
            </td>
            <td className="px-4 py-3 text-gray-600">需走继承程序</td>
            <td className="px-4 py-3 text-blue-600 font-semibold rounded-br-lg">
              指定受益人直接给付
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
        <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
        <h5 className="font-bold text-gray-900 text-sm mb-1">复利增值</h5>
        <p className="text-xs text-gray-600">时间越长收益越明显</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
        <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
        <h5 className="font-bold text-gray-900 text-sm mb-1">灵活领取</h5>
        <p className="text-xs text-gray-600">可年领/月领/一次性领取</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
        <Lock className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <h5 className="font-bold text-gray-900 text-sm mb-1">锁定利率</h5>
        <p className="text-xs text-gray-600">不受未来利率下行影响</p>
      </div>
    </div>

    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
      <p className="text-sm text-amber-900 font-medium">
        💡 告诉我你的退休目标，我帮你倒推现在该存多少
      </p>
    </div>
  </div>
);

// 定期寿险
const TermLifeInsurance = () => (
  <div>
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-5 border border-green-100">
        <DollarSign className="w-8 h-8 text-green-600 mb-3" />
        <h5 className="font-bold text-gray-900 mb-2">低保费高杠杆</h5>
        <p className="text-sm text-gray-600">
          几百元保费撬动百万保额
        </p>
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 border border-blue-100">
        <Activity className="w-8 h-8 text-blue-600 mb-3" />
        <h5 className="font-bold text-gray-900 mb-2">健康告知宽松</h5>
        <p className="text-sm text-gray-600">投保门槛低</p>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-5 border border-amber-100">
        <CheckCircle className="w-8 h-8 text-amber-600 mb-3" />
        <h5 className="font-bold text-gray-900 mb-2">免责条款最少</h5>
        <p className="text-sm text-gray-600">仅 3 条免责，理赔宽松</p>
      </div>
    </div>

    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
      <p className="text-sm font-medium text-gray-700 mb-2">适用人群</p>
      <div className="flex flex-wrap gap-2">
        {[
          "家庭经济支柱",
          "有房贷车贷",
          "创业者",
          "已婚有娃",
        ].map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-xs font-medium border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// 团体险
const GroupInsurance = () => {
  const plans = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "团体医疗",
      features: [
        "200 万医疗保障",
        "含住院/门急诊/特殊门诊/质重离子",
        "送入职体检服务",
        "10 人起保",
      ],
      color: "blue",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "综合团险",
      features: [
        "意外 + 疾病都保，24 小时全天保障",
        "含猝死责任 +120 种特疾 0 免赔",
        "460 元/人起",
      ],
      color: "amber",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "意外团险",
      features: [
        "3 人起投，十档方案灵活选",
        "可增减员按天计费",
        "84 元/人起",
      ],
      color: "green",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-blue-600",
    amber: "from-amber-500 to-amber-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
        >
          <div
            className={`bg-gradient-to-r ${colorMap[plan.color]} p-4 text-white`}
          >
            <div className="flex items-center">
              {plan.icon}
              <h4 className="text-lg font-bold ml-2">{plan.title}</h4>
            </div>
          </div>
          <div className="p-5">
            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

// 财产险
const PropertyInsurance = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {/* 家庭财产保险 */}
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Home className="w-6 h-6" />
            <h4 className="text-lg font-bold ml-2">家庭财产保险</h4>
          </div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
            入门版
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-gray-900 mb-3">7 大保障</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "房屋主体",
            "装修",
            "室内财产",
            "盗窃",
            "水暖管",
            "居家责任",
          ].map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
            >
              {item}
            </span>
          ))}
        </div>
        <ul className="space-y-2 mb-4">
          <li className="text-sm text-gray-600 flex items-start">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>自有房产/租房均可保</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>最高 200 万保额</span>
          </li>
        </ul>
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">最低保费</p>
          <p className="text-lg font-bold text-gray-900">
            168 元/年
            <span className="text-xs font-normal text-gray-500 ml-1">
              (0.47 元/天)
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* 高端家财保险 */}
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-5 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Home className="w-6 h-6" />
            <h4 className="text-lg font-bold ml-2">高端家财保险</h4>
          </div>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
            高端版
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-gray-900 mb-3">10 大保障</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "家财",
            "燃气意外",
            "银行卡盗刷",
            "临时住宿津贴",
          ].map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs"
            >
              {item}
            </span>
          ))}
        </div>
        <ul className="space-y-2 mb-4">
          <li className="text-sm text-gray-600 flex items-start">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>千万级保障，最高 5000 万</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>火灾责任翻倍</span>
          </li>
        </ul>
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">最低保费</p>
          <p className="text-lg font-bold text-gray-900">1488 元/年</p>
        </div>
      </div>
    </div>
  </div>
);

// 产品展示区块通用包装
interface ProductSectionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bgColor?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  icon,
  title,
  subtitle,
  children,
  bgColor = "bg-white",
}) => (
  <section className={`${bgColor} rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm`}>
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
    {children}
  </section>
);

// 主产品展示组件
export const ProductShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 1. 医疗险 */}
      <ProductSection
        icon={<Heart className="w-6 h-6" />}
        title="医疗险"
        subtitle="解决看病贵的后顾之忧"
      >
        <MedicalPlans />
        <ValueAddedServices />
        <FamilyDiscount />
      </ProductSection>

      {/* 2. 重疾险 */}
      <ProductSection
        icon={<Shield className="w-6 h-6" />}
        title="重疾险"
        subtitle="确诊即赔，保单实际升值"
        bgColor="bg-gradient-to-br from-blue-50/50 to-white"
      >
        <CriticalIllnessAdvantages />
        <CriticalIllnessCase />
      </ProductSection>

      {/* 3. 意外险 */}
      <ProductSection
        icon={<Zap className="w-6 h-6" />}
        title="意外险"
        subtitle="全年龄段覆盖"
      >
        <AccidentInsurance />
      </ProductSection>

      {/* 4. 车险 */}
      <ProductSection
        icon={<Car className="w-6 h-6" />}
        title="车险"
        subtitle="多渠道报价，一站式服务"
        bgColor="bg-gradient-to-br from-gray-50/50 to-white"
      >
        <CarInsurance />
      </ProductSection>

      {/* 5. 养老金 */}
      <ProductSection
        icon={<TrendingUp className="w-6 h-6" />}
        title="养老金"
        subtitle="银行 VS 保险，哪个更划算？"
      >
        <PensionInsurance />
      </ProductSection>

      {/* 6. 定期寿险 */}
      <ProductSection
        icon={<Users className="w-6 h-6" />}
        title="定期寿险"
        subtitle="低保费高杠杆"
        bgColor="bg-gradient-to-br from-green-50/50 to-white"
      >
        <TermLifeInsurance />
      </ProductSection>

      {/* 7. 团体险 */}
      <ProductSection
        icon={<Building2 className="w-6 h-6" />}
        title="团体险"
        subtitle="企业员工福利一站式方案"
      >
        <GroupInsurance />
      </ProductSection>

      {/* 8. 财产险 */}
      <ProductSection
        icon={<Home className="w-6 h-6" />}
        title="财产险"
        subtitle="守护您的家"
        bgColor="bg-gradient-to-br from-amber-50/50 to-white"
      >
        <PropertyInsurance />
      </ProductSection>
    </div>
  );
};
