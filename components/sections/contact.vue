<template>
  <div id="contact" class="h-screen w-full bg-gray-100 relative flex items-center justify-center">
    <div
      class="container mx-auto shadow-md rounded p-8 mb-4 z-50"
      style="height: 90vh; background-color: rgba(255, 255, 255, 0.4);"
    >
      <h2 class="text-center text-2xl text-gray-700 font-bold mb-4">お問い合わせ</h2>
      <form
        v-if="!isSubmitted"
        name="contactForm"
        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdU_6pnmkvOTKFCGzhvH8ooZrub5SW_shrXMXJ4zfktjf6KyA/formResponse"
        method="POST"
      >
        <div class="field">
          <label class="block text-gray-700 text-sm font-bold mb-2">お名前</label>
          <input
            type="text"
            rules="required"
            v-model="form_name"
            name="entry.1158105261"
            fieldname="お名前"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p class="text-red-500 text-sm mb-6" v-if="name_err">お名前を入力してください。</p>
        </div>

        <div class="field">
          <p class="block text-gray-700 text-sm font-bold mb-2">メールアドレス</p>
          <input
            type="email"
            rueles="required|email"
            v-model="form_email"
            name="entry.1136389358"
            fieldname="メールアドレス"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p class="text-red-500 text-sm mb-6" v-if="email_err">有効なメールアドレスを入力してください。</p>
        </div>

        <div class="field">
          <p class="block text-gray-700 text-sm font-bold mb-2">お問い合わせ内容</p>
          <textarea
            rules="required"
            v-model="form_message"
            name="entry.1764824192"
            fieldname="お問い合わせ内容"
            class="md:h-64 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p class="text-red-500 text-sm mb-6" v-if="message_err">メッセージ内容を入力してください。</p>
        </div>

        <div class="submit text-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="submitData()"
            v-if="!invaild"
          >送信</button>
          <p v-if="invaild">すべて必須項目です。入力し終えると送信ボタンが有効化されます。</p>
        </div>
      </form>
      <iframe name="hiddenIframe" frameborder="0" style="display: none;"></iframe>
      <div v-if="isSubmitted" class="animated fadeIn" style="margin-top: 30px;">
        <p>お問い合わせありがとうございました。確認次第、メールアドレス宛にご返信させていただきます。</p>
        <p>
          一週間経っても返信がない場合、もう一度お問い合わせをご送信いただくか、
          <a
            href="https://twitter.com/920oj"
            target="_blank"
          >Twitter</a>までご連絡ください。
        </p>
      </div>
    </div>
    <bgtext>Contact</bgtext>
  </div>
</template>

<script>
import bgtext from '~/components/commons/bgtext.vue';
export default {
  components: {
    bgtext,
  },
  data() {
    return {
      form_name: '',
      form_email: '',
      form_message: '',
      isSubmitted: false,
    };
  },
  computed: {
    invaild() {
      return this.name_err === false && this.email_err === false && this.message_err === false
        ? false
        : true;
    },
    name_err() {
      return this.form_name != '' ? false : true;
    },
    email_err() {
      return this.form_email != '' && this.form_email.match(/.+@.+\..+/) != null ? false : true;
    },
    message_err() {
      return this.form_message != '' ? false : true;
    },
  },
  methods: {
    submitData() {
      document.contactForm.submit();
      this.isSubmitted = true;
    },
  },
};
</script>

<style>
#contact {
  scroll-snap-align: start;
}
</style>