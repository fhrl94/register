<template>
  <div class="add-user component-container media-padding">
    <div style="display:none;">
      <!-- <scroll class="scroll-wrap"> -->
      <el-form ref="form" :model="form" :rules="rules" label-width="90px">
        <el-row :gutter="20">
          <!-- <el-col :md="12" class="maxwidth">
          <el-form-item label="账户名 :" prop="accountName">
            <el-input
              @blur="accountNameBlur"
              v-model="form.accountName"
              :disabled="editDisable || quotaDisable"
              placeholder="账户名"
            ></el-input>
          </el-form-item>
          </el-col>-->
          <el-col :md="12" class="maxwidth">
            <el-form-item label="真实姓名 :" prop="trueName">
              <el-input v-model="form.trueName" :disabled="editDisable || quotaDisable" placeholder="真实姓名"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <!-- <el-col :md="12" class="maxwidth">
          <el-form-item label="工号 :">
            <el-input v-model="form.userNum" :disabled="quotaDisable" placeholder="工号"></el-input>
          </el-form-item>
          </el-col>-->
          <el-col :md="12" class="maxwidth">
            <el-form-item label="性别 :" prop="sex">
              <el-select
                v-model="form.sex"
                :disabled="repeatDisabled || quotaDisable"
                placeholder="选择性别"
                style="width:100%;"
              >
                <el-option label="男" value="0"></el-option>
                <el-option label="女" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" v-if="!quotaDisable">
          <el-col :md="12" class="maxwidth">
            <el-form-item label="身份证号 :">
              <el-input v-model="form.idCardNum" :disabled="repeatDisabled" placeholder="身份证号"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col :md="12" class="maxwidth">
          <el-form-item label="密码 :">
            <el-input v-model="form.password" :disabled="repeatDisabled" placeholder="密码"></el-input>
          </el-form-item>
          </el-col>-->
        </el-row>
        <!-- 保A配额 -->
        <!-- <el-row v-if="editDisable || quotaDisable" :gutter="20">
        <el-col :md="12" class="maxwidth">
          <el-form-item label="保A配额 :">
            <el-input v-model="form.baoAquota" placeholder="保A配额"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12" class="maxwidth">
          <el-form-item label="跟踪配额 :">
            <el-input v-model="form.followQuota" placeholder="跟踪配额"></el-input>
          </el-form-item>
        </el-col>
        </el-row>-->
        <!-- <el-row :gutter="20" v-if="!quotaDisable">
        <el-col :md="12" class="maxwidth">
          <el-form-item label="部门 :" prop="dept">
            <select-department
              @upDeptId="upDeptId"
              :prepend="false"
              :echoDept="echoDept"
              :key="key_dept"
              v-model="form.dept"
              style="width:100%"
            ></select-department>
          </el-form-item>
        </el-col>
        <el-col :md="12" class="maxwidth">
          <el-form-item label="职位 :" prop="job">
            <el-select v-model="form.job" :disabled="repeatDisabled" placeholder="选择职位" style="width:100%">
              <el-option v-for="item in form.jobList" :key="item.id" :label="item.code_desc" :value="item.code_val"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        </el-row>-->
        <el-row :gutter="20" v-if="!quotaDisable">
          <el-col :md="12" class="maxwidth">
            <el-form-item label="手机 :">
              <el-input v-model="form.phone" :disabled="repeatDisabled" placeholder="手机号"></el-input>
            </el-form-item>
          </el-col>

          <!-- <el-col :md="12" class="maxwidth">
          <el-form-item label="职位统称 :" prop="duties">
            <el-select v-model="form.duties" :disabled="repeatDisabled" placeholder="选择职位统称" style="width:100%">
              <el-option label="员工" value="10"></el-option>
              <el-option label="主管" value="20"></el-option>
              <el-option label="经理" value="30"></el-option>
              <el-option label="总监" value="40"></el-option>
              <el-option label="副总经理" value="50"></el-option>
              <el-option label="总经理" value="60"></el-option>
            </el-select>
          </el-form-item>
          </el-col>-->
        </el-row>
        <el-row :gutter="20" v-if="!quotaDisable">
          <el-col :md="12" class="maxwidth">
            <el-form-item label="Hi号 :">
              <el-input v-model="form.hi" :disabled="repeatDisabled" placeholder="Hi号"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col :md="12" class="maxwidth">
          <el-form-item label="座机 :">
            <el-input v-model="form.extention" :disabled="repeatDisabled" placeholder="座机号"></el-input>
          </el-form-item>
          </el-col>-->
        </el-row>
        <el-row :gutter="20" v-if="!quotaDisable">
          <el-col :md="12" class="maxwidth">
            <el-form-item label="入职日期 :" prop="entryDate">
              <el-date-picker
                v-model="form.entryDate"
                :disabled="repeatDisabled"
                value-format="yyyy/MM/dd"
                type="date"
                placeholder="选择入职日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :md="12" class="maxwidth">
            <el-form-item label="入司日期 :" prop="EX_RSSJ">
              <el-date-picker
                v-model="form.EX_RSSJ"
                :disabled="repeatDisabled"
                value-format="yyyy/MM/dd"
                type="date"
                placeholder="选择入司日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 转正日期 -->
        <el-row v-if="editDisable" :gutter="20">
          <el-col :md="12" class="maxwidth">
            <el-form-item label="转正日期 :">
              <el-date-picker
                v-model="form.turnRealDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择转正日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :md="12" class="maxwidth">
            <el-form-item label="离职日期 :">
              <el-date-picker
                v-model="form.leaveDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择离职日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 合同时间 -->
        <!-- <el-row v-if="!quotaDisable" :gutter="20">
        <el-col :md="12" class="maxwidth">
          <el-form-item label="合同开始 :">
            <el-date-picker
              v-model="form.EX_HTKSRQ"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择合同开始日期"
              style="width:100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :md="12" class="maxwidth">
          <el-form-item label="合同到期 :">
            <el-date-picker
              v-model="form.EX_HTJSRQ"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择合同到期日期"
              style="width:100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        </el-row>-->
        <!-- <el-row :gutter="20" v-if="!quotaDisable">
        <el-col :md="12" class="maxwidth">
          <el-form-item label="是否允许打电话 :" label-width="135px">
            <el-checkbox @change="canCallChange" v-model="form.canCall" :disabled="repeatDisabled" label="允许打电话" border></el-checkbox>
            <el-button @click.native="getBaiduID" v-if="showBaiduisBtn&&editDisable" type="warning" size="mini">获取百度id</el-button>
          </el-form-item>
        </el-col>
        <el-col :md="12" v-if="editDisable" class="maxwidth">
          <el-form-item label="百度ID :">
            <el-input v-model="form.baiduID" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12" class="maxwidth">
          <el-form-item label="角色 :" prop="role">
            <el-select v-model="form.role" :disabled="repeatDisabled" placeholder="选择角色" style="width:100%;" filterable>
              <el-option v-for="item in form.roleList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        </el-row>-->
        <!-- <el-row :gutter="20" v-if="!quotaDisable">
        <el-col :md="12" class="maxwidth">
          <el-form-item label="序列 :">
            <el-select
              @focus="getRank(form.dept)"
              v-model="form.rank"
              :disabled="repeatDisabled"
              placeholder="选择序列"
              style="width:100%;"
            >
              <el-option v-for="item in form.rankList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="12" class="maxwidth">
          <el-form-item label="所属地区 :" prop="inArea">
            <el-select v-model="form.inArea" :disabled="repeatDisabled" placeholder="所属地区" style="width: 100%;">
              <el-option v-for="item in form.inAreaList" :key="item.id" :value="item.id" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        </el-row>-->
        <!-- <el-row :gutter="20" v-if="!quotaDisable">
        <el-col :md="12" class="maxwidth">
          <el-form-item label="级别 :" prop="EX_JB">
            <el-select v-model="form.EX_JB" :disabled="repeatDisabled" placeholder="选择级别" style="width:100%;">
              <el-option v-for="(label, value) in GradeDict" :key="value" :label="label" :value="value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="12" class="maxwidth">
          <el-form-item label="上级领导" required>
            <el-input disabled v-model="form.superior_name" class="input-btn"></el-input>
            <el-button @click.native.prevent="selAllotUserDialog = true" type="primary">选择</el-button>
          </el-form-item>
        </el-col>
        </el-row>-->
        <el-row :gutter="20" v-if="!quotaDisable">
          <el-col :md="12" class="maxwidth">
            <el-form-item label="招行卡号 :">
              <el-input v-model="form.EX_ZHYHK" :disabled="repeatDisabled" placeholder="招行卡号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" class="maxwidth">
            <el-form-item label="中行卡号 :">
              <el-input v-model="form.EX_ZGYHYHK" :disabled="repeatDisabled" placeholder="中银卡号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row :gutter="20" v-if="!quotaDisable">
        <el-col :md="12" class="maxwidth">
          <el-form-item label="班次 :" prop="classes_id">
            <el-select v-model="form.classes_id" :disabled="repeatDisabled" placeholder="选择班次" style="width:100%">
              <el-option v-for="item in classes" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="12" class="maxwidth" v-if="!quotaDisable">
          <el-form-item label="虚拟入职 :" prop="EX_RSSJ">
            <el-date-picker
              v-model="form.EX_XNRZ"
              :disabled="repeatDisabled"
              value-format="yyyy/MM/dd"
              type="date"
              placeholder="选择虚拟入职日期"
              style="width:100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        </el-row>-->
        <div class="text-right" style="max-width:900px;">
          <el-button type="primary" @click.native="submit('form')" :disabled="repeatDisabled">提 交</el-button>
        </div>
      </el-form>
      <!-- </scroll> -->
      <!-- 选择人员弹窗 -->
      <!-- <el-dialog :append-to-body="true" :visible.sync="selAllotUserDialog" title="选择人员" width="550px">
      <select-user :key="key_seluser" @closeDialog="selAllotUserDialog=false" @userId="getAllotUserId"></select-user>
      </el-dialog>-->
    </div>
    <h3>
      武汉百捷集团股份有限公司
      <br>员工个人信息表
    </h3>

    <el-form ref="form" :model="form" :rules="rules" label-width="90px">
      <el-tabs :tab-position="'top'" style="height: 200px;">
        <el-tab-pane label="一、基本信息">
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="真实姓名 :" prop="trueName">
                <el-input v-model="form.trueName" :disabled="editDisable || quotaDisable" placeholder="真实姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="性别 :" prop="sex">
                <el-select
                  v-model="form.sex"
                  :disabled="repeatDisabled || quotaDisable"
                  placeholder="选择性别"
                  style="width:100%;"
                >
                  <el-option label="男" value="0"></el-option>
                  <el-option label="女" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="民族 :" prop="nationality">
                <el-select
                  v-model="form.nationality"
                  :disabled="repeatDisabled || quotaDisable"
                  placeholder="选择民族"
                  style="width:100%;"
                  filterable
                >
                  <el-option label="汉族" value="汉族"></el-option>
                  <el-option label="蒙古族" value="蒙古族"></el-option>
                  <el-option label="回族" value="回族"></el-option>
                  <el-option label="藏族" value="藏族"></el-option>
                  <el-option label="维吾尔族" value="维吾尔族"></el-option>
                  <el-option label="苗族" value="苗族"></el-option>
                  <el-option label="彝族" value="彝族"></el-option>
                  <el-option label="壮族" value="壮族"></el-option>
                  <el-option label="布依族" value="布依族"></el-option>
                  <el-option label="朝鲜族" value="朝鲜族"></el-option>
                  <el-option label="满族" value="满族"></el-option>
                  <el-option label="侗族" value="侗族"></el-option>
                  <el-option label="瑶族" value="瑶族"></el-option>
                  <el-option label="白族" value="白族"></el-option>
                  <el-option label="土家族" value="土家族"></el-option>
                  <el-option label="哈尼族" value="哈尼族"></el-option>
                  <el-option label="哈萨克族" value="哈萨克族"></el-option>
                  <el-option label="傣族" value="傣族"></el-option>
                  <el-option label="黎族" value="黎族"></el-option>
                  <el-option label="傈僳族" value="傈僳族"></el-option>
                  <el-option label="佤族" value="佤族"></el-option>
                  <el-option label="畲族" value="畲族"></el-option>
                  <el-option label="高山族" value="高山族"></el-option>
                  <el-option label="拉祜族" value="拉祜族"></el-option>
                  <el-option label="水族" value="水族"></el-option>
                  <el-option label="东乡族" value="东乡族"></el-option>
                  <el-option label="纳西族" value="纳西族"></el-option>
                  <el-option label="景颇族" value="景颇族"></el-option>
                  <el-option label="柯尔克孜族" value="柯尔克孜族"></el-option>
                  <el-option label="土族" value="土族"></el-option>
                  <el-option label="达斡尔族" value="达斡尔族"></el-option>
                  <el-option label="仫佬族" value="仫佬族"></el-option>
                  <el-option label="羌族" value="羌族"></el-option>
                  <el-option label="布朗族" value="布朗族"></el-option>
                  <el-option label="撒拉族" value="撒拉族"></el-option>
                  <el-option label="毛南族" value="毛南族"></el-option>
                  <el-option label="仡佬族" value="仡佬族"></el-option>
                  <el-option label="锡伯族" value="锡伯族"></el-option>
                  <el-option label="阿昌族" value="阿昌族"></el-option>
                  <el-option label="普米族" value="普米族"></el-option>
                  <el-option label="塔吉克族" value="塔吉克族"></el-option>
                  <el-option label="怒族" value="怒族"></el-option>
                  <el-option label="乌孜别克族" value="乌孜别克族"></el-option>
                  <el-option label="俄罗斯族" value="俄罗斯族"></el-option>
                  <el-option label="鄂温克族" value="鄂温克族"></el-option>
                  <el-option label="德昂族" value="德昂族"></el-option>
                  <el-option label="保安族" value="保安族"></el-option>
                  <el-option label="裕固族" value="裕固族"></el-option>
                  <el-option label="京族" value="京族"></el-option>
                  <el-option label="塔塔尔族" value="塔塔尔族"></el-option>
                  <el-option label="独龙族" value="独龙族"></el-option>
                  <el-option label="鄂伦春族" value="鄂伦春族"></el-option>
                  <el-option label="赫哲族" value="赫哲族"></el-option>
                  <el-option label="门巴族" value="门巴族"></el-option>
                  <el-option label="珞巴族" value="珞巴族"></el-option>
                  <el-option label="基诺族" value="基诺族"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="出生日期 :" prop="entryDate">
                <el-date-picker
                  v-model="form.entryDate"
                  :disabled="repeatDisabled"
                  value-format="yyyy/MM/dd"
                  type="date"
                  placeholder="选择出生日期"
                  style="width:100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="政治面貌 :" prop="politicalStatus">
                <el-select
                  v-model="form.politicalStatus"
                  :disabled="repeatDisabled || quotaDisable"
                  placeholder="政治面貌"
                  style="width:100%;"
                  filterable
                >
                  <el-option label="群众" value="群众"></el-option>
                  <el-option label="中共党员" value="中共党员"></el-option>
                  <el-option label="中共预备党员" value="中共预备党员"></el-option>
                  <el-option label="共青团员" value="共青团员"></el-option>
                  <el-option label="民革党员" value="民革党员"></el-option>
                  <el-option label="民盟盟员" value="民盟盟员"></el-option>
                  <el-option label="民建会员" value="民建会员"></el-option>
                  <el-option label="民进会员" value="民进会员"></el-option>
                  <el-option label="农工党党员" value="农工党党员"></el-option>
                  <el-option label="致公党党员" value="致公党党员"></el-option>
                  <el-option label="九三学社社员" value="九三学社社员"></el-option>
                  <el-option label="台盟盟员" value="台盟盟员"></el-option>
                  <el-option label="无党派人士" value="无党派人士"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :md="12" class="maxwidth">
              <el-form-item label="婚姻状况 :" prop="maritalStatus">
                <el-select
                  v-model="form.maritalStatus"
                  :disabled="repeatDisabled || quotaDisable"
                  placeholder="婚姻状况"
                  style="width:100%;"
                  filterable
                >
                  <el-option label="已婚" value="已婚"></el-option>
                  <el-option label="未婚" value="未婚"></el-option>
                  <el-option label="离异" value="离异"></el-option>
                  <el-option label="再婚" value="再婚"></el-option>
                  <el-option label="丧偶" value="丧偶"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" v-if="!quotaDisable">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="电子邮箱 :">
                <el-input v-model="form.email" :disabled="repeatDisabled" placeholder="电子邮箱"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="身份证号 :">
                <el-input v-model="form.IDNum" :disabled="repeatDisabled" placeholder="身份证号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20" v-if="!quotaDisable">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="紧急联系人 :">
                <el-input v-model="form.emergencyContactPeople " :disabled="repeatDisabled" placeholder="紧急联系人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="联系人关系 :">
                <el-input v-model="form.emergencyContactRelation " :disabled="repeatDisabled" placeholder="联系人关系"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" v-if="!quotaDisable">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="联系人电话 :">
                <el-input v-model="form.emergencyContactTel " :disabled="repeatDisabled" placeholder="联系人电话"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="现住地址 :" prop="nowAddress">
                <el-input v-model="form.nowAddress" :disabled="editDisable || quotaDisable" placeholder="现住地址"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="家庭地址 :" prop="familyAddress">
                <el-input v-model="form.familyAddress" :disabled="editDisable || quotaDisable" placeholder="家庭地址"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="身份证地址 :" prop="IDCardAddress">
                <el-input v-model="form.IDCardAddress" :disabled="editDisable || quotaDisable" placeholder="身份证地址"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="二、教育经历">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in educationExperience"
              :key="index"
              :timestamp="activity.startDate"
            >
              <span>
                {{activity.startDate}}到{{activity.endDate}}
                <el-divider direction="vertical"></el-divider>
              </span>
              <span>学校名称{{activity.schoolName}}</span>
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="small"
                @click="editIns(activity, 'educationExperienceIns','showEducationExperienceIns')"
              ></el-button>
              <el-button
                type="primary"
                icon="el-icon-delete-solid"
                size="small"
                @click="delIns(activity, educationExperience)"
              ></el-button>
            </el-timeline-item>
          </el-timeline>
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            size="small"
            v-if="!showEducationExperienceIns"
            @click="addIns('educationExperienceIns','showEducationExperienceIns')"
          ></el-button>
          <!-- <label style="color: #DCDFE6">（请从最高教育经历开始填写）</label> -->
          <!-- 第一个教育经历 -->
          <div
            style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;"
            v-if="showEducationExperienceIns"
          >
            <el-form ref="educationExperienceIns" :model="educationExperienceIns" label-width="90px">
              <el-row :gutter="20" v-if="!quotaDisable">
                <el-col :md="12" class="maxwidth">
                  <el-form-item label="起始日期 :" prop="startDate">
                    <el-date-picker
                      v-model="educationExperienceIns.startDate"
                      :disabled="repeatDisabled"
                      value-format="yyyy/MM/dd"
                      type="date"
                      placeholder="选择起始日期"
                      style="width:100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :md="12" class="maxwidth">
                  <el-form-item label="终止日期 :" prop="endDate">
                    <el-date-picker
                      v-model="educationExperienceIns.endDate"
                      :disabled="repeatDisabled"
                      value-format="yyyy/MM/dd"
                      type="date"
                      placeholder="选择终止日期"
                      style="width:100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :md="12" class="maxwidth">
                  <el-form-item label="学校名称 :" prop="schoolName01">
                    <el-input
                      v-model="educationExperienceIns.schoolName"
                      :disabled="editDisable || quotaDisable"
                      placeholder="学校名称"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :md="12" class="maxwidth">
                  <el-form-item label="专业 :" prop="profession01">
                    <el-input
                      v-model="educationExperienceIns.profession"
                      :disabled="editDisable || quotaDisable"
                      placeholder="学校名称"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :md="12" class="maxwidth">
                  <el-form-item label="学历 :" prop="eduBackground01">
                    <el-input
                      v-model="educationExperienceIns.eduBackground"
                      :disabled="editDisable || quotaDisable"
                      placeholder="学历"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :md="12" class="maxwidth">
                  <el-form-item label="学习性质 :" prop="learningNature01">
                    <el-input
                      v-model="educationExperienceIns.learningNature"
                      :disabled="editDisable || quotaDisable"
                      placeholder="学校名称"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :md="12" class="maxwidth">
                  <el-form-item label="证书或奖励 :" prop="certificatesOrReward01">
                    <el-input
                      v-model="educationExperienceIns.certificatesOrReward"
                      :disabled="editDisable || quotaDisable"
                      placeholder="学历"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="saveToList(educationExperienceIns, educationExperience, 'showEducationExperienceIns')"
                  >保存</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="三、培训经历">
          <label style="color: #DCDFE6">（请从最近培训经历开始填写）</label>
          <!-- 培训经历01 -->
          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="起始日期 :" prop="trainingStartDate01">
                  <el-date-picker
                    v-model="form.trainingStartDate"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择起始日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="终止日期 :" prop="trainingEndDate01">
                  <el-date-picker
                    v-model="form.trainingEndDate01"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择终止日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="培训机构 :" prop="trainingOrganizationName01">
                  <el-input
                    v-model="form.trainingOrganizationName01"
                    :disabled="editDisable || quotaDisable"
                    placeholder="培训机构"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="培训时长 :" prop="trainingDuration01">
                  <el-input
                    v-model="form.trainingDuration01"
                    :disabled="editDisable || quotaDisable"
                    placeholder="培训时长"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="培训地点:" prop="trainingAddress01">
                  <el-input v-model="form.trainingAddress01" :disabled="editDisable || quotaDisable" placeholder="培训地点"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证书名称 :" prop="certificateName01">
                  <el-input v-model="form.certificateName01" :disabled="editDisable || quotaDisable" placeholder="证书名称"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <!-- 培训经历02 -->
          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="起始日期 :" prop="trainingStartDate01">
                  <el-date-picker
                    v-model="form.trainingStartDate"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择起始日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="终止日期 :" prop="trainingEndDate02">
                  <el-date-picker
                    v-model="form.trainingEndDate02"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择终止日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="培训机构 :" prop="trainingOrganizationName02">
                  <el-input
                    v-model="form.trainingOrganizationName02"
                    :disabled="editDisable || quotaDisable"
                    placeholder="培训机构"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="培训时长 :" prop="trainingDuration02">
                  <el-input
                    v-model="form.trainingDuration02"
                    :disabled="editDisable || quotaDisable"
                    placeholder="培训时长"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="培训地点:" prop="trainingAddress02">
                  <el-input v-model="form.trainingAddress02" :disabled="editDisable || quotaDisable" placeholder="培训地点"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证书名称 :" prop="certificateName02">
                  <el-input v-model="form.certificateName02" :disabled="editDisable || quotaDisable" placeholder="证书名称"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>

        <el-tab-pane label="四、工作经历">
          <label style="color: #DCDFE6">（请从最近工作经历开始填写）</label>
          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <!-- 工作经历01 -->
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="起始日期 :" prop="workStartDate01">
                  <el-date-picker
                    v-model="form.workStartDate01"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择起始日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="终止日期 :" prop="workEndDate01">
                  <el-date-picker
                    v-model="form.workEndDate01"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择终止日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="公司名称 :" prop="workCompanyName01">
                  <el-input v-model="form.workCompanyName01" :disabled="editDisable || quotaDisable" placeholder="公司名称"></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作职位 :" prop="workJob01">
                  <el-input v-model="form.workJob01" :disabled="editDisable || quotaDisable" placeholder="工作职位"></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作内容 :" prop="workContent01">
                  <el-input v-model="form.workContent01" :disabled="editDisable || quotaDisable" placeholder="工作内容"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证人+职务" prop="workAttestor01">
                  <el-input v-model="form.workAttestor01" :disabled="editDisable || quotaDisable" placeholder="证明人+职务"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证明人电话 :" prop="AttestorTel01">
                  <el-input v-model="form.AttestorTel01" :disabled="editDisable || quotaDisable" placeholder="证明人电话"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <!-- 工作经历02 -->
          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="起始日期 :" prop="workStartDate02">
                  <el-date-picker
                    v-model="form.workStartDate02"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择起始日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="终止日期 :" prop="workEndDate02">
                  <el-date-picker
                    v-model="form.workEndDate02"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择终止日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="公司名称 :" prop="workCompanyName02">
                  <el-input v-model="form.workCompanyName02" :disabled="editDisable || quotaDisable" placeholder="公司名称"></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作职位 :" prop="workJob02">
                  <el-input v-model="form.workJob02" :disabled="editDisable || quotaDisable" placeholder="工作职位"></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作内容 :" prop="workContent02">
                  <el-input v-model="form.workContent02" :disabled="editDisable || quotaDisable" placeholder="工作内容"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证人+职务" prop="workAttestor02">
                  <el-input v-model="form.workAttestor02" :disabled="editDisable || quotaDisable" placeholder="证明人+职务"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证明人电话 :" prop="AttestorTel02">
                  <el-input v-model="form.AttestorTel02" :disabled="editDisable || quotaDisable" placeholder="证明人电话"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <!-- 工作经历03 -->
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="起始日期 :" prop="workStartDate03">
                  <el-date-picker
                    v-model="form.workStartDate03"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择起始日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="终止日期 :" prop="workEndDate03">
                  <el-date-picker
                    v-model="form.workEndDate03"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择终止日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="公司名称 :" prop="workCompanyName03">
                  <el-input v-model="form.workCompanyName03" :disabled="editDisable || quotaDisable" placeholder="公司名称"></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作职位 :" prop="workJob03">
                  <el-input v-model="form.workJob03" :disabled="editDisable || quotaDisable" placeholder="工作职位"></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作内容 :" prop="workContent03">
                  <el-input v-model="form.workContent03" :disabled="editDisable || quotaDisable" placeholder="工作内容"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证人+职务" prop="workAttestor 03">
                  <el-input v-model="form.workAttestor03" :disabled="editDisable || quotaDisable" placeholder="证明人+职务"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="证明人电话 :" prop="AttestorTel03">
                  <el-input v-model="form.AttestorTel03" :disabled="editDisable || quotaDisable" placeholder="证明人电话"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="五、家庭成员">
          <!-- 家庭成员01 -->
          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="成员姓名 :" prop="familyMemberName01">
                  <el-input
                    v-model="form.familyMemberName01"
                    :disabled="editDisable || quotaDisable"
                    placeholder="成员姓名"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="与本人关系 :" prop="RelationshipWithMe01">
                  <el-input
                    v-model="form.RelationshipWithMe01"
                    :disabled="editDisable || quotaDisable"
                    placeholder="与本人关系"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="出生日期 :" prop="familyMemberBorn01">
                  <el-date-picker
                    v-model="form.familyMemberBorn01"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择出生日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作单位 :" prop="memberWorkUnit01">
                  <el-input v-model="form.memberWorkUnit01" :disabled="editDisable || quotaDisable" placeholder="工作单位"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="职务 :" prop="memberJob01">
                  <el-input v-model="form.memberJob01" :disabled="editDisable || quotaDisable" placeholder="职务"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="联系电话:" prop="memberTel01">
                  <el-input v-model="form.memberTel01" :disabled="editDisable || quotaDisable" placeholder="培训地点"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <!-- 家庭成员02 -->
          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="成员姓名 :" prop="familyMemberName02">
                  <el-input
                    v-model="form.familyMemberName02"
                    :disabled="editDisable || quotaDisable"
                    placeholder="成员姓名"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="与本人关系 :" prop="RelationshipWithMe02">
                  <el-input
                    v-model="form.RelationshipWithMe02"
                    :disabled="editDisable || quotaDisable"
                    placeholder="与本人关系"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="出生日期 :" prop="familyMemberBorn02">
                  <el-date-picker
                    v-model="form.familyMemberBorn02"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择出生日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作单位 :" prop="memberWorkUnit02">
                  <el-input v-model="form.memberWorkUnit02" :disabled="editDisable || quotaDisable" placeholder="工作单位"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="职务 :" prop="memberJob02">
                  <el-input v-model="form.memberJob02" :disabled="editDisable || quotaDisable" placeholder="职务"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="联系电话:" prop="memberTel02">
                  <el-input v-model="form.memberTel02" :disabled="editDisable || quotaDisable" placeholder="培训地点"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <!-- 家庭成员03 -->
          <div style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;">
            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="成员姓名 :" prop="familyMemberName03">
                  <el-input
                    v-model="form.familyMemberName03"
                    :disabled="editDisable || quotaDisable"
                    placeholder="成员姓名"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :md="12" class="maxwidth">
                <el-form-item label="与本人关系 :" prop="RelationshipWithMe03">
                  <el-input
                    v-model="form.RelationshipWithMe03"
                    :disabled="editDisable || quotaDisable"
                    placeholder="与本人关系"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20" v-if="!quotaDisable">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="出生日期 :" prop="familyMemberBorn03">
                  <el-date-picker
                    v-model="form.familyMemberBorn03"
                    :disabled="repeatDisabled"
                    value-format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择出生日期"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="工作单位 :" prop="memberWorkUnit03">
                  <el-input v-model="form.memberWorkUnit03" :disabled="editDisable || quotaDisable" placeholder="工作单位"></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="12" class="maxwidth">
                <el-form-item label="职务 :" prop="memberJob03">
                  <el-input v-model="form.memberJob03" :disabled="editDisable || quotaDisable" placeholder="职务"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :md="12" class="maxwidth">
                <el-form-item label="联系电话:" prop="memberTel03">
                  <el-input v-model="form.memberTel03" :disabled="editDisable || quotaDisable" placeholder="培训地点"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div class="text-right" style="max-width:900px; margin-top:20px; margin-bottom:40px">
            <el-button type="primary" @click.native="submit('form')" :disabled="repeatDisabled">提 交</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
// import SelectDepartment from 'base/selectDepartment/selectDepartment'
// import SelectUser from 'base/selectUser/selectUser'
// import { getRoles, getByCode } from 'api/getOptions'
// import { timeFormat1 } from 'common/js/filters'
// import { getGradeDict } from 'common/js/mixin'
// import Scroll from 'base/scroll/scroll'

export default {
  // mixins: [getGradeDict],
  props: {
    editDisable: {
      // 编辑人员信息
      type: Boolean,
      default: false
    },
    quotaDisable: {
      // 编辑配额
      type: Boolean,
      default: false
    },
    echoUserInfo: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      key_seluser: '',
      selAllotUserDialog: false,
      key_dept: '',
      echoDept: '',
      repeatDisabled: false,
      labelWidth: '90px',
      showBaiduisBtn: false,
      form: {
        dept: '',
        accountName: '',
        trueName: '',
        userNum: '',
        sex: '',
        idCardNum: '',
        password: '',
        role: '',
        roleList: [],
        job: '',
        jobList: [],
        phone: '',
        extention: '',
        hi: '',
        entryDate: '',
        EX_RSSJ: '',
        canCall: false,
        leaveDate: '',
        turnRealDate: '',
        baoAquota: '',
        followQuota: '',
        baiduID: '',
        EX_ZHYHK: '',
        EX_ZGYHYHK: '',
        rank: '',
        rankList: [],
        jbList: [],
        inArea: 'HUB027',
        inAreaList: [],
        duties: '10',
        EX_JB: '52441a9f343211e9813e00e066be4061', // 默认员工
        superior_name: '',
        superior_id: '',
        EX_HTKSRQ: '', // 合同开始日期
        EX_HTJSRQ: '' // 合同结束日期
      },
      classes: [],
      educationExperienceIns: {
        startDate: '',
        endDate: '',
        schoolName: '',
        profession: '',
        eduBackground: '',
        learningNature: '',
        certificatesOrReward: '',
        isEdit: false
      },
      educationExperience: [],
      showEducationExperienceIns: true,
      rules: {
        accountName: [],
        trueName: [],
        userNum: [],
        sex: [],
        idCardNum: [],
        role: [],
        job: [],
        duties: [],
        dept: [],
        entryDate: [],
        inArea: [],
        EX_XNRZ: []
      }
    }
  },
  created() {
    for (let key in this.rules) {
      if (
        key === 'sex' ||
        key === 'role' ||
        key === 'job' ||
        key === 'duties' ||
        key === 'dept' ||
        key === 'inArea'
      ) {
        this.rules[key].push({
          required: true,
          message: '请选择必选项',
          trigger: 'change'
        })
      } else {
        this.rules[key].push({
          required: true,
          message: '请输入必填项内容',
          trigger: 'blur'
        })
      }
    }
    // this._getRoles()
    // this._getPositions()
    // this._getJB()
    if (!this.editDisable && !this.quotaDisable) {
      return
    }
    this.echoDept = this.echoUserInfo.deptfullname
    this.key_dept = new Date() + ''
    let receiveData = {
      canCall: this.echoUserInfo.dept === '9999' ? true : false, //eslint-disable-line
      baiduID: this.echoUserInfo.bdcall_id,
      accountName: this.echoUserInfo.uname,
      trueName: this.echoUserInfo.true_name,
      userNum: this.echoUserInfo.workid,
      idCardNum: this.echoUserInfo.SFZ,
      password: this.echoUserInfo.pwd, // 新密码
      sex: this.echoUserInfo.sex + '',
      extention: this.echoUserInfo.office_phone,
      phone: this.echoUserInfo.mobile,
      dept: this.echoUserInfo.deptcode,
      job: this.echoUserInfo.position,
      role: this.echoUserInfo.rid,
      followQuota: this.echoUserInfo.max_b,
      baoAquota: this.echoUserInfo.max_a,
      hi: this.echoUserInfo.hi,
      leaveDate: this.timeFormat1(this.echoUserInfo.resignationtime),
      turnRealDate: this.timeFormat1(this.echoUserInfo.turningtime),
      entryDate: this.timeFormat1(this.echoUserInfo.hiredate),
      EX_ZHYHK: this.echoUserInfo.EX_ZHYHK,
      EX_ZGYHYHK: this.echoUserInfo.EX_ZGYHYHK,
      rank: this.echoUserInfo.sequence,
      inArea: this.echoUserInfo.place_id,
      duties:
        this.echoUserInfo.duties == null ? '10' : this.echoUserInfo.duties + '',
      EX_RSSJ: this.echoUserInfo.EX_RSSJ,
      EX_XNRZ: this.echoUserInfo.EX_XNRZ,
      EX_JB: this.echoUserInfo.EX_JB == null ? 4 : this.echoUserInfo.EX_JB,
      superior_id: this.echoUserInfo.superior_id,
      superior_name: this.echoUserInfo.superior_name,
      classes_id: this.echoUserInfo.classes_id
    }
    this.form = Object.assign({}, this.form, receiveData)
    this.getRank(this.form.dept) // 序列回显
  },
  mounted() {
    // this._getInAreaList()
    // this._getclasses()
  },
  methods: {
    canCallChange(val) {
      if (val) {
        this.showBaiduisBtn = true
      } else {
        this.showBaiduisBtn = false
      }
    },
    saveToList(ins, insList, showIns) {
      if (ins.isEdit === true) {
        let tmp = insList.filter(elem => {
          return elem.isEdit === true
        })
        if (tmp.length === 1) {
          ins.isEdit = false
          insList[insList.indexOf(tmp[0])] = ins
        } else {
          throw new Error('编辑出错')
        }
      } else if (insList.indexOf(ins) === -1) {
        insList.push(ins)
      }
      insList.sort( (ins1, ins2) => {
        return ins1.startDate - ins2.startDate
      })
      this.$set(this, showIns, false)
      ins = {}
    },
    editIns(ins, InsPrototype, showIns) {
      ins.isEdit = true
      this.$set(this, InsPrototype, ins)
      this.$set(this, showIns, true)
    },
    addIns(ins, showIns){
      this.$set(this, ins, {isEdit: false})
      this.$set(this, showIns, true)
    },
    delIns(ins, insList){
      this.$delete(insList, insList.indexOf(ins))
      // insList.splice(insList.indexOf(ins), 0)
    },
    // getBaiduID() {
    //   let params = {
    //     username: this.echoUserInfo.uname,
    //     uid: this.echoUserInfo.uid
    //   }
    //   this.$post('/User.do?getBdcallId', params).then(res => {
    //     if (res.data.success === true) {
    //       this.form.baiduID = res.data.data
    //     }
    //   })
    // },
    // _getInAreaList() {
    //   this.$get('/System/setQueryArea.do').then(res => {
    //     if (res.data.success) {
    //       this.form.inAreaList = res.data.data
    //     }
    //   })
    // },
    // upDeptId(id) {
    //   this.form.dept = id
    // },
    // accountNameBlur() {
    //   if (!this.form.accountName) {
    //     return
    //   }
    //   this.$post('/Oper.do?SearchName', { name: this.form.accountName }).then(
    //     res => {
    //       if (res.data.success && res.data.data[0].number >= 1) {
    //         this.repeatDisabled = true
    //         this.$message({
    //           message: '名称重复',
    //           type: 'error'
    //         })
    //       } else {
    //         this.repeatDisabled = false
    //       }
    //     }
    //   )
    // },
    // getRank(dept) {
    //   // if (!dept) {
    //   //   this.$message.warning('请先选择部门！')
    //   //   return
    //   // }
    //   this.$post('/Search.do?orgSequence', { deptCode: dept }).then(res => {
    //     if (res.data.success) {
    //       this.form.rankList = res.data.data
    //     }
    //   })
    // },
    // _getJB() {
    //   getByCode(110).then(res => {
    //     if (res.data.success) {
    //       this.form.jbList = res.data.data
    //     }
    //   })
    // },
    // _getRoles() {
    //   getRoles().then(res => {
    //     if (res.data.success) {
    //       this.form.roleList = res.data.data
    //     }
    //   })
    // },
    // _getPositions() {
    //   getByCode(39).then(res => {
    //     if (res.data.success) {
    //       this.form.jobList = res.data.data
    //     }
    //   })
    // },
    // getAllotUserId(id, name) {
    //   this.form.superior_id = id
    //   this.form.superior_name = name
    // },
    submit(formName) {
      let params = {
        dept: this.form.canCall ? '9999' : null,
        name: this.form.accountName, // 账户名
        truename: this.form.trueName,
        workid: this.form.userNum, // 工号
        pwd: this.form.password,
        sex: this.form.sex, // 0.男 1.女
        role: this.form.role,
        mobile: this.form.phone,
        phone: this.form.extention,
        code: this.form.dept, // 最下级部门编号
        position: this.form.job, // 职位
        hi: this.form.hi, // hi号
        hiredate: this.form.entryDate, // 入职日期 ,格式需要后台更改，新增页和编辑页不同
        SFZ: this.form.idCardNum,
        EX_ZHYHK: this.form.EX_ZHYHK,
        EX_ZGYHYHK: this.form.EX_ZGYHYHK,
        sequence: this.form.rank,
        place_id: this.form.inArea,
        EX_RSSJ: this.form.EX_RSSJ,
        EX_XNRZ: this.form.EX_XNRZ,
        EX_JB: this.form.EX_JB,
        duties: this.form.duties,
        superior_id: this.form.superior_id,
        superior_name: this.form.superior_name,
        classes_id: this.form.classes_id
      }
      // console.log(params)
      // return
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (!this.editDisable && !this.quotaDisable) {
            // 新增人员页的提交
            this.$post('/Oper.do?AddInterview', params)
              .then(res => {
                if (res.data[0].success) {
                  this.$message({
                    message: '新增成功',
                    type: 'success'
                  })
                  this.$router.push('/indexPage/userList')
                } else {
                  this.$message({
                    message: '新增失败',
                    type: 'error'
                  })
                }
              })
              .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
              })
          } else {
            // 编辑人员和编辑配额的提交
            let _params = {
              dept: this.form.canCall ? '9999' : null,
              resignationtime: this.form.leaveDate,
              turningtime: this.form.turnRealDate,
              max_a: this.form.baoAquota,
              max_b: this.form.followQuota,
              update_a: this.echoUserInfo.max_a - this.form.baoAquota,
              update_b: this.echoUserInfo.max_b - this.form.followQuota,
              bdcall_id: this.form.baiduID,
              urid: this.echoUserInfo.urid,
              id: this.echoUserInfo.id,
              rid: this.form.role,
              role: this.echoUserInfo.urid
            }
            params = Object.assign({}, params, _params)
            // console.log(params)
            // return
            this.$post('/Oper.do?EditInterview', params)
              .then(res => {
                if (res.data[0].success) {
                  this.$message({
                    message: '更改成功',
                    type: 'success'
                  })
                  // 派发编辑页关闭弹窗事件
                  this.$emit('closeDialog', false)
                } else {
                  this.$message({
                    message: '更改失败',
                    type: 'error'
                  })
                }
              })
              .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
              })
          }
        } else {
          return false
        }
      })
    },
    // _getclasses() {
    //   this.$post('/classes.do?list').then(res => {
    //     if (res.data.success) {
    //       this.classes = res.data.data
    //     }
    //   })
    // },
    timeFormat1(num, bool = true) {
      const reg = /[\u4E00-\u9FA5]{1,}/
      if (num === '.') {
        return '.'
      }
      if (!num) {
        return ''
      }
      if (reg.test(num)) {
        return num
      }
      function add0(m) {
        return m < 10 ? '0' + m : m
      }
      let time = new Date(num)
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let date = time.getDate()
      return year + '-' + add0(month) + (bool ? '-' + add0(date) : '')
    }
  }
  // components: { SelectDepartment, SelectUser }
}
</script>

