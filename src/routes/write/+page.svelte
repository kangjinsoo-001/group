<script lang="ts">
  import { darkMode } from "$lib/store";
  import Editor from "@tinymce/tinymce-svelte";
  import { env } from "$env/dynamic/public";
  import { Badge } from "sveltestrap";

  import logoImage from "$lib/images/group-logo.png";
  import DarkLogoImage from "$lib/images/dark_mode_logo.png";
  //   import { t } from "$lib/translations";
  import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";

  type Procedure = "first" | "second" | "third" | "fourth";
  let procedure: Procedure = "first";
  let isDarkMode: boolean;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

  function handleChange(value: Procedure, order: "asc" | "desc") {
    switch (value) {
      case "first":
        procedure = order === "asc" ? "second" : "first";
        break;
      case "second":
        procedure = order === "asc" ? "third" : "first";
        break;
      case "third":
        procedure = order === "asc" ? "fourth" : "second";
        break;
      case "fourth":
        procedure = order === "asc" ? "fourth" : "third";
        break;
      default:
        break;
    }
  }

  let value = "";

  const conf = {
    plugins:
      "preview searchreplace autolink autosave directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking insertdatetime advlist lists wordcount help charmap quickbars emoticons",
    toolbar:
      "restoredraft undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview print | image media link codesample",
    toolbar_sticky: true,
    image_caption: true,
    autosave_ask_before_unload: true,
    autosave_interval: "30s",
    autosave_prefix: "tinymce-autosave-{path}{query}-{id}-",
    autosave_restore_when_empty: false,
    autosave_retention: "2m",
    quickbars_selection_toolbar:
      "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
  };
</script>

<div class="write-container">
  <div class="test-container">
    <main>
      <div class="py-5 text-center">
        <div class="write-header">
          <div class="title-one">글쓰기</div>
          <div>
            <div class="label">
              <div>초안</div>
              <div class="number">12</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Editor apiKey={env.PUBLIC_TINY_API_KEY} id="write" bind:value {conf} />
      </div>

      <div class="flc jsb">
        <div class="title-one">글쓰기</div>
        <div>
          <div class="label">
            <div>초안</div>
            <div class="number">12</div>
          </div>
        </div>
      </div>
    </main>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2017–2021 Company Name</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="/">Privacy</a></li>
        <li class="list-inline-item"><a href="/">Terms</a></li>
        <li class="list-inline-item"><a href="/">Support</a></li>
      </ul>
    </footer>
  </div>
</div>
