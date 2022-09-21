<script lang="ts">
	import {
		Button,
		Icon,
		Card,
		CardBody,
		CardFooter,
		CardSubtitle,
		CardText,
		CardTitle,
		Row,
		Col,
		Image
	} from "sveltestrap";
	let dummy = [
		{
			groupName: "자동차를 좋아해",
			image: "https://media2.giphy.com/media/3ofT5ySFXZ01oJ7aoM/200.gif",
			author: "Phillppe Patrick Strack",
			PostTitle: "UX 기본 원칙으로 보는 당근 마켓",
			description:
				'50년대에 그려진 "닭장"은 한 남자가 모자를 눌러쓴 채 닭장 앞에 앉아 있는 여름날의 풍경을 담고있다. 사실주의라기보다는 풍경을 통해 심리를 표현하는 표현주의에 가깝다. 울화를 연상시키는...'
		},
		{
			groupName: "자바스크립트 스터디",
			author: "Jonathan Ive",
			PostTitle: "UX 기본 원칙으로 보는 당근 마켓",
			description:
				'50년대에 그려진 "닭장"은 한 남자가 모자를 눌러쓴 채 닭장 앞에 앉아 있는 여름날의 풍경을 담고있다. 사실주의라기보다는 풍경을 통해 심리를 표현하는 표현주의에 가깝다. 울화를 연상시키는...'
		},
		{
			groupName: "자동차를 좋아해",
			image: "https://c.tenor.com/ZhfMGWrmCTcAAAAM/cute-kitty-best-kitty.gif",
			author: "Phillppe Patrick Strack",
			PostTitle: "UX 기본 원칙으로 보는 당근 마켓",
			description:
				'50년대에 그려진 "닭장"은 한 남자가 모자를 눌러쓴 채 닭장 앞에 앉아 있는 여름날의 풍경을 담고있다. 사실주의라기보다는 풍경을 통해 심리를 표현하는 표현주의에 가깝다. 울화를 연상시키는...'
		},
		{
			groupName: "자동차를 좋아해",
			image: "http://i.imgur.com/tCcR0UX.gif",
			author: "Phillppe Patrick Strack",
			PostTitle: "UX 기본 원칙으로 보는 당근 마켓",
			description:
				'50년대에 그려진 "닭장"은 한 남자가 모자를 눌러쓴 채 닭장 앞에 앉아 있는 여름날의 풍경을 담고있다. 사실주의라기보다는 풍경을 통해 심리를 표현하는 표현주의에 가깝다. 울화를 연상시키는...'
		}
	];
</script>

{#each dummy as { groupName, image, author, PostTitle, description }, i}
	<Card class="mb-3 dark-container">
		<CardTitle class="card-title border-bottom mt-3 p-2">
			<Row class="d-flex justify-content-center">
				<Col class="w-100">
					<Row>
						{groupName}
					</Row>
					<Row>
						{author}
					</Row>
				</Col>
				<Col class="flex-shrink-1">
					<Row class="d-flex">
						<Col xs="10"><Button>가입하기</Button></Col>
						<Col xs="2"><Icon name="three-dots" /></Col>
					</Row>
				</Col>
			</Row>
		</CardTitle>
		{#if image}
			<Image src={image} />
		{/if}
		<CardBody>
			<CardSubtitle>{PostTitle}</CardSubtitle>
			<CardText>
				{description}
			</CardText>
		</CardBody>
		<CardFooter>Footer</CardFooter>
	</Card>
{/each}
