SET statement_timeout = 0;

SET lock_timeout = 0;

SET idle_in_transaction_session_timeout = 0;

SET client_encoding = 'UTF8';

SET standard_conforming_strings = on;

SELECT pg_catalog.set_config ('search_path', '', false);

SET check_function_bodies = false;

SET xmloption = content;

SET client_min_messages = warning;

SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 17020)
-- Name: subjectsmodule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subjectsmodule (
    id integer NOT NULL, "subCode" text NOT NULL, module jsonb NOT NULL
);

ALTER TABLE public.subjectsmodule OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 17019)
-- Name: subjectsmodule_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjectsmodule_id_seq AS integer START
WITH
    1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER SEQUENCE public.subjectsmodule_id_seq OWNER TO postgres;

--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 216
-- Name: subjectsmodule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subjectsmodule_id_seq OWNED BY public.subjectsmodule.id;

--
-- TOC entry 3209 (class 2604 OID 17023)
-- Name: subjectsmodule id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjectsmodule ALTER COLUMN id SET DEFAULT nextval('public.subjectsmodule_id_seq'::regclass);

--
-- TOC entry 3357 (class 0 OID 17020)
-- Dependencies: 217
-- Data for Name: subjectsmodule; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO
    public.subjectsmodule
VALUES (
        2, '22CSE107', '{"module1": "/22CSE107_1.pdf", "module2": "/22CSE107_2.pdf"}'
    );

INSERT INTO
    public.subjectsmodule
VALUES (
        3, '22CSE330', '{"module1": "/22CSE330_1.pdf", "module2": "/22CSE330_2.pdf"}'
    );

INSERT INTO
    public.subjectsmodule
VALUES (
        4, '22CSE249', '{"module1": "/22CSE249_1.pdf", "module2": "/22CSE249_2.pdf"}'
    );

INSERT INTO
    public.subjectsmodule
VALUES (
        5, '22AECCE11', '{"module1": "/22AECCE11_1.pdf", "module2": "/22AECCE11_2.pdf"}'
    );

--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 216
-- Name: subjectsmodule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval ( 'public.subjectsmodule_id_seq', 5, true );

--
-- TOC entry 3211 (class 2606 OID 17027)
-- Name: subjectsmodule subjectsmodule_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjectsmodule
ADD CONSTRAINT subjectsmodule_pkey PRIMARY KEY (id);

--
-- TOC entry 3212 (class 1259 OID 17037)
-- Name: subjectsmodule_subCode_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "subjectsmodule_subCode_key" ON public.subjectsmodule USING btree ("subCode");

-- Completed on 2024-03-07 19:29:17 UTC

--
-- PostgreSQL database dump complete
--