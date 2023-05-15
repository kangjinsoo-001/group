<script lang="ts">
  import { Button, Image, Card, CardBody } from "sveltestrap";
  import { t } from "$lib/locale/translations";

  let status = "groupMember" as "groupMember" | "growth";
  const dummy = {
    groupMember: [
      {
        title: "리버풀",
        image:
          "https://blog.kakaocdn.net/dn/bo0dDT/btqEA0VNUbl/obal92RkpYOHjp0kjpUmKk/img.png",
      },
      {
        title: "맨체스터 유나이티드",
        image:
          "https://assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png",
      },
      {
        title: "레알 마드리드",
        image: "http://www.newscube.kr/news/photo/201903/9679_9083_478.png",
      },
      {
        title: "바이에른 뮌헨",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
      },
    ],
    growth: [
      {
        title: "AC 밀란",
        image:
          "https://w.namu.la/s/21b8770bb49bc9c23c9b5431d656f22923f416ce48e11b16f600d457c1251de971ea6669efaa1d008b5f5de6fe7454450fcd736cea6b5d22e506e8e697d2d6a72f7211407df7fe6200c4621fd2d48e2a204f0f63055fed1f650c988c6123020e",
      },
      {
        title: "첼시",
        image:
          "https://upload.wikimedia.org/wikipedia/ko/thumb/a/ae/Chelsea_FC_Logo.svg/1200px-Chelsea_FC_Logo.svg.png",
      },
      {
        title: "토트넘",
        image:
          "https://upload.wikimedia.org/wikipedia/ko/thumb/3/33/%ED%86%A0%ED%8A%B8%EB%84%98_%ED%99%8B%EC%8A%A4%ED%8D%BC_FC_%EB%A1%9C%EA%B3%A0.svg/1200px-%ED%86%A0%ED%8A%B8%EB%84%98_%ED%99%8B%EC%8A%A4%ED%8D%BC_FC_%EB%A1%9C%EA%B3%A0.svg.png",
      },
      {
        title: "바르셀로나",
        image:
          "https://blog.kakaocdn.net/dn/bP2auB/btqEcFZlZjX/qookpjg5IKa4yaMG9UPSyk/img.png",
      },
    ],
  };
</script>

<div style="width: 300px">
  <div style="font-weight: bold;">{$t("main.groupRanking")}</div>
  <div style="display: flex;">
    <Button
      active
      outline
      color="secondary"
      on:click={() => {
        status = "groupMember";
      }}
    >
      {$t("main.groupMemberNumber")}
    </Button>
    <Button
      outline
      color="secondary"
      on:click={() => {
        status = "growth";
      }}
    >
      {$t("main.growthRate")}
    </Button>
  </div>
  {#each dummy[status] as item, index}
    <Card>
      <CardBody>
        {index + 1}
        <Image alt="img" src={item.image} style="width: 30px; height: 30px" />
        {item.title}
      </CardBody>
    </Card>
  {/each}
</div>
