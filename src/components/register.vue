<template>
  <div class="add-user component-container media-padding">
    <h3>
      武汉百捷集团股份有限公司
      <br>员工个人信息表
    </h3>
    <div>
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="教育经历"></el-step>
        <el-step title="培训经历"></el-step>
        <el-step title="工作经历"></el-step>
        <el-step title="家庭成员"></el-step>
      </el-steps>
    </div>
    <div class="stepBox" v-if="active === 0">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <!-- <el-tabs :tab-position="'top'" style="height: 200px;"> -->
        <!-- <el-tab-pane label="一、基本信息"> -->
        <div class="stepBox" v-if="active === 0">
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="真实姓名 :" prop="trueName">
                <el-input v-model="form.trueName" placeholder="真实姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="性别 :" prop="sex">
                <el-select v-model="form.sex" placeholder="选择性别" style="width:100%;">
                  <el-option label="男" value="0"></el-option>
                  <el-option label="女" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="民族 :" prop="nationality">
                <el-select v-model="form.nationality" placeholder="选择民族" style="width:100%;" filterable>
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
              <el-form-item label="出生日期 :" prop="userBirthDate" id="BirthDate">
                <el-date-picker
                  v-model="form.userBirthDate"
                  value-format="yyyy/MM/dd"
                  type="date"
                  placeholder="选择出生日期"
                  style="width:100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <!-- 籍贯 -->
            <el-col :md="12" class="maxwidth">
              <el-form-item label="籍贯 :" prop="ancestralHome">
                <el-input v-model="form.ancestralHome" placeholder="格式: XX省 XX市 XX区"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="政治面貌 :" prop="politicalStatus">
                <el-select v-model="form.politicalStatus" placeholder="政治面貌" style="width:100%;" filterable>
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
          </el-row>

          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="婚姻状况 :" prop="maritalStatus">
                <el-select v-model="form.maritalStatus" placeholder="婚姻状况" style="width:100%;" filterable>
                  <el-option label="已婚" value="已婚"></el-option>
                  <el-option label="未婚" value="未婚"></el-option>
                  <el-option label="离异" value="离异"></el-option>
                  <el-option label="再婚" value="再婚"></el-option>
                  <el-option label="丧偶" value="丧偶"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="联系电话 :" prop="userTel">
                <el-input v-model="form.userTel" placeholder="联系电话"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="电子邮箱 :" prop="email">
                <el-input v-model="form.email" placeholder="电子邮箱"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="身份证号 :" prop="idCardNum">
                <el-input v-model="form.idCardNum" placeholder="身份证号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="紧急联系人 :" prop="emergencyContactPeople">
                <el-input v-model="form.emergencyContactPeople " placeholder="紧急联系人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="联系人关系 :" prop="emergencyContactRelation">
                <el-input v-model="form.emergencyContactRelation " placeholder="联系人关系"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="联系人电话 :" prop="emergencyContactTel">
                <el-input v-model="form.emergencyContactTel " placeholder="联系人电话"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="现住地址 :" prop="nowAddress">
                <el-input v-model="form.nowAddress" placeholder="现住地址"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="家庭地址 :" prop="familyAddress">
                <el-input v-model="form.familyAddress" placeholder="家庭地址"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="身份证地址 :" prop="IDCardAddress">
                <el-input v-model="form.IDCardAddress" placeholder="身份证地址"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
    <!--  教育经历 大板块 -->
    <div class="stepBox" v-if="active === 1">
      <!-- <label style="color: #DCDFE6">（请从最高教育经历开始填写，最多两项）</label> -->
      <!-- 时间线中整个盒子 -->
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in educationExperience" :key="index" :timestamp="activity.startDate">
          <p class="edu-data-p01 textAlignLeft">
            <span>{{activity.startDate}}</span>
            <i>-</i>
            <span>{{activity.endDate}}</span>
          </p>
          <p class="edu-data-p02 textAlignLeft">
            <span>
              {{activity.schoolName}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>
              {{activity.profession}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>{{activity.eduBackground}}</span>
          </p>
          <p class="edu-data-p03 textAlignLeft">
            <label>学习资质：</label>
            {{activity.learningNature}}
          </p>

          <p class="edu-data-p03 textAlignLeft">
            <label>所获证书或奖励：</label>
            {{activity.certificatesOrReward}}
          </p>
          <hr>
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
            @click="delIns(activity, educationExperience,'showEducationExperienceIns')"
          ></el-button>
        </el-timeline-item>
      </el-timeline>
      <!-- 添加按钮 -->
      <el-button
        type="primary"
        icon="el-icon-circle-plus"
        size="small"
        v-if="!showEducationExperienceIns"
        @click="addIns('educationExperienceIns','showEducationExperienceIns',)"
      ></el-button>

      <!-- /-*252 -->
      <!-- 教育经历 566-->
      <div
        style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;"
        v-if="showEducationExperienceIns"
      >
        <el-form ref="educationExperienceIns" :model="educationExperienceIns" :rules="rules" label-width="100px">
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="起始日期 :" prop="startDate">
                <el-date-picker
                  v-model="educationExperienceIns.startDate"
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
              <el-form-item label="学校名称 :" prop="schoolName">
                <el-input v-model="educationExperienceIns.schoolName" placeholder="学校名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="专业 :" prop="profession">
                <el-input v-model="educationExperienceIns.profession" placeholder="专业"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="学历 :" prop="eduBackground">
                <el-input v-model="educationExperienceIns.eduBackground" placeholder="学历"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="学习性质 :" prop="learningNature">
                <el-input v-model="educationExperienceIns.learningNature" placeholder="学习性质"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="证书或奖励 :" prop="certificatesOrReward">
                <el-input v-model="educationExperienceIns.certificatesOrReward" placeholder="证书或奖励"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-button
              type="primary"
              @click="saveToList(educationExperienceIns, educationExperience, 'showEducationExperienceIns')"
            >保存</el-button>
          </el-row>
        </el-form>
      </div>
    </div>

    <!-- //3培训经历 大板块-->
    <div class="stepBox" v-if="active === 2">
      <!-- <label style="color: #DCDFE6">（请从最近培训经历开始填写，最多两项）</label> -->
      <!-- 时间线中整个盒子 -->
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in trainingExperience" :key="index" :timestamp="activity.startDate">
          <p class="edu-data-p01 textAlignLeft">
            <span>{{activity.startDate}}</span>
            <i>-</i>
            <span>{{activity.endDate}}</span>
          </p>

          <p class="edu-data-p02 textAlignLeft">
            <span>
              {{activity.trainingOrgName}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>
              {{activity.trainingDuration}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>{{activity.trainingAddress}}</span>
          </p>
          <div class="msgShowBox">
            <p class="edu-data-p03 textAlignLeft p-media">
              <label>所获证书或奖励：</label>
              {{activity.certificateName}}
            </p>
          </div>
          <hr>
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editIns(activity, 'trainingExperienceIns','showTrainingExperienceIns')"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-delete-solid"
            size="small"
            @click="delIns(activity, trainingExperience,'showTrainingExperienceIns')"
          ></el-button>
        </el-timeline-item>
      </el-timeline>
      <el-button
        type="primary"
        icon="el-icon-circle-plus"
        size="small"
        v-if="!showTrainingExperienceIns"
        @click="addIns('trainingExperienceIns', 'showTrainingExperienceIns', )"
      ></el-button>

      <!-- 培训经历01-640 -->
      <div
        style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;"
        v-if="showTrainingExperienceIns"
      >
        <el-form ref="trainingExperienceIns" :model="trainingExperienceIns" :rules="rules" label-width="100px">
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="起始日期 :" prop="startDate">
                <el-date-picker
                  v-model="trainingExperienceIns.startDate"
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
                  v-model="trainingExperienceIns.endDate"
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
              <el-form-item label="培训机构 :" prop="trainingOrgName">
                <el-input v-model="trainingExperienceIns.trainingOrgName" placeholder="培训机构"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="培训时长 :" prop="trainingDuration">
                <el-input v-model="trainingExperienceIns.trainingDuration" placeholder="培训时长"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="培训地点:" prop="trainingAddress">
                <el-input v-model="trainingExperienceIns.trainingAddress" placeholder="培训地点"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="证书名称 :" prop="certificateName">
                <el-input v-model="trainingExperienceIns.certificateName" placeholder="证书名称"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-button
              type="primary"
              @click="saveToList(trainingExperienceIns, trainingExperience, 'showTrainingExperienceIns')"
            >保存</el-button>
          </el-row>
        </el-form>
      </div>
    </div>

    <div class="stepBox" v-if="active === 3">
      <!-- 4工作经历-768 -->
      <!-- <label style="color: #DCDFE6">（请从最近工作经历开始填写，最多三项）</label> -->

      <!-- 时间线中整个盒子 -->
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in workExperience" :key="index" :timestamp="activity.startDate">
          <p class="edu-data-p01 textAlignLeft">
            <span>{{activity.startDate}}</span>
            <i>-</i>
            <span>{{activity.endDate}}</span>
          </p>

          <p class="edu-data-p02 textAlignLeft">
            <span>
              {{activity.workCompanyName}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>
              {{activity.workJob}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>{{activity.workContent}}</span>
          </p>
          <div class="msgShowBox">
            <p class="edu-data-p03 textAlignLeft p-media">
              <label>证明人及其职务:</label>
              {{activity.workAttestor}}
            </p>

            <p class="edu-data-p03 textAlignLeft p-media">
              <label>证明人电话:</label>
              {{activity.attestorTel}}
            </p>
          </div>
          <hr>
          <!-- 按钮 -->
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editIns(activity, 'workExperienceIns','showWorkExperienceIns')"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-delete-solid"
            size="small"
            @click="delIns(activity, workExperience,'showWorkExperienceIns')"
          ></el-button>
        </el-timeline-item>
      </el-timeline>

      <el-button
        type="primary"
        icon="el-icon-circle-plus"
        size="small"
        v-if="!showWorkExperienceIns"
        @click="addIns('workExperienceIns', 'showWorkExperienceIns', )"
      ></el-button>

      <div
        style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;"
        v-if="showWorkExperienceIns"
      >
        <!-- 工作经历 -->
        <el-form ref="workExperienceIns" :model="workExperienceIns" :rules="rules" label-width="100px">
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="起始日期 :" prop="startDate">
                <el-date-picker
                  v-model="workExperienceIns.startDate"
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
                  v-model="workExperienceIns.endDate"
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
              <el-form-item label="公司名称 :" prop="workCompanyName">
                <el-input v-model="workExperienceIns.workCompanyName" placeholder="公司名称"></el-input>
              </el-form-item>
            </el-col>

            <el-col :md="12" class="maxwidth">
              <el-form-item label="工作职位 :" prop="workJob">
                <el-input v-model="workExperienceIns.workJob" placeholder="工作职位"></el-input>
              </el-form-item>
            </el-col>

            <el-col :md="12" class="maxwidth">
              <el-form-item label="工作内容 :" prop="workContent">
                <el-input v-model="workExperienceIns.workContent" placeholder="工作内容"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="证人+职务" prop="workAttestor">
                <el-input v-model="workExperienceIns.workAttestor" placeholder="证明人+职务"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="证明人电话 :" prop="attestorTel">
                <el-input v-model="workExperienceIns.attestorTel" placeholder="证明人电话"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-button type="primary" @click="saveToList(workExperienceIns, workExperience, 'showWorkExperienceIns')">保存</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
    <!--5 家庭成员 大板块-902 -->
    <div class="stepBox" v-if="active === 4">
      <!-- <label style="color: #DCDFE6">（最多介绍三项）</label> -->

      <!-- 时间线中整个盒子 -->
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in familyMember" :key="index" :timestamp="activity.familyMemberBorn">
          <p class="edu-data-p02 textAlignLeft">
            <span>
              {{activity.familyMemberName}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>
              {{activity.RelationshipWithMe}}
              <el-divider direction="vertical"></el-divider>
            </span>
            <span>{{activity.familyMemberBorn}}</span>
          </p>
          <div class="msgShowBox">
            <p class="edu-data-p03 textAlignLeft p-media">
              <label>工作单位:</label>
              {{activity.memberWorkUnit}}
            </p>
            <p class="edu-data-p03 textAlignLeft p-media">
              <label>职务:</label>
              {{activity.memberJob}}
            </p>
            <p class="edu-data-p03 textAlignLeft p-media">
              <label>联系电话:</label>
              {{activity.memberTel}}
            </p>
          </div>
          <hr class="timeline-hr">

          <!-- 按钮 -->
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editIns(activity, 'familyMemberIns','showFamilyMemberIns')"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-delete-solid"
            size="small"
            @click="delIns(activity, familyMember,'showFamilyMemberIns')"
          ></el-button>
        </el-timeline-item>
      </el-timeline>

      <el-button
        type="primary"
        icon="el-icon-circle-plus"
        size="small"
        v-if="!showFamilyMemberIns"
        @click="addIns('familyMemberIns','showFamilyMemberIns')"
      ></el-button>

      <div
        style="border:1px solid #b1acac; border-radius: 8px; padding: 5px; margin-bottom: 30px;"
        v-if="showFamilyMemberIns"
      >
        <el-form ref="familyMemberIns" :model="familyMemberIns" :rules="rules" label-width="100px">
          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="成员姓名 :" prop="familyMemberName">
                <el-input v-model="familyMemberIns.familyMemberName" placeholder="成员姓名"></el-input>
              </el-form-item>
            </el-col>

            <el-col :md="12" class="maxwidth">
              <el-form-item label="与本人关系 :" prop="RelationshipWithMe">
                <el-input v-model="familyMemberIns.RelationshipWithMe" placeholder="与本人关系"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="出生日期 :" prop="familyMemberBorn">
                <el-date-picker
                  v-model="familyMemberIns.familyMemberBorn"
                  value-format="yyyy/MM/dd"
                  type="date"
                  placeholder="选择出生日期"
                  style="width:100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :md="12" class="maxwidth">
              <el-form-item label="工作单位 :" prop="memberWorkUnit">
                <el-input v-model="familyMemberIns.memberWorkUnit" placeholder="工作单位"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :md="12" class="maxwidth">
              <el-form-item label="职务 :" prop="memberJob">
                <el-input v-model="familyMemberIns.memberJob" placeholder="职务"></el-input>
              </el-form-item>
            </el-col>

            <el-col :md="12" class="maxwidth">
              <el-form-item label="联系电话:" prop="memberTel">
                <el-input v-model="familyMemberIns.memberTel" placeholder="联系电话"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-button type="primary" @click="saveToList(familyMemberIns, familyMember, 'showFamilyMemberIns')">保存</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="nextAndPreStepBtn">
      <el-button style="margin-top: 12px;" @click="preStep" v-if="(active > 0) ?true:false">上一步</el-button>
      <el-button
        style="margin-top: 12px; background: #67C23A; color: #FFF;"
        @click="nextStep"
        v-if="(active <=4 )?true:false"
      >下一步</el-button>
      <el-button
        style="margin-top: 12px; background: #F44336; color: rgb(255, 255, 255); "
        v-if="(active > 4)?true:false"
        type.native="submit"
        @click="submitFrom"
      >确认提交</el-button>
    </div>
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
    var checkTel = (rules, value, callback) => {
      let reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
      if (!value) {
        return callback(new Error('电话不能为空'))
      }
      if (!reg.test(value)) {
        return callback(new Error('请输入正确的电话号码'))
      }
      return callback()
    }

    return {
      key_seluser: '',
      selAllotUserDialog: false,
      key_dept: '',
      echoDept: '',
      repeatDisabled: false,
      labelWidth: '90px',
      showBaiduisBtn: false,

      // 教育经历1161
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
      //
      //培训经历994
      trainingExperienceIns: {
        startDate: '',
        endDate: '',
        trainingOrgName: '',
        trainingDuration: '',
        trainingAddress: '',
        certificateName: '',
        isEdit: false
      },
      trainingExperience: [],
      showTrainingExperienceIns: true,
      //
      //工作经历1008
      workExperienceIns: {
        startDate: '',
        endDate: '',
        workCompanyName: '',
        workJob: '',
        workContent: '',
        workAttestor: '',
        attestorTel: '',
        isEdit: false
      },
      workExperience: [],
      showWorkExperienceIns: true,

      //
      //家庭成员 1086
      familyMemberIns: {
        familyMember: '',
        RelationshipWithMe: '',
        familyMemberBorn: '',
        memberWorkUnit: '',
        memberJob: '',
        memberTel: '',
        isEdit: false
      },
      familyMember: [],
      showFamilyMemberIns: true,

      //1051
      form: {
        trueName: '', //1
        sex: '', //2
        nationality: '', //3 民族
        userBirthDate: '', //4出生日
        ancestralHome: '', //5 籍贯
        politicalStatus: '', //6
        maritalStatus: '', //7婚姻
        email: '', //8
        userTel: '', //9电话

        idCardNum: '', //10
        emergencyContactPeople: '', //11
        emergencyContactRelation: '', //12
        emergencyContactTel: '', //13
        nowAddress: '', //14
        familyAddress: '', //15
        IDCardAddress: '' //16
      },
      classes: [],
      stepBoxActive: [],
      // showStepBoxActive: 0,
      active: 0,
      //

      //-*892
      rules: {
        trueName: [
          {
            required: true,
            message: '请输入真实姓名',
            trigger: ['blur', 'change']
          },
          {
            min: 1,
            max: 6,
            message: '真实姓名长度在 1 到 6 个字符',
            trigger: 'blur'
          }
        ],
        sex: [
          {
            required: true,
            message: '请选择出性别',
            trigger: ['blur', 'change']
          }
        ],
        ancestralHome: [
          { required: true, message: '请输入出籍贯', trigger: 'blur' }
        ],
        userBirthDate: [
          { required: true, message: '请输入出生日', trigger: 'blur' }
        ],
        nationality: [],
        entryDate: [],
        politicalStatus: [],
        maritalStatus: [],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        userTel: [
          {
            required: true,
            validator: checkTel,
            trigger: ['blur', 'change']
          }
        ],
        idCardNum: [
          {
            min: 18,
            max: 18,
            required: true,
            message: '请输入正确的18位身份证号',
            trigger: 'blur'
          }
        ],
        emergencyContactPeople: [
          {
            required: true,
            message: '请输入真实姓名',
            trigger: ['blur', 'change']
          },
          {
            min: 1,
            max: 6,
            message: '真实姓名长度在 1 到 6 个字符',
            trigger: 'blur'
          }
        ],
        emergencyContactRelation: [],
        emergencyContactTel: [
          {
            required: true,
            validator: checkTel,
            trigger: 'blur'
          }
        ],
        nowAddress: [],
        familyAddress: [],
        IDCardAddress: [],
        startDate: [],
        endDate: [],
        schoolName: [],
        profession: [],
        eduBackground: [],
        learningNature: [],
        certificatesOrReward: [],
        trainingOrgName: [],
        trainingDuration: [],
        trainingAddress: [],
        certificateName: [],
        workCompanyName: [],
        workJob: [],
        workContent: [],
        workAttestor: [],
        attestorTel: [{ validator: checkTel, trigger: 'blur' }],
        familyMemberName: [],
        RelationshipWithMe: [],
        familyMemberBorn: [],
        memberWorkUnit: [],
        memberJob: [],
        memberTel: [{ validator: checkTel, trigger: 'blur' }]
      }
    }
  },
  created() {
  },
  mounted() {
    // this._getInAreaList()
    // this._getclasses()
    this._rolesInit()
  },
  methods: {
    checkForm(showIns) {
      let formDict = {
        showEducationExperienceIns: 'educationExperienceIns',
        showTrainingExperienceIns: 'trainingExperienceIns',
        showWorkExperienceIns: 'workExperienceIns',
        showFamilyMemberIns: 'familyMemberIns'
      }
      let formName
      if (formDict.hasOwnProperty(showIns)) {
        formName = formDict[showIns]
      } else {
        formName = 'form'
      }
      let isValid
      this.$refs[formName].validate(function(valid) {
        window.console.log(valid)
        if (valid) {
          // alert('submit!');
          // return true
        } else {
          window.console.log('error submit!!')
          // return false
        }
        isValid = valid
      })
      return isValid
    },
    submitFrom() {
      //最后点击提交按钮之后，关闭所有的添加框，以免表单必选项影响提交
      this.showFamilyMemberIns = false
      this.showWorkExperienceIns = false
      this.showEducationExperienceIns = false
      this.showTrainingExperienceIns = false
      this.$confirm('核实之后，确定要提交?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$post('/Oper.do?AddUser', this._beforeSend()).then(res => {
            window.console.log(res)
            // this.$message({
            //   type: 'success',
            //   message: '提交成功!'
            // })
            if (res.data[0].success) {
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              // this.$router.push('/indexPage/userList')
            } else {
              this.$message({
                message: '提交失败',
                type: 'error'
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          })
        })
    },
    _beforeSend() {
      window.console.log(this.form)
      let params = {
        EX_JB: '5230f8f2343211e9813e00e066be4061',
        EX_RSSJ: null,
        EX_XNRZ: null,
        EX_ZGYHYHK: null,
        EX_ZHYHK: null,
        SFZ: this.form['idCardNum'],
        classes_id: '8ce41bfe34e811e9813e00e066be4061',
        code: null,
        dept: null,
        duties: '10',
        hi: null,
        hiredate: null,
        mobile: this.form['userTel'],
        name: null,
        phone: null,
        place_id: 'HUB027',
        position: 15,
        pwd: null,
        role: '16',
        sequence: '649f19b3c16411e8929700e066be4061',
        sex: this.form['sex'],
        superior_id: null,
        superior_name: null,
        truename: this.form['trueName'],
        workid: null
      }
      let tmpForm = {}
      Object.assign(tmpForm, this.form)
      this.$delete(tmpForm, 'trueName')
      this.$delete(tmpForm, 'sex')
      this.$delete(tmpForm, 'userTel')
      this.$delete(tmpForm, 'idCardNum')
      params.form = tmpForm
      params.familyMember = this.familyMember
      params.workExperience = this.workExperience
      params.educationExperience = this.educationExperience
      params.trainingExperience = this.trainingExperience
      window.console.log(params)
      return params
    },
    //下一步
    nextStep() {
      // 下一步校验
      if (this.active === 0 && !this.checkForm()) {
        return false
      }
      let showInsList = [
        '',
        'showEducationExperienceIns',
        'showTrainingExperienceIns',
        'showWorkExperienceIns',
        'showFamilyMemberIns'
      ]
      if (this.active > 0 && this.active <= 4) {
        if (!this.limitList(showInsList[this.active])) {
          return false
        }
      }
      if (this.active++ > 4) {
        this.active = 5
      }
    },
    //上一步
    preStep() {
      if (this.active-- < 0) {
        this.active = 0
      }
    },
    saveToList(ins, insList, showIns) {
      // ins 存储实例
      // insList 具体存储的数组
      // showIns 是否展示此窗口
      // 先校验
      window.console.log(this.checkForm(showIns))
      if (!this.checkForm(showIns)) {
        return false
      }
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
      insList.sort((ins1, ins2) => {
        return ins1.startDate - ins2.startDate
      })
      this.$set(this, showIns, false)
      ins = {}
    },
    editIns(ins, InsPrototype, showIns) {
      // ins 当前数据
      // InsPrototype：窗口展现数据
      window.console.log('编辑后showIns:' + this.showEducationExperienceIns)
      ins.isEdit = true
      this.$set(this, InsPrototype, ins)
      this.$set(this, showIns, true)
    },
    addIns(ins, showIns) {
      let listDict = {
        showEducationExperienceIns: this.educationExperience,
        showTrainingExperienceIns: this.trainingExperience,
        showWorkExperienceIns: this.workExperience,
        showFamilyMemberIns: this.familyMember
      }
      if (listDict[showIns].length===0 || this.limitList(showIns)) {
        this.$set(this, ins, { isEdit: false })
        this.$set(this, showIns, true)
      }
      // window.console.log('添加后showIns:' + this.showEducationExperienceInswIns)
    },
    limitList(showIns) {
      let listDict = {
        showEducationExperienceIns: this.educationExperience,
        showTrainingExperienceIns: this.trainingExperience,
        showWorkExperienceIns: this.workExperience,
        showFamilyMemberIns: this.familyMember
      }
      let limitListDict = {
        showEducationExperienceIns: [1, 2],
        showTrainingExperienceIns: [0, 2],
        showWorkExperienceIns: [0, 3],
        showFamilyMemberIns: [1, 3]
      }
      window.console.log(limitListDict[showIns])
      if (
        limitListDict[showIns][0] <= listDict[showIns].length &&
        limitListDict[showIns][1] >= listDict[showIns].length
      ) {
        return true
      } else {
        this.$message({
          message: `条数为 ${limitListDict[showIns][0]} ~ ${
            limitListDict[showIns][1]
          } 之间`,
          type: 'warning'
        })
      }
    },
    delIns(ins, insList, showIns) {
      this.$set(this, showIns, false)
      this.$delete(insList, insList.indexOf(ins))
      // insList.splice(insList.indexOf(ins), 0)
    },
    //-*1103
    _rolesInit() {
      let allRules = [
        'trueName',
        'sex',
        'nationality',
        'userBirthDate', //出生日
        'entryDate',
        'ancestralHome',
        'politicalStatus',
        'maritalStatus',
        'email',
        'userTel', //电话
        'idCardNum',
        'emergencyContactPeople',
        'emergencyContactRelation',
        'emergencyContactTel',
        'nowAddress',
        'familyAddress',
        'IDCardAddress',
        'startDate',
        'endDate',
        'schoolName',
        'profession',
        'eduBackground',
        'learningNature',
        'certificatesOrReward',
        'trainingOrgName',
        'trainingDuration',
        'trainingAddress',
        'certificateName',
        'workCompanyName',
        'workJob',
        'workContent',
        'workAttestor', //工作证明人电话
        'attestorTel',
        'familyMemberName',
        'RelationshipWithMe',
        'familyMemberBorn',
        'memberWorkUnit',
        'memberJob',
        'memberTel'
      ]
      let customRulesField = []
      let selectRulesField = [
        'sex',
        'nationality',
        'userBirthDate', //出生日
        'entryDate',
        'politicalStatus',
        'maritalStatus',
        'startDate',
        'endDate',
        'familyMemberBorn'
      ]
      let inputRulesField = [
        'trueName',
        'emergencyContactPeople',
        'emergencyContactRelation',
        'nowAddress',
        'familyAddress',
        'IDCardAddress',
        'schoolName',
        'profession',
        'eduBackground',
        'learningNature',
        'certificatesOrReward',
        'trainingOrgName',
        'trainingDuration',
        'trainingAddress',
        'certificateName',
        'workCompanyName',
        'workJob',
        'workContent',
        'workAttestor',
        'familyMemberName',
        'RelationshipWithMe',
        'memberWorkUnit',
        'memberJob',
        'memberTel'
      ]
      for (let field in this.rules) {
        if (allRules.indexOf(field) === -1) {
          throw new Error('此字段未建立规则')
        }
        if (customRulesField.indexOf(field) !== -1) {
          continue
        } else if (selectRulesField.indexOf(field) !== -1) {
          this.rules[field].push({
            required: true,
            message: '请选择必选项',
            trigger: 'change'
          })
        } else if (inputRulesField.indexOf(field) !== -1) {
          this.rules[field].push({
            required: true,
            message: '请输入必填项内容',
            trigger: 'blur'
          })
        }
      }
    },
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
    },
  }
}
</script>

<style scope>
.textAlignLeft {
  text-align: left;
}

.edu-data-p01 span {
  padding: 0 7px;
  text-align: center;
  min-width: 76px;
  display: inline-block;
  color: #666;
}
.edu-data-p01 span:first-child {
  padding-left: 0px;
}

.edu-data-p02 span {
  text-align: center;
  min-width: 60px;
  display: inline-block;
  color: #303133;
}

.edu-data-p03 {
  color: #999;
  font-size: 13px;
}
.edu-data-p03 label {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}
.timeline-hr {
  border-color: #f2f2f2;
}
.msgShowBox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
@media screen and (min-width: 600px) {
  .msgShowBox .p-media {
    width: 48%;
  }
}
@media screen and (max-width: 600px) {
  .msgShowBox .p-media {
    width: 99%;
  }
}
</style>
